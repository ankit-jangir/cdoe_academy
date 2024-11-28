const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Use absolute path for destination to avoid issues with relative paths
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../cdoe_academy/Public/ThumbnailUploads');  // Use the absolute path
    },
    filename: function (req, file, cb) {
        const myfile = Date.now() + '-' + path.extname(file.originalname);
        cb(null, myfile); // Save the file with a timestamp-based name
    }
});

// Validate file types: Only JPEG and PNG
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);  // Accept file
    } else {
        cb(new Error('Invalid file type. Only JPEG and PNG are allowed.'), false);  // Reject file
    }
};

// Log the upload configuration to check
console.log("Multer configuration loaded");

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB file size limit
    },
    fileFilter: fileFilter
});

module.exports = upload;