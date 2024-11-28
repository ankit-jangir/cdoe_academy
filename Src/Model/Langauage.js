const mongoose = require('mongoose');

// Define the schema for the TrendingLanguage model
const TrendingLanguages_Schema = mongoose.Schema({
    name: {
        type: String,
        required: true,  // Ensure name is provided
        unique: true     // Name should be unique
    },
    description: {
        type: String,
        required: true  // Description is mandatory
    },
    price: {
        type: Number,
        required: true  // Price must be provided
    },
    duration: {
        type: String,
        required: true  // Duration is required
    },
    types: {
        type: Array,
        required: true  // Type is required
    },
    thumbnail:{
        type: String,
        required: true  // Thumbnail is required
    },
    created_at: {
        type: Date,
        default: Date.now  // Set default to current timestamp
    },
    updated_at: {
        type: Date,
        default: Date.now  // Default to current timestamp
    }
});

// Ensure the unique index on the `name` field
TrendingLanguages_Schema.index({ name: 1 }, { unique: true });

// Mongoose middleware to update `updated_at` when the document is modified
TrendingLanguages_Schema.pre('save', function(next) {
    // Update the `updated_at` field to the current date before saving the document
    this.updated_at = Date.now();
    next();
});

// Create the TrendingLanguage model based on the schema
const TrendingLanguage = mongoose.model('trendingLanguages', TrendingLanguages_Schema);

// Export the model to use in other parts of the application
module.exports = TrendingLanguage;
