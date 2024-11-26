import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-evenly items-center space-x-10 py-4 px-10 bg-slate-950">
        <div className="text-4xl text-gray-100 font-bold">NAvVis</div>
        <div className="text-base text-gray-100 font-bold">PRODUCTS</div>
        <div className="text-base text-gray-100 font-bold">INDUSTRIES</div>
        <div className="text-base text-gray-100 font-bold">RESOURCES</div>
        <div className="text-base text-gray-100 font-bold">COMPANY</div>
        <div className="border text-white px-6 py-3">SEARCH</div>
        <div className="rounded bg-blue-600 text-white font-semibold px-6 py-3">
          Tack to an expert
        </div>
        <div className="border-2 border-blue-600 text-blue-600 px-6 py-3 ">
          Supports
        </div>
      </div>
      <Home />
    </div>
  );
};

export default Navbar;
