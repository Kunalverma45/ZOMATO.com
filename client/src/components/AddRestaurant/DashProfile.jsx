import React, { useEffect, useState } from "react";
import axios from "axios";

const DashProfile = () => {
  const [profile, setProfile] = useState({
    email: "",
    primaryContact: "",
    ownerName: "",
    restaurantName: "",
    logo: "", // To store restaurant logo
  });

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/api/restaurants/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Profile fetched:", response.data);

      setProfile({
        email: response.data.email || "",
        primaryContact: response.data.primaryContact || "",
        ownerName: response.data.ownerName || "",
        restaurantName: response.data.restaurantName || "",
        logo: response.data.logo || "", // If logo is provided in the response
      });
    } catch (error) {
      console.error("Error fetching profile:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        "http://localhost:5000/api/restaurants/profile",
        profile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data && response.data.message) {
        alert(`Success: ${response.data.message}`);
      } else {
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating Profile:", error);
      alert("Failed to update Profile: Please try again later.");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      {/* Profile Section */}
      <section className="settings-section" style={{ marginBottom: "30px" }}>
        <h3 style={{ color: "#ff5a5f", fontSize: "1.8em" }}>Profile</h3>
        
        {/* Restaurant Logo */}
        {profile.logo ? (
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <img
              src={`http://localhost:5000/${profile.logo.replace(/\\/g, "/")}`}
              alt="Restaurant Logo"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        ) : (
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <div
              style={{
                width: "210px",
                // height: "140px",
                backgroundColor: "#f5f5f5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "2em",
                color: "#999",
              }}
            >
              <span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s" alt="" />
              </span>
            </div>
          </div>
        )}

        <form onSubmit={handleSaveChanges} style={{ maxWidth: "400px" }}>
          <input
            type="text"
            name="email"
            value={profile.email}
            placeholder="Email"
            onChange={handleInputChange}
            style={{
              display: "block",
              width: "100%",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            name="primaryContact"
            value={profile.primaryContact}
            placeholder="Phone Number"
            onChange={handleInputChange}
            style={{
              display: "block",
              width: "100%",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            name="ownerName"
            value={profile.ownerName}
            placeholder="Owner Name"
            onChange={handleInputChange}
            style={{
              display: "block",
              width: "100%",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            name="restaurantName"
            value={profile.restaurantName}
            placeholder="Restaurant Name"
            onChange={handleInputChange}
            style={{
              display: "block",
              width: "100%",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#ff5a5f",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Save Changes
          </button>
        </form>
      </section>
    </div>
  );
};

export default DashProfile;
