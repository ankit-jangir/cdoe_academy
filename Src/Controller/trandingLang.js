const Course = require('../Model/Langauage.js'); // Use the correct path for your model
const fs = require('fs');
const path = require('path');

// Create Course
module.exports.CreateCourse = async (req, res) => {
    // Extract data from the request body
    let { name, description, price, duration, types } = req.body;

    // Check if a file was uploaded (thumbnail)
    const thumbnail = req.file ? req.file.filename : null; // Handle missing file

    // Check if all required fields are provided
    if (!name || !description || !price || !duration || !types) {
        return res.status(400).json({ message: "All fields are required." });
    }
// there are not changes to commit
    // Validate price (ensure it is a positive number)
    const priceNumber = Number(price);
    if (isNaN(priceNumber) || priceNumber <= 0) {
        return res.status(400).json({ message: "Price must be a positive number." });
    }

    // Create a new instance of the course model
    const newCourse = new Course({
        name,
        description,
        price: priceNumber,
        duration,
        types,
        thumbnail,
    });

    // Save the course to the database
    await newCourse.save();

    // Return success response with the created course
    return res.status(201).json({
        message: "Course created successfully",
        course: newCourse
    });
};

// Update Course
module.exports.UpdateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, duration, types } = req.body;

        // Find the course by ID
        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({ message: "Course not found." });
        }

        const fieldsToUpdate = {};
        if (name) fieldsToUpdate.name = name;
        if (description) fieldsToUpdate.description = description;
        if (price !== undefined) {
            const priceNumber = Number(price);
            if (isNaN(priceNumber) || priceNumber <= 0) {
                return res.status(400).json({ message: "Price must be a positive number." });
            }
            fieldsToUpdate.price = priceNumber;
        }
        if (duration) fieldsToUpdate.duration = duration;
        if (types !== undefined) {
            if (!Array.isArray(types)) {
                return res.status(400).json({ message: "Types must be an array." });
            }
            fieldsToUpdate.types = types;
        }

        // Update the course with the new values
        Object.assign(course, fieldsToUpdate);
        await course.save();  // Save without passing fieldsToUpdate to save()

        return res.status(200).json({
            message: "Course updated successfully",
            course
        });

    } catch (error) {
        console.error("Error updating course:", error);

        if (error.code === 11000) {
            return res.status(400).json({ message: "Course name must be unique." });
        }

        return res.status(500).json({
            message: "An error occurred while updating the course.",
            error: error.message || "Unknown error"
        });
    }
};

// Delete Course
module.exports.DeleteCourse = async (req, res) => {
    try {
        const { id } = req.params;

        const course = await Course.findByIdAndDelete(id);

        if (!course) {
            return res.status(404).json({ message: "Course not found." });
        }

        // Optionally, delete the associated thumbnail file
        if (course.thumbnail) {
            const filePath = path.join(__dirname, '../uploads', course.thumbnail);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                }
            });
        }

        return res.status(200).json({
            message: "Course deleted successfully",
            course
        });

    } catch (error) {
        console.error("Error deleting course:", error);

        return res.status(500).json({
            message: "An error occurred while deleting the course.",
            error: error.message || "Unknown error"
        });
    }
};

// Get All Courses
module.exports.GetCourses = async (req, res) => {
    try {
        // Optional: Handle pagination
        const { page = 1, limit = 10 } = req.query;
        const courses = await Course.find()
            .skip((page - 1) * limit)
            .limit(Number(limit));

        if (!courses || courses.length === 0) {
            return res.status(404).json({ message: "No courses found." });
        }

        return res.status(200).json({
            message: "Courses fetched successfully",
            courses
        });

    } catch (error) {
        console.error("Error fetching courses:", error);

        return res.status(500).json({
            message: "An error occurred while fetching the courses.",
            error: error.message || "Unknown error"
        });
    }
};