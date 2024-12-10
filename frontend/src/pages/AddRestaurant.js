import React, { useState } from "react";
import { addRestaurant } from "../api";

const AddRestaurant = () => {
  const [formData, setFormData] = useState({ name: "", location: "", cuisine: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRestaurant(formData);
      alert("Restaurant added successfully!");
    } catch (error) {
      console.error("Error adding restaurant:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="cuisine"
        placeholder="Cuisine"
        value={formData.cuisine}
        onChange={handleChange}
      />
      <button type="submit">Add Restaurant</button>
    </form>
  );
};

export default AddRestaurant;
