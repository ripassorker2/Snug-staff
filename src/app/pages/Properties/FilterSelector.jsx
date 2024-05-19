import {usePathname} from "next/navigation";
import React from "react";

function FilterSelector({roomType, options, selectedOption, onSelect}) {
    const path = usePathname();
    return (
        <div className="mb-2">
            <h2 className="  ">{roomType}</h2>
            <div className="flex flex-wrap space-x-2 space-y-2 -ml-3">
                <button className="hidden "></button>
                <button
                    type="button"
                    id="any"
                    className={` border  border-gray-600 rounded-full min-w-10 text-[13px] ${
                        path == "/" ? "px-1.5 py-0.5" : "px-3 py-1"
                    } ${
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
                        className={` border border-gray-600  rounded-full min-w-10 text-xs ${
                            path == "/" ? "px-1.5 py-0.5" : "px-3 py-1"
                        } ${
                            selectedOption === `${option}`
                                ? "bg-gray-600 text-white"
                                : ""
                        }`}
                        onClick={() => onSelect(`${option}`)}>
                        {option === 6 ? `${option}+` : option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FilterSelector;
