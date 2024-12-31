import React, { useEffect, useState } from 'react';

const DashMenu = ({ email }) => {
    const [menuDetails, setMenuDetails] = useState([]);
    const [dishName, setDishName] = useState("");
    const [price, setPrice] = useState("");
    const [cuisine, setCuisine] = useState(""); // New state for cuisine
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    // Effect to fetch menu when email is passed or updated
    useEffect(() => {
        if (email) {
            fetchMenuDetails(email);
        }
    }, [email]);

    // Effect to log menuDetails whenever it changes
    useEffect(() => {
        console.log('Menu Details Updated:', menuDetails); // Check if state is updated
    }, [menuDetails]);

    // Fetch menu details from the server
    const fetchMenuDetails = async (email) => {
        try {
            const response = await fetch(`http://localhost:5000/api/restaurants/getMenu?email=${email}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetched menu data:', data); // Log the fetched data
            if (Array.isArray(data) && data.length > 0) {
                setMenuDetails(data); // Update menu details if data is available
            } else {
                setMenuDetails([]); // Set empty array if no data
            }
        } catch (error) {
            console.error('Error fetching menu details:', error);
        }
    };

    // Add or edit dish in the menu
    const addOrEditDish = async (e) => {
        e.preventDefault();

        // If the dish is being edited, keep the old cuisine value if it's not changed
        const dishData = { id: editId, dishName, price, cuisine: cuisine || '' };

        try {
            const response = editMode
                ? await fetch('http://localhost:5000/api/restaurants/editMenu', {
                      method: 'PUT',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(dishData),
                  })
                : await fetch('http://localhost:5000/api/restaurants/addMenu', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ email, dishName, price, cuisine }),
                  });

            const data = await response.json();
            if (response.ok) {
                alert(editMode ? 'Dish Updated Successfully!' : 'Dish Added Successfully!');
                fetchMenuDetails(email); // Fetch the updated menu list after adding/updating the dish
                setDishName("");
                setPrice("");
                setCuisine(""); // Reset cuisine
                setEditMode(false);
                setEditId(null);
            } else {
                alert('Error while saving dish!');
                console.error('Error saving dish:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Delete a dish from the menu
    const deleteDish = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/restaurants/deleteMenu/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchMenuDetails(email); // Refresh menu after deletion
            } else {
                const data = await response.json();
                alert('Error while deleting dish!');
                console.error('Error deleting dish:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Handle edit of a dish
    const handleEdit = (item) => {
        setDishName(item.dishName);
        setPrice(item.price);
        setCuisine(item.cuisine || ""); // Ensure the cuisine is set for editing
        setEditMode(true);
        setEditId(item._id);
    };

    return (
        <section className="menu-section">
            <h3>Menu Details</h3>
            <form onSubmit={addOrEditDish}>
                <input
                    type="text"
                    placeholder="Dish Name"
                    value={dishName}
                    onChange={(e) => setDishName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <select
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                >
                    <option value="">Select Cuisine</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Fast Food">Fast Food</option>
                    <option value="North Indian">North Indian</option>
                    <option value="South Indian">South Indian</option>
                    <option value="Biryani">Biryani</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Sweets">Sweets</option>
                    <option value="Cakes">Cakes</option>
                </select>
                <button type="submit">{editMode ? 'Update Dish' : 'Add Dish'}</button>
            </form>

            {/* Display menu list if there are dishes */}
            <div className="menu-list">
                {menuDetails && menuDetails.length > 0 ? (
                    menuDetails.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <div className="menuDish">
                                <p className='dish_name'>{item.dishName}</p>
                                <p className='dish_price'>Rs.{item.price}</p>
                                {/* <p className='dish_cuisine'>Cuisine: {item.cuisine}</p> */}
                            </div>
                            <div className="menuBtn">
                                <button onClick={() => handleEdit(item)}>Edit</button>
                                <button onClick={() => deleteDish(item._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No dishes available.</p>
                )}
            </div>
        </section>
    );
};

export default DashMenu;
