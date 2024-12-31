const express = require('express');
const router = express.Router();
const { Restaurant, Menu } = require('../models/Restaurant');

router.get('/getRestaurant', async (req, res) => {
    try {
        const { location, query } = req.query;
        const restaurantFilter = location ? { 'address.city': { $regex: location, $options: 'i' } } : {};

        const restaurants = await Restaurant.find(restaurantFilter, 'restaurantName email address');
        const menus = await Menu.find({}, 'email cuisines profileImage deliveryTimings');

        const data = restaurants.map((restaurant) => {
            const menu = menus.find((m) => m.email === restaurant.email);
            return {
                restaurantName: restaurant.restaurantName,
                cuisines: menu ? menu.cuisines : [],
                profileImage: menu ? menu.profileImage : null,
                deliveryTime: menu ? menu.deliveryTimings : null,
                location: restaurant.address.city,
            };
        });

        const filteredData = query
            ? data.filter(item =>
                item.restaurantName.toLowerCase().includes(query.toLowerCase()) ||
                item.cuisines.some(cuisine => cuisine.toLowerCase().includes(query.toLowerCase()))
            )
            : data;

        res.status(200).json(filteredData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch data' });
    }
});

// router.get('/getMenu', async (req, res) => {
//     try {
//         const { restaurantName } = req.query;
//         const restaurant = await Restaurant.findOne({ restaurantName });
//         if (!restaurant) {
//             return res.status(404).json({ message: 'Restaurant not found' });
//         }

//         const menu = await Menu.findOne({ email: restaurant.email });
//         if (!menu) {
//             return res.status(404).json({ message: 'Menu not found for the restaurant' });
//         }

//         res.status(200).json({
//             restaurantName: restaurant.restaurantName,
//             address: restaurant.address,
//             profileImage: menu.profileImage,
//             dishes: menu.dishes,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to fetch menu' });
//     }
// });


router.get('/api/restaurants/getMenu', async (req, res) => {
    try {
        const { restaurantName } = req.query;

        if (!restaurantName) {
            return res.status(400).json({ message: 'Restaurant name is required' });
        }

        const restaurant = await Restaurant.findOne({ restaurantName });
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        const menu = await Menu.findOne({ email: restaurant.email });
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found for the restaurant' });
        }

        res.status(200).json({
            restaurantName: restaurant.restaurantName,
            address: restaurant.address,
            profileImage: menu.profileImage,
            dishes: menu.dishes,
        });
    } catch (error) {
        console.error('Error fetching menu:', error.message);
        res.status(500).json({ message: 'Failed to fetch menu' });
    }
});



module.exports = router;
