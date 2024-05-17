"use client";
import React from "react";
import SearchBar from "./Search";
import {IoSearchSharp} from "react-icons/io5";

const Dropdown = ({openLocation, setOpenLocation}) => {
    return (
        <div className="w-full py-6 pb-8">
            <div className="relative inline-block">
                <div className="border border-gray-300 rounded-full shadow-md ">
                    <div className="flex justify-center items-center px-6 py-3 font-medium">
                        <button
                            className="border-r px-8 border-gray-300"
                            onClick={() => setOpenLocation(!openLocation)}>
                            Location
                        </button>
                        <h3 className="border-r px-8 border-gray-300">Dates</h3>
                        <h3 className=" px-8">Guests</h3>
                        <button className="bg-primary rounded-full h-9 w-9 p-1 inline-flex items-center justify-center text-white font-semibold">
                            <IoSearchSharp />
                        </button>
                    </div>
                </div>

                {openLocation && (
                    <div className="origin-top-left absolute left-0 mt-2 w-80 rounded-lg shadow-lg bg-white p-20 ">
                        <SearchBar />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
