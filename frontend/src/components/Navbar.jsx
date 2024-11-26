import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-evenly items-center space-x-10 py-4 px-10 bg-slate-950">
        <div className="text-4xl text-gray-100 font-bold">NAvVis</div>

        {/* Products */}
        <div className="flex items-center space-x-1 text-sm text-gray-100 font-bold">
          <span>PRODUCTS</span>
          <ExpandMoreIcon sx={{ fontSize: 20 }} />
        </div>

        {/* Industries */}
        <div className="flex items-center space-x-1 text-sm text-gray-100 font-bold">
          <span>INDUSTRIES</span>
          <ExpandMoreIcon sx={{ fontSize: 20 }} />
        </div>

        {/* Resources */}
        <div className="flex items-center space-x-1 text-sm text-gray-100 font-bold">
          <span>RESOURCES</span>
          <ExpandMoreIcon sx={{ fontSize: 20 }} />
        </div>

        {/* Company */}
        <div className="flex items-center space-x-1 text-sm text-gray-100 font-bold">
          <span>COMPANY</span>
          <ExpandMoreIcon sx={{ fontSize: 20 }} />
        </div>

        {/* Right Section */}
        <div className="flex justify-end items-center pl-20 space-x-3">
          <div className="text-gray-100 px-6 py-2">
            <SearchIcon sx={{ fontSize: 24 }} />
          </div>
          <div className="bg-blue-600 text-white font-semibold px-6 py-2.5">
            Contact sales
          </div>
          <div className="border-2 border-blue-600 text-blue-600 px-6 py-2">
            Support
          </div>
          <div className="flex items-center space-x-2 bg-slate-100 text-gray-800 px-3 py-2">
            <span>EN</span>
            <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
          </div>
        </div>
      </div>
      <Home />
    </div>
  );
};

export default Navbar;
