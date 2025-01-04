import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashPhotos = ({ email }) => {
  const [menuImage, setImages] = useState([]); // Corrected state variable name for clarity
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch images function
  const fetchImages = async () => {
    if (!email) {
      console.warn('Email is undefined');
      return;
    }

    try {
      console.log(`Fetching images for email: ${email}`);
      const response = await axios.get(
        `http://localhost:5000/api/restaurants/getMenuImages?email=${email}`
      );
      if (response.data && Array.isArray(response.data)) {
        setImages(response.data); // Ensure data is in the expected format
      } else {
        console.warn('Unexpected response format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  // UseEffect hook to fetch images when component mounts or email changes
  useEffect(() => {
    fetchImages();
  }, [email]);

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file before uploading.');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('image', selectedFile); // Adjusted field name for consistency with backend

    try {
      const response = await axios.post(
        'http://localhost:5000/api/restaurants/addMenuImage',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      // Alert user of successful upload
      alert('Image uploaded successfully.');

      // Update state with new images if successful
      if (response.data.menu && Array.isArray(response.data.menu.menuImages)) {
        setImages(response.data.menu.menuImages);
      } else {
        console.warn('Unexpected response format:', response.data);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // Handle image deletion
  const handleDelete = async (imagePath) => {
    console.log('Image path to be deleted:', imagePath);  // Log the path here
    try {
    // Log the imagePath before sending the DELETE request
    console.log('Sending DELETE request for image:', imagePath);

    // Send DELETE request with imagePath in the request body
    await axios.delete('http://localhost:5000/api/restaurants/deleteMenuImage', {
        data: { imagePath },
        headers: {
          'Content-Type': 'application/json',
        },
    });
      
    console.log('Image deleted successfully.');
    alert('Image deleted successfully.');

    // Re-fetch images after deletion
    fetchImages(); // Ensure we refresh the images after deletion
  } catch (error) {
    console.error('Error deleting image:', error);
    alert('Error deleting image. Please try again.');
  }
};


  return (
    <section className="photos-section" style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h3 style={{ color: '#ff5a5f', fontSize: '1.8em' }}>Restaurant Photos</h3>
  
      <div style={{ marginBottom: '20px' }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        />
        <button
          onClick={handleUpload}
          style={{
            backgroundColor: '#ff5a5f',
            color: '#fff',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Upload
        </button>
      </div>
  
      <div
        className="photo-gallery"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {menuImage && menuImage.length > 0 ? (
          menuImage.map((image, index) => {
            const imageSrc = image ? `http://localhost:5000/${image.replace(/\\/g, '/')}` : 'https://content.jdmagicbox.com/comp/def_content_category/restaurants/photo-1517248135467-4c7edcad34c4-restaurants-3-abymb.jpg';
  
            return (
              <div
                key={index}
                className="photo-card"
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  textAlign: 'center',
                  padding: '10px',
                }}
              >
                <img
                  src={imageSrc || 'path/to/placeholder/image.jpg'}
                  alt={`Restaurant ${index}`}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                    marginBottom: '10px',
                  }}
                />
                <button
                  onClick={() => handleDelete(image)}
                  style={{
                    backgroundColor: '#ff5a5f',
                    color: '#fff',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '0.9em',
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <p style={{ color: '#999', fontStyle: 'italic' }}>🔍Fetching Photos..!!</p>
        )}
      </div>
    </section>
  );
  
};

export default DashPhotos;
