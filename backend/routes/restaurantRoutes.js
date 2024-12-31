require('dotenv').config();
const express = require('express');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const path = require('path');
const { Restaurant, Menu, Document } = require('../models/Restaurant');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

// Updated Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '..', 'uploads');
        cb(null, uploadPath); // Ensure the 'uploads' folder exists
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, '_')}`;
        cb(null, uniqueName);
    },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPG, JPEG, PNG, and PDF are allowed.'));
    }
};

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5MB
    fileFilter,
});

// Routes

// // Upload Route
// router.post('/upload', upload.single('image'), async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ error: 'No file uploaded' });
//         }

//         const restaurant = new Restaurant({
//             image: req.file.path,
//         });

//         await restaurant.save();

//         return res.status(200).json({
//             message: 'File uploaded and restaurant data saved.',
//             filePath: req.file.path,
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Server error. Please try again.' });
//     }
// });

// Upload Route
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        // Check if the file is uploaded
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Assuming the image is saved to the 'uploads' directory
        // Store the image file path in the database, or store the Base64 encoded image if needed
        const restaurant = new Restaurant({
            image: req.file.path,  // Store file path, you can store the Base64 data if needed
        });

        // Save restaurant data to the database
        await restaurant.save();

        // Respond with success message and file path
        return res.status(200).json({
            message: 'File uploaded and restaurant data saved.',
            filePath: req.file.path,  // Return the file path where the image is saved
        });
    } catch (err) {
        // Log the error for debugging
        console.error('Error during file upload:', err);

        // Send error response with descriptive message
        return res.status(500).json({ error: 'Server error. Please try again.' });
    }
});




// Restaurant Info API
router.post('/info', async (req, res) => {
    try {
        const { restaurantName, ownerName, email, ownerMobile, primaryContact, address } = req.body;

        if (!restaurantName || !ownerName || !email || !ownerMobile || !primaryContact || !address) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newRestaurant = new Restaurant({
            restaurantName,
            ownerName,
            email,
            ownerMobile,
            primaryContact,
            address,
        });

        await newRestaurant.save();
        res.status(201).json({ message: 'Restaurant info submitted successfully' });
    } catch (error) {
        console.error('Error in /info route:', error.message);
        res.status(500).json({ message: 'Server error. Could not save restaurant info.' });
    }
});

// Menu Details API
router.post('/menu', upload.fields([{ name: 'profileImage' }, { name: 'menuImages', maxCount: 5 }]), async (req, res) => {
    try {
        const profileImage = req.files['profileImage']?.[0];
        const menuImages = req.files['menuImages'] || [];
        const { email, cuisines, deliveryTimings } = req.body;

        if (!email || !cuisines || !profileImage) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newMenu = new Menu({
            email,
            cuisines: cuisines.split(',').map(c => c.trim()), // Trim cuisines for cleaner data
            deliveryTimings: JSON.parse(deliveryTimings || '{}'),
            profileImage: profileImage.path,
            menuImages: menuImages.map((file) => file.path),
        });

        await newMenu.save();
        res.status(201).json({ message: 'Menu details submitted successfully', menu: newMenu });
    } catch (error) {
        console.error('Error in /menu route:', error.message);
        res.status(500).json({ message: 'Server error. Could not save menu details.' });
    }
});


// // Add or Edit Dish
// router.post('/menu', async (req, res) => {
//     const { email, dishName, price, cuisine } = req.body;

//     if (!email || !dishName || !price || !cuisine) {
//         return res.status(400).json({ message: 'All fields are required.' });
//     }

//     try {
//         let menu = await Menu.findOne({ email });

//         if (!menu) {
//             // Create new menu if it doesn't exist
//             menu = new Menu({
//                 email,
//                 menuDetails: [{ dishName, price, cuisine }],
//             });
//         } else {
//             // Add dish to existing menu
//             menu.menuDetails.push({ dishName, price, cuisine });
//         }

//         await menu.save();
//         res.status(201).json({ message: 'Dish added successfully', menu });
//     } catch (error) {
//         console.error('Error adding dish:', error.message);
//         res.status(500).json({ error: 'Server error. Could not save dish.' });
//     }
// });



// // Edit Menu
// router.put('/editMenu', async (req, res) => {
//     const { id, dishName, price, cuisine } = req.body;

//     if (!id || !dishName || !price || !cuisine) {
//         return res.status(400).json({ message: "Dish ID, name, price, and cuisine are required." });
//     }

//     try {
//         const result = await Menu.updateOne({ 'menuDetails._id': id }, // Find the dish by its _id in menuDetails
//             { $set: { 'menuDetails.$.dishName': dishName, 'menuDetails.$.price': price, 'menuDetails.$.cuisine': cuisine } } // Update the matching fields
//         );

//         if (result.nModified === 0) {
//             return res.status(404).json({ message: 'Dish not found or no changes made' });
//         }

//         res.status(200).json({ message: 'Dish updated successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error updating dish' });
//     }
// });


// // Edit Dish
// router.put('/editMenu', async (req, res) => {
//     const { id, dishName, price, cuisine } = req.body;

//     if (!id || !dishName || !price || !cuisine) {
//         return res.status(400).json({ message: 'All fields are required.' });
//     }

//     try {
//         const result = await Menu.updateOne(
//             { 'menuDetails._id': id },
//             { $set: { 'menuDetails.$.dishName': dishName, 'menuDetails.$.price': price, 'menuDetails.$.cuisine': cuisine } }
//         );

//         if (result.nModified === 0) {
//             return res.status(404).json({ message: 'Dish not found or no changes made.' });
//         }

//         res.status(200).json({ message: 'Dish updated successfully' });
//     } catch (error) {
//         console.error('Error editing dish:', error.message);
//         res.status(500).json({ error: 'Error updating dish.' });
//     }
// });

// Edit Menu  // is dashboard done
router.put('/editMenu', async (req, res) => {
    const { id, dishName, price, cuisine } = req.body;

    if (!id || !dishName || !price) {
        return res.status(400).json({ message: "Dish ID, name, and price are required." });
    }

    try {
        const existingDish = await Menu.findOne({ 'menuDetails._id': id });
        if (!existingDish) {
            return res.status(404).json({ message: 'Dish not found' });
        }

        // If cuisine is not provided, we retain the existing value
        const updatedCuisine = cuisine ? cuisine : existingDish.menuDetails.find(dish => dish._id.toString() === id).cuisine;

        // Update the dish details
        const result = await Menu.updateOne(
            { 'menuDetails._id': id },
            { 
                $set: {
                    'menuDetails.$.dishName': dishName, 
                    'menuDetails.$.price': price, 
                    'menuDetails.$.cuisine': updatedCuisine // Use the existing or updated cuisine
                }
            }
        );

        if (result.nModified === 0) {
            return res.status(404).json({ message: 'Dish not found or no changes made' });
        }

        res.status(200).json({ message: 'Dish updated successfully' });
    } catch (error) {
        console.error('Error updating dish:', error);
        res.status(500).json({ error: 'Error updating dish' });
    }
});


// Add Dish to Menu
router.post('/addMenu', async (req, res) => {
    const { email, dishName, price, cuisine } = req.body;

    if (!email || !dishName || !price || !cuisine) {
        return res.status(400).json({ message: "Email, dish name, price, and cuisine are required." });
    }

    try {
        // Find the menu associated with the email and push the new dish to menuDetails
        const menu = await Menu.findOneAndUpdate(
            { email }, // Find by email
            {
                $push: {
                    menuDetails: { dishName, price, cuisine }, // Push new dish into menuDetails array
                },
            },
            { new: true, upsert: true } // Create the menu if it doesn't exist
        );

        if (!menu) {
            return res.status(404).json({ message: 'Menu not found.' });
        }

        res.status(201).json({ message: 'Dish added successfully.', menu });
    } catch (error) {
        console.error('Error adding dish:', error.message);
        res.status(500).json({ error: 'Error adding dish to menu.' });
    }
});


// // Add Menu Image
// router.post('/addMenuImage', upload.single('image'), async (req, res) => {
//     const { email } = req.body;

//     if (!email || !req.file) {
//         return res.status(400).json({ message: "Email and image are required." });
//     }

//     try {
//         const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

//         // Find the menu by email and add the image URL
//         const menu = await Menu.findOneAndUpdate(
//             { email },
//             { $push: { menuImages: imageUrl } },
//             { new: true, upsert: true }
//         );

//         res.status(201).json({ message: 'Image uploaded successfully.', menu });
//     } catch (error) {
//         console.error('Error uploading image:', error.message);
//         res.status(500).json({ error: 'Error uploading image.' });
//     }
// });


router.post('/addMenuImage', upload.single('image'), async (req, res) => {
    console.log('Body:', req.body);
    console.log('File:', req.file);

    const { email } = req.body;
    if (!email || !req.file) {
        return res.status(400).json({ message: "Email and image are required." });
    }

    try {
        const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

        const menu = await Menu.findOneAndUpdate(
            { email },
            { $push: { menuImages: imageUrl } },
            { new: true, upsert: true }
        );

        res.status(201).json({ message: 'Image uploaded successfully.', menu });
        // alert('Image Added Successfully...');
    } catch (error) {
        console.error('Error uploading image:', error.message);
        res.status(500).json({ error: 'Error uploading image.' });
    }
});

// // DELETE: Delete menu image by file path
// router.delete("/deleteMenuImage", async (req, res) => {
//     const { imagePath } = req.body;

//     try {
//         const restaurant = await Restaurant.findOne({ "menuImages.url": imagePath });

//         if (!restaurant) {
//             return res.status(404).json({ message: "Image not found in database." });
//         }

//         restaurant.menuImages = restaurant.menuImages.filter((image) => image.url !== imagePath);

//         await restaurant.save();

//         res.status(200).json({ message: "Image deleted successfully." });
//     } catch (error) {
//         console.error("Error deleting image:", error);
//         res.status(500).json({ message: "Server error. Unable to delete image." });
//     }
// });

// // Delete Menu Image
// router.delete('/deleteMenuImage', async (req, res) => {
//     const { email, imagePath } = req.body;

//     // Validate input
//     if (!email || !imagePath) {
//         return res.status(400).json({ message: 'Email and imagePath are required' });
//     }

//     try {
//         // Find the menu by email
//         const menu = await Menu.findOne({ email });
//         if (!menu) {
//             return res.status(404).json({ message: 'Menu not found' });
//         }

//         // Filter out the image to be deleted
//         const updatedImages = menu.menuImages.filter(image => {
//             if (!image || !image.contentType || !image.data) {
//                 console.warn('Invalid image object:', image);
//                 return true; // Keep invalid image entries for debugging
//             }

//             // Construct the base64 path to compare
//             const currentImagePath = `data:${image.contentType};base64,${image.data.toString('base64')}`;
//             return currentImagePath !== imagePath;
//         });

//         // Check if the image was actually deleted
//         if (updatedImages.length === menu.menuImages.length) {
//             return res.status(404).json({ message: 'Image not found in the menu' });
//         }

//         // Update the menu and save
//         menu.menuImages = updatedImages;
//         await menu.save();

//         res.status(200).json({ message: 'Image deleted successfully', menuImages: updatedImages });
//     } catch (error) {
//         console.error('Error deleting image:', error);
//         res.status(500).json({ error: 'Error deleting image' });
//     }
// });


// Delete Menu Image
router.delete('/deleteMenuImage', async (req, res) => {
    // Extract imagePath from query parameters
    const { imagePath } = req.query;

    // Log extracted data for debugging
    console.log('Received imagePath:', imagePath);

    // Validate input
    if (!imagePath) {
        console.error("Image path is undefined or null!");
        return res.status(400).json({ message: "Image path is required" });
    }

    try {
        // Find the image in the database (assuming 'menuImages' contains URLs)
        const restaurant = await Restaurant.findOne({
            'menuImages': 'http://localhost:5000/uploads/1735548784629-DC_comics.png'
        });
        console.log(restaurant);  // Check if the image path exists in the menuImages array
                
        if (!restaurant) {
            console.error('Image not found in the database.');
            return res.status(404).json({ message: 'Image not found in the database.' });
        }

        // Remove the image URL from the database
        restaurant.menuImages = restaurant.menuImages.filter((image) => image !== imagePath);

        // Save the updated restaurant document
        await restaurant.save();

        // Delete the image file from the server
        const imageName = imagePath.split('/').pop(); // Extract image filename from the path
        const filePath = path.join(__dirname, '..', 'uploads', imageName); // Correct path
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath); // Delete the file from the filesystem
        }

        res.status(200).json({ message: 'Image deleted successfully.' });
    } catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).json({ message: 'Error deleting image' });
    }
});



// Delete Dish
router.delete('/deleteDish', async (req, res) => {
    const { email, dishId } = req.body;

    if (!email || !dishId) {
        return res.status(400).json({ message: 'Email and dish ID are required.' });
    }

    try {
        const result = await Menu.updateOne(
            { email },
            { $pull: { menuDetails: { _id: dishId } } }
        );

        if (result.nModified === 0) {
            return res.status(404).json({ message: 'Dish not found.' });
        }

        res.status(200).json({ message: 'Dish deleted successfully' });
    } catch (error) {
        console.error('Error deleting dish:', error.message);
        res.status(500).json({ error: 'Error deleting dish.' });
    }
});




// // Get Menu Images
// router.get('/getMenuImages', async (req, res) => {
//     const { email } = req.query;
//     try {
//         const menu = await Menu.findOne({ email });

//         if (!menu) {
//             return res.status(404).json({ message: 'Menu not found' });
//         }

//         const images = menu.menuImages.map(image => {
//             if (image.data) {
//                 return `data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`;
//             }
//             return image.url;
//         });

//         res.json(images);
//     } catch (error) {
//         console.error('Error fetching menu images:', error);
//         res.status(500).json({ error: 'Error fetching menu images' });
//     }
// });

// // Get Menu Images
// router.get('/getMenuImages', async (req, res) => {
//     const { email } = req.query;

//     if (!email) {
//         return res.status(400).json({ message: "Email is required." });
//     }

//     try {
//         const menu = await Menu.findOne({ email }); // Find menu by email

//         if (!menu) {
//             return res.status(404).json({ message: 'Menu not found.' });
//         }

//         res.status(200).json({ images: menu.menuImages || [] });
//     } catch (error) {
//         console.error('Error fetching menu images:', error.message);
//         res.status(500).json({ error: 'Error fetching menu images.' });
//     }
// });


// Get Menu Image 
router.get('/getMenuImages', async (req, res) => {
    const { email } = req.query; // Pass email as a query parameter
    try {
        const menu = await Menu.findOne({ email });

        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }

        // Convert Buffer data to Base64 for all images
        const images = menu.menuImages.map(image => {
            if (image.data) {
                return `data:${image.contentType};base64,${image.data.toString('base64')}`;
            }
            return null;
        });

        res.status(200).json(images);
    } catch (error) {
        console.error('Error fetching menu images:', error);
        res.status(500).json({ error: 'Error fetching menu images' });
    }
});


// // Get Menu
// router.get('/getMenu', async (req, res) => {
//     const { email } = req.query;

//     try {
//         const menu = await Menu.findOne({ email });

//         if (!menu) {
//             return res.status(404).json({ message: 'Menu not found.' });
//         }

//         res.json(menu);
//     } catch (error) {
//         console.error('Error fetching menu:', error.message);
//         res.status(500).json({ error: 'Error fetching menu.' });
//     }
// });

router.get('/getMenu', async (req, res) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }

    try {
        // Find the restaurant by email and return only menuDetails
        const menu = await Menu.findOne({ email }, 'menuDetails');
        if (!menu) {
            return res.status(404).json({ message: 'Restaurant not found.' });
        }
        res.status(200).json(menu.menuDetails);
    } catch (error) {
        console.error('Error fetching menu details:', error);
        res.status(500).json({ message: 'Error fetching menu details.' });
    }
});






// Documents API
router.post(
    '/documents',
    upload.fields([{ name: 'panCard' }, { name: 'fssaiLicense' }]),
    async (req, res) => {
        try {
            const panCard = req.files?.['panCard']?.[0];
            const fssaiLicense = req.files?.['fssaiLicense']?.[0];
            const { email, bankDetails, gstNumber } = req.body;

            if (!email || !panCard || !fssaiLicense || !bankDetails || !gstNumber) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            const newDocument = new Document({
                email,
                panCard: panCard.path,
                fssaiLicense: fssaiLicense.path,
                bankDetails,
                gstNumber,
            });
            
            await newDocument.save();
            res.status(201).json({ message: 'Documents submitted successfully' });
        } catch (error) {
            console.error('Error in /documents route:', error.message);
            res.status(500).json({ message: 'Server error. Could not save documents.' });
        }
    }
);

// Login API
router.post('/login', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const restaurant = await Restaurant.findOne({ email });

        if (!restaurant) {
            return res.status(404).json({ message: 'Invalid email' });
        }

        const token = jwt.sign({ id: restaurant._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ message: 'Login successful', token, restaurant });
    } catch (error) {
        console.error('Error in /login route:', error.message);
        res.status(500).json({ message: 'Server error. Could not log in.' });
    }
});

// Profile Fetch API
router.get('/profile', authenticate, async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.user.restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        res.json(restaurant);
    } catch (error) {
        console.error('Error in /profile route:', error.message);
        res.status(500).json({ message: 'Server error. Could not fetch profile.' });
    }
});

// Profile Update API
router.put('/profile', authenticate, async (req, res) => {
    try {
        const { email, primaryContact, ownerName, restaurantName } = req.body;

        const updatedRestaurant = await Restaurant.findByIdAndUpdate(
            req.user.restaurantId,
            { email, primaryContact, ownerName, restaurantName },
            { new: true, runValidators: true }
        );

        if (!updatedRestaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        res.status(200).json(updatedRestaurant);
    } catch (error) {
        console.error('Error in /profile update route:', error.message);
        res.status(500).json({ message: 'Server error. Could not update profile.' });
    }
});



module.exports = router;
