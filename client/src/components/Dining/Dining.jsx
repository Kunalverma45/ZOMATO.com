import React from "react";

// components
import Navbar from "../Navbar/Navbar"; // Import Navbar
import DiningCarousel from "./DiningCarousel";

const Dining = () => {
    return (
        <>
        <Navbar /> {/* Include Navbar */}
        <div className="mb-10">
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
                Collections
            </h1>
            <DiningCarousel />
        </div>
        </>
    );
};

export default Dining;

