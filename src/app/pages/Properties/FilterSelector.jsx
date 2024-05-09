import React from "react";

function FilterSelector({roomType, options, selectedOption, onSelect}) {
    return (
        <div className="mt-3">
            <h2>{roomType}</h2>
            <div className="flex flex-wrap space-x-2 space-y-2 -ml-3">
                <button className="hidden "></button>
                <button
                    type="button"
                    id="any"
                    className={`px-2 py-1 border  border-gray-600 rounded-full min-w-10 text-[13px] ${
                        selectedOption === "any" ? "bg-gray-600 text-white" : ""
                    }`}
                    onClick={() => onSelect("any")}>
                    any
                </button>
                {options.map((option) => (
                    <button
                        key={option}
                        type="button"
                        id={`${roomType}-${option}`}
                        className={`px-2 py-1 border border-gray-600  rounded-full min-w-10 text-xs ${
                            selectedOption === `${option}`
                                ? "bg-gray-600 text-white"
                                : ""
                        }`}
                        onClick={() => onSelect(`${option}`)}>
                        {option === 8 ? `${option}+` : option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FilterSelector;
