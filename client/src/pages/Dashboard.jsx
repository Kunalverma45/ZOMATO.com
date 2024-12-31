import React from "react";
import { useParams } from "react-router-dom";

// Components
import Navbar from "../components/Navbar/ExtraNav"; // Import Navbar
import Delivery from "../components/Delivery/Delivery";
import Dining from "../components/Dining/Dining";
import NightLife from "../components/NightLife/NightLife";
import Nutrition from "../components/Nutrition/Nutrition";

// CSS
import "./HomePage.css";

const Dashboard = () => {
    const { type } = useParams();

  if (type) {
    return (
      <div className="dashboard">
        <Navbar /> {/* Include Navbar */}
        <div className="my-5 mb-20 md:mb-10">
          {type === "delivery" && <Delivery />}
          {type === "dining" && <Dining />}
          {type === "night" && <NightLife />}
          {type === "nutrition" && <Nutrition />}
        </div>
      </div>
    );
  }

  return (
    <div className="homepage">
      
      {/* Include Navbar */}
       <Navbar />
      
      {/* Background Image */}
      <div
        className="background"
        style={{
          backgroundImage: `url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")`,
          marginTop: '1%'  // Corrected marginTop with camel case
        }}
      >
        <img
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          alt="Zomato Logo"
          className="zomato-logo"
        />
      </div>

      {/* Header Section */}
      <header className="header">
        <h1>Discover the best food & drinks in Indore</h1>
      </header>


      {/* Collections Section */}
      <div className="collections">
        <h3>◈ Collections</h3>
        <p>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Indore, based on trends.
        {/* <button className="collection-button">
          <a href="https://www.zomato.com/indore/collections">
            All Collections in Indore
          </a>
        </button> */}
        </p>
        <div className="collection-list">
          <div className="collection">
            <a href="https://www.zomato.com/indore/fine-dining-restaurants">
              <img
                src="https://b.zmtcdn.com/data/pictures/5/18601095/3a2e3cce5ad8a867c6ce5366ae948fb7.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                alt="Luxury Dining"
                className="collection-image"
              />
              <h4>Best Luxury Dining Places</h4>
            </a>
          </div>
          <div className="collection">
            <a href="https://www.zomato.com/indore/romantic-restaurants">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/19562899/c52f13bd9851548bfca0b6a3b28b8c58.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                alt="Romantic Dining"
                className="collection-image"
              />
              <h4>Romantic Dining Places</h4>
            </a>
          </div>
          <div className="collection">
            <a href="https://www.zomato.com/indore/great-cafes">
              <img
                src="https://b.zmtcdn.com/data/pictures/7/20582207/d9f4152847ede07181217bd9a944c03d.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                alt="Great Cafes"
                className="collection-image"
              />
              <h4>Great Cafes</h4>
            </a>
          </div>
          <div className="collection">
            <a href="https://www.zomato.com/indore/6-local-favourite-places">
              <img
                src="https://b.zmtcdn.com/data/pictures/chains/0/1401670/75a1140592e701394ab766d2f2511dbd.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                alt="Local Favourites"
                className="collection-image"
              />
              <h4>Local Favourite Places</h4>
            </a>
          </div>
          <div className="collection">
            <a href="https://www.zomato.com/indore/great-cafes">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/19562899/c52f13bd9851548bfca0b6a3b28b8c58.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                alt="Great Cafes"
                className="collection-image"
                />
              <h4>Great Cafes</h4>
            </a>
          </div>
          <div className="collection">
            <a href="https://www.zomato.com/indore/6-local-favourite-places">
              <img
                src="https://b.zmtcdn.com/data/pictures/chains/0/1401670/75a1140592e701394ab766d2f2511dbd.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                alt="Local Favourites"
                className="collection-image"
              />
              <h4>Local Favourite Places</h4>
            </a>
          </div>
          <div className="collection">
            <a href="https://www.zomato.com/indore/fine-dining-restaurants">
              <img
                src="https://b.zmtcdn.com/data/pictures/5/18601095/3a2e3cce5ad8a867c6ce5366ae948fb7.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                alt="Luxury Dining"
                className="collection-image"
                />
              <h4>Best Luxury Dining Places</h4>
            </a>
          </div>
          <div className="collection">
            <a href="https://www.zomato.com/indore/romantic-restaurants">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/19562899/c52f13bd9851548bfca0b6a3b28b8c58.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                alt="Romantic Dining"
                className="collection-image"
              />
              <h4>Romantic Dining Places</h4>
            </a>
          </div>
        </div>
      </div>

      {/* Popular Localities */}
      <div className="popular-localities">
        <h3>◈ Popular Localities in and around Indore</h3>
        <ul className="locality-list">
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/vijay-nagar-restaurants">
              Vijay Nagar - 1340 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/new-palasia-restaurants">
              New Palasia - 162 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/old-palasia-restaurants">
              Old Palasia - 98 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/bhawar-kuan-restaurants">
              Bhawar Kuan - 75 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/rau-restaurants">
              Rau - 88 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/by-pass-road-north-restaurants">
              By Pass Road North - 45 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/south-tukoganj-restaurants">
              South Tukoganj - 102 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/sapna-sangeeta-restaurants">
              Sapna Sangeeta - 89 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/sarwate-bus-stand-restaurants">
              Sarwate Bus Stand - 56 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/geeta-bhavan-restaurants">
              Geeta Bhavan - 124 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/vijay-nagar-restaurants">
              Vijay Nagar - 1340 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/new-palasia-restaurants">
              New Palasia - 162 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/old-palasia-restaurants">
              Old Palasia - 98 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/bhawar-kuan-restaurants">
              Bhawar Kuan - 75 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/rau-restaurants">
              Rau - 88 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/sarwate-bus-stand-restaurants">
              Sarwate Bus Stand - 56 places
            </a>
          </button>
          <button className="locality-button">
            <a href="https://www.zomato.com/indore/geeta-bhavan-restaurants">
              Geeta Bhavan - 124 places
            </a>
          </button>
        </ul>
      </div>


      {/* Footer */}
      <footer className="footer">
        <p>© 2008-2024 Zomato™ Ltd. All rights reserved.</p>
        <p>
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies.
        </p>
      </footer>
    </div>
  );
};

export default (Dashboard);
