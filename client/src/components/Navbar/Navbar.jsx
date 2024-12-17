import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

// components
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
        {/* Use App button */}
        <button
          className="bg-zomato-400 text-white py-2 px-3 rounded-full"
          onClick={() => window.open("https://www.zomato.com/mobile", "_blank")}
        >
          Use App
        </button>
        <button
          className="bg-zomato-400 text-white py-2 px-3 rounded-full"
          onClick={() => window.open("https://www.zomato.com/partner-with-us/new", "_blank")}
        >
          Add Restaurant
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
              <div className="absolute shadow-lg py-3 -bottom-28 w-40 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                <button onClick={() => window.open("https://www.zomato.com/investor-relations", "_blank")}>
                  Investor Relations
                </button>
                {/* <button onClick={() => window.open("https://www.zomato.com/partner-with-us/new", "_blank")}>
                  Add Restaurant
                </button> */}
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
              <div className="absolute shadow-lg py-3 -bottom-32 w-40 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={handleSignUp}>Sign Up</button>
                <button onClick={() => window.open("https://www.zomato.com/investor-relations", "_blank")}>
                  Investor Relations
                </button>
                {/* <button onClick={() => window.open("https://www.zomato.com/partner-with-us/new", "_blank")}>
                  Add Restaurant
                </button> */}
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
      <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
        <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
          <span className="text-zomato-400">
            <HiLocationMarker />
          </span>
          <input
            type="text"
            placeholder="Delhi NCR"
            className="w-full focus:outline-none"
          />
          <IoMdArrowDropdown />
        </div>
        <div className="flex w-full items-center gap-2">
          <RiSearch2Line />
          <input
            type="search"
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 relative">
        {/* Use App button */}
        <button
          className="bg-zomato-400 text-white py-2 px-3 rounded-full"
          onClick={() => window.open("https://www.zomato.com/mobile", "_blank")}
        >
          Use App
        </button>
        <button
          className="bg-zomato-400 text-white py-2 px-3 rounded-full"
          onClick={() => window.open("https://www.zomato.com/partner-with-us/new", "_blank")}
        >
          Add Restaurant
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
              <div className="absolute shadow-lg py-3 -bottom-28 -right-0 w-40 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                <button>Sign Out</button>
                <button onClick={() => window.open("https://www.zomato.com/investor-relations", "_blank")}>
                  Investor Relations
                </button>
                {/* <button onClick={() => window.open("https://www.zomato.com/partner-with-us/new", "_blank")}>
                  Add Restaurant
                </button> */}
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
              <div className="absolute shadow-lg py-3 -bottom-32 -right-0 w-40 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={handleSignUp}>Sign Up</button>
                <button onClick={() => window.open("https://www.zomato.com/investor-relations", "_blank")}>
                  Investor Relations
                </button>
                {/* <button onClick={() => window.open("https://www.zomato.com/partner-with-us/new", "_blank")}>
                  Add Restaurant
                </button> */}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
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

export default Navbar;
