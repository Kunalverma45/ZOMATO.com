import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

// Components
import SignUp from "../Auth/Signup";
import SignIn from "../Auth/Signin";

const MobileNav = ({
  user,
  isDropdownOpen,
  setIsDropdownOpen,
  signIn,
  signUp,
}) => {
  const handleSignIn = () => {
    signIn();
    setIsDropdownOpen(false);
  };

  const handleSignUp = () => {
    signUp();
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button
          className="bg-zomato-400 text-white py-2 px-3 rounded-full"
          onClick={() => window.open("https://www.zomato.com/mobile", "_blank")}
        >
          Use App
        </button>
        {user?.fullName ? (
          <>
            <div
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 w-9 h-9 rounded-full"
            >
              <img
                src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-28 w-40 z-20 flex flex-col gap-2 bg-zomato-400 text-white rounded-md">
                <button>Profile</button>
                <button>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="border p-2 border-gray-400 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropdownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-32 w-40 z-20 flex flex-col gap-2 bg-zomato-400 text-white rounded-md">
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={handleSignUp}>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const LargeNav = ({
  user,
  isDropdownOpen,
  setIsDropdownOpen,
  signIn,
  signUp,
}) => {
  const handleSignIn = () => {
    signIn();
    setIsDropdownOpen(false);
  };

  const handleSignUp = () => {
    signUp();
    setIsDropdownOpen(false);
  };

  const [location, setLocation] = useState("Indore");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

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
    const suggestions = [
      { name: "Pizza", url: "/search/pizza" },
      { name: "Burger", url: "/search/burger" },
      { name: "Pasta", url: "/search/pasta" },
      { name: "Ice Cream", url: "/search/ice-cream" },
      { name: "Best Luxury Dining Places", link: "https://www.zomato.com/indore/fine-dining-restaurants" },
      { name: "Romantic Dining Places", link: "https://www.zomato.com/indore/romantic-restaurants" },
      { name: "Great Cafes", link: "https://www.zomato.com/indore/great-cafes" },
      { name: "Local Favourite Places", link: "https://www.zomato.com/indore/6-local-favourite-places" },
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

  return (
    <div className="w-full items-center justify-between hidden lg:flex px-14">
      <div className="gap-4 items-center justify-around flex">
        <div className="w-20">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded relative">
        <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
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
        <div className="flex w-full items-center gap-2">
          <RiSearch2Line />
          <input
            type="search"
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full focus:outline-none"
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
      <div className="flex items-center gap-3 relative">
        <button
          className="bg-zomato-400 text-white py-2 px-3 rounded-full"
          onClick={() => window.open("https://www.zomato.com/mobile", "_blank")}
        >
          Use App
        </button>
        {user?.fullName ? (
          <>
            <div
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 w-9 h-9 rounded-full"
            >
              <img
                src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-28 -right-0 w-40 z-20 flex flex-col gap-2 bg-zomato-400 text-white rounded-md">
                <button>Profile</button>
                <button>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="border p-2 border-gray-400 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropdownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-32 -right-0 w-40 z-20 flex flex-col gap-2 bg-zomato-400 text-white rounded-md">
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={handleSignUp}>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const ExtraNav = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openSignInModal = () => setOpenSignIn(true);
  const openSignUpModal = () => setOpenSignUp(true);

  const user = {
    // Uncomment and add the user fullName to test
    // fullName: "Kunal",
  };

  return (
    <>
      <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn} />
      <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />

      <nav className="p-4 lg:py-2 flex bg-white shadow-md lg:shadow-none lg:border-b-2 border-gray-100 w-full items-center">
        <MobileNav
          user={user}
          setIsDropdownOpen={setIsDropdownOpen}
          isDropdownOpen={isDropdownOpen}
          signIn={openSignInModal}
          signUp={openSignUpModal}
        />
        <LargeNav
          user={user}
          setIsDropdownOpen={setIsDropdownOpen}
          isDropdownOpen={isDropdownOpen}
          signIn={openSignInModal}
          signUp={openSignUpModal}
        />
      </nav>
    </>
  );
};

export default ExtraNav;
