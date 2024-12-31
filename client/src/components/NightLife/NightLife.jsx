
import React from "react";

import Navbar from "../Navbar/Navbar"; // Import Navbar
import NightLifeCarousel from "./NightLifeCarousel";

const NightLife = () => {
    return (
        <>        
        <Navbar /> {/* Include Navbar */}
        <div className="mb-10">
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
                Nightlife Restaurant in Delhi NCR
            </h1>
            <NightLifeCarousel />
        </div>
        </>
    );
};

export default NightLife;