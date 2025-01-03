const mongoose = require("mongoose");

// Restaurant Schema
const restaurantSchema = new mongoose.Schema({
    restaurantName: { type: String, required: true },
    ownerName: { type: String, required: true },
    email: { type: String, required: true },
    ownerMobile: { type: String, required: true },
    primaryContact: { type: String, required: true },
    address: {
        shopNumber: { type: String, required: true },
        floor: { type: String, required: true },
        area: { type: String, required: true },
        city: { type: String, required: true },
        landmark: { type: String, required: true },
    }
});

// Menu Schema
const menuSchema = new mongoose.Schema({
    email: { type: String, required: true },
    cuisines: [{ type: String, required: true }], // Array of cuisines

    deliveryTimings: {
        openTime: { type: String, required: true },
        closeTime: { type: String, required: true },
    },
    profileImage: { type: String }, // File path for profile image
    menuImages: [{ type: String }], // Array of file paths for menu images
    menuDetails: [{
        dishName: { type: String },
        price: { type: String }
        // cuisine: { type: String }
    }]
});

// Document Schema
const documentSchema = new mongoose.Schema({
    email: { type: String, required: true },
    panCard: { type: String, required: true }, // File path for PAN card
    fssaiLicense: { type: String, required: true }, // File path for FSSAI license
    bankDetails: { type: String, required: true }, // Bank account details text
    gstNumber: { type: String }, // GST number (optional)
});

// Export Models
module.exports = {
    Restaurant: mongoose.model("Restaurant", restaurantSchema),
    Menu: mongoose.model("Menu", menuSchema),
    Document: mongoose.model("Document", documentSchema),
};
