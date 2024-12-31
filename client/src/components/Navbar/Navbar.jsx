import React, { useState, useEffect } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const Navbar = ({ user, openSignInModal, openSignUpModal }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [location, setLocation] = useState("Indore");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Added state for search query

  const handleLocationChange = (e) => {
    const query = e.target.value.toLowerCase();
    const locations = [
      { name: "Vijay Nagar - 1340 places", link: "https://www.zomato.com/indore/vijay-nagar-restaurants" },
      { name: "New Palasia - 162 places", link: "https://www.zomato.com/indore/new-palasia-restaurants" },
      { name: "Old Palasia - 98 places", link: "https://www.zomato.com/indore/old-palasia-restaurants" },
      { name: "Bhawar Kuan - 75 places", link: "https://www.zomato.com/indore/bhawar-kuan-restaurants" },
      { name: "Rau - 88 places", link: "https://www.zomato.com/indore/rau-restaurants" },
      { name: "By Pass Road North - 45 places", link: "https://www.zomato.com/indore/by-pass-road-north-restaurants" },
      { name: "South Tukoganj - 102 places", link: "https://www.zomato.com/indore/south-tukoganj-restaurants" },
      { name: "Sapna Sangeeta - 89 places", link: "https://www.zomato.com/indore/sapna-sangeeta-restaurants" },
      { name: "Sarwate Bus Stand - 56 places", link: "https://www.zomato.com/indore/sarwate-bus-stand-restaurants" },
      { name: "Geeta Bhavan - 124 places", link: "https://www.zomato.com/indore/geeta-bhavan-restaurants" },
      { name: "Best Luxury Dining Places", link: "https://www.zomato.com/indore/fine-dining-restaurants" },
      { name: "Romantic Dining Places", link: "https://www.zomato.com/indore/romantic-restaurants" },
      { name: "Great Cafes", link: "https://www.zomato.com/indore/great-cafes" },
      { name: "Local Favourite Places", link: "https://www.zomato.com/indore/6-local-favourite-places" },
    ];

    if (query) {
      setLocationSuggestions(
        locations.filter((loc) =>
          loc.name.toLowerCase().includes(query)
        )
      );
    } else {
      setLocationSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query); // Update the search query state
    const suggestions = [
      { name: "Pizza", url: "/dining" },
      { name: "Burger", url: "/dining" },
      { name: "Pasta", url: "/dining" },
      { name: "Ice Cream", url: "/dining" },
    ];
    if (query) {
      setSearchSuggestions(
        suggestions.filter((item) =>
          item.name.toLowerCase().includes(query)
        )
      );
    } else {
      setSearchSuggestions([]);
    }
  };

  // Close the dropdown if the user clicks outside the search or location fields
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.search-bar') && !e.target.closest('.location-bar')) {
        setLocationSuggestions([]);
        setSearchSuggestions([]);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const MobileNav = ({ user }) => (
    <div className="lg:hidden flex items-center justify-between w-full">
      {/* Logo */}
      <div className="w-24">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
       {/* Buttons */}
       <div className="flex items-center gap-4">
        <button
          className="bg-zomato-400 text-white py-1 px-6 rounded-full"
          onClick={() => window.open("https://www.zomato.com/mobile", "_blank")}
        >
          Use App
        </button>
        <button
          className="bg-zomato-400 text-white py-1 px-5 rounded-full"
          onClick={() =>
            window.open("https://www.zomato.com/investor-relations", "_blank")
          }
        >
          Investor Relations
        </button>
        <button
          className="bg-zomato-400 text-white py-1 px-5 rounded-full"
          onClick={() => window.open("http://localhost:3000/partner-with-us/new/", "_blank")}
        >
          Add Restaurant
        </button>
      </div>
      {/* Avatar */}
      <div className="relative">
        <div
          className="border border-gray-300 w-10 h-10 rounded-full cursor-pointer"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40">
            <button
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() =>
                window.open("https://www.zomato.com/users/kunal-verma-296546867/reviews", "_blank")
              }
            >
              Profile
            </button>
            <button
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() =>
                window.open("https://www.zomato.com/user-settings/notification", "_blank")
              }
            >
              Settings
            </button>
            <button
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => window.location.href = "/"}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const LargeNav = ({ user }) => (
    <div className="hidden lg:flex items-center justify-between w-full">
      {/* Logo */}
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>

      {/* Search Bar */}
      <div className="w-[70%] bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded relative ml-[30px] mr-[30px]">
      <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2 location-bar">
          <span className="text-zomato-400">
            <HiLocationMarker />
          </span>
          <input
            type="text"
            placeholder={location}
            className="w-full focus:outline-none"
            onChange={handleLocationChange}
          />
          <IoMdArrowDropdown />
        </div>
        <div className="flex w-full items-center gap-2 search-bar">
          <RiSearch2Line />
          <input
            type="search"
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full focus:outline-none"
            value={searchQuery} // Added value to bind the state
            onChange={handleSearch}
          />
        </div>

        {locationSuggestions.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white border shadow-lg rounded z-10">
            {locationSuggestions.map((loc) => (
              <div
                key={loc.name}
                className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => {
                  setLocation(loc.name);
                  setLocationSuggestions([]);
                  window.location.href = loc.url;
                }}
              >
                {loc.name}
              </div>
            ))}
          </div>
        )}
        {searchSuggestions.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white border shadow-lg rounded z-10">
            {searchSuggestions.map((item) => (
              <div
                key={item.name}
                className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => {
                  window.location.href = item.url;
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button
          className="bg-zomato-400 text-white py-1 px-6 rounded-full"
          onClick={() => window.open("https://www.zomato.com/mobile", "_blank")}
        >
          Use App
        </button>
        <button
          className="bg-zomato-400 text-white py-1 px-5 rounded-full"
          onClick={() =>
            window.open("https://www.zomato.com/investor-relations", "_blank")
          }
        >
          Investor Relations
        </button>
        <button
          className="bg-zomato-400 text-white py-1 px-5 rounded-full"
          onClick={() => window.open("http://localhost:3000/partner-with-us/new/", "_blank")}
        >
          Add Restaurant
        </button>
        <div className="relative">
          <div
            className="border border-gray-300 w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"
              alt="avatar"
              className="w-full h-full rounded-full"
            />
          </div>
          <p className="text-center mt-1 text-sm">{user?.fullName || "Kunal Verma"}</p>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40">
              <button
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() =>
                window.open("https://www.zomato.com/users/kunal-verma-296546867/reviews", "_blank")
              }
            >
              Profile
            </button>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() =>
                  window.open("https://www.zomato.com/user-settings/notification", "_blank")
                }
              >
                Settings
              </button>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => window.location.href = "/"}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );

  return (
    <header className="bg-white py-4 px-6">
      <div className="flex items-center justify-between">
        <MobileNav user={user} />
        <LargeNav user={user} />
      </div>
    </header>
  );
};

export default Navbar;
