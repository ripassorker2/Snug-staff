"use client";
import React, {useState} from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import FilterSelector from "./FilterSelector";

const SidebarFilter = () => {
    const [value, setValue] = useState(50);
    const [selectedOptions, setSelectedOptions] = useState({
        bedroom: "any",
        guest: "any",
        bathroom: "any",
    });

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleRoomSelect = (roomType, option) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [roomType]: option,
        }));
    };

    return (
        <div className="text-gray-900">
            <div className="mt-4">
                <h2>Parking</h2>
                <div className="flex space-x-6 text-[13px]">
                    <label className="flex items-center space-x-2 ">
                        <input
                            type="radio"
                            name="parking"
                            value={true}
                            checked={true}
                            // onChange={handleParkingChange}
                        />
                        <p>Yes</p>
                    </label>
                    <label className="flex items-center space-x-2 ">
                        <input
                            type="radio"
                            name="parking"
                            value={false}
                            // checked={parking === false}
                            // onChange={handleParkingChange}
                        />
                        <p>No</p>
                    </label>
                </div>
            </div>
            <div className="mt-4">
                <FilterSelector
                    roomType="Bedroom"
                    options={[1, 2, 3, 4, 5, 6, 7, 8]}
                    selectedOption={selectedOptions.bedroom}
                    onSelect={(option) => handleRoomSelect("bedroom", option)}
                />
                <FilterSelector
                    roomType="Guest"
                    options={[1, 2, 3, 4, 5, 6, 7, 8]}
                    selectedOption={selectedOptions.guest}
                    onSelect={(option) => handleRoomSelect("guest", option)}
                />
                <FilterSelector
                    roomType="Bathroom"
                    options={[1, 2, 3, 4, 5, 6, 7, 8]}
                    selectedOption={selectedOptions.bathroom}
                    onSelect={(option) => handleRoomSelect("bathroom", option)}
                />
            </div>
            <div className="mt-4">
                <h2>Pricing</h2>
                <div className="flex justify-between items-center text-[13px]">
                    <p>50</p>
                    <p>{value}</p>
                    <p>1000</p>
                </div>{" "}
                <Slider
                    min={50}
                    max={1000}
                    value={value}
                    // defaultValue={0}
                    trackStyle={{backgroundColor: "#439ad4"}}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default SidebarFilter;
