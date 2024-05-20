"use client";
import {GoSearch} from "react-icons/go";
import Calendar from "./Calendar";
import {useState} from "react";
import Location from "./Location";
import Bedroom from "./Bedroom";
import PriceRange from "./PriceRange";
import {totalDays} from "@/utils/totalDays";
import {useSearchParams, usePathname, useRouter} from "next/navigation";

const Filter = ({
    destination,
    bed_room,
    bath_room,
    maximum_guest,
    min_price,
    max_price,
    start_day,
    end_day,
}) => {
    const [date, setDate] = useState({
        startDate: start_day || null,
        endDate: end_day || null,
    });
    const [location, setLocation] = useState(
        {id: 9999, name: destination} || {id: 1, name: "Anywhere"}
    );
    const [price, setPrice] = useState([min_price || 0, max_price || 1000]);

    const path = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    const [selectedOptions, setSelectedOptions] = useState({
        bedroom: bed_room || "any",
        bathroom: bath_room || "any",
        guest: maximum_guest || "any",
    });

    const handleRoomSelect = (roomType, option) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [roomType]: option,
        }));
    };

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams);

        params.set("destination", location.name || "anywhere");
        params.set("bed_room", selectedOptions.bedroom);
        params.set("bath_room", selectedOptions.bathroom);
        params.set("maximum_guest", selectedOptions.guest);
        params.set("min_price", parseFloat(price[0]));
        params.set("max_price", parseFloat(price[1]));

        if (date) {
            params.set("total_days", totalDays(date));
            params.set("start_day", date.startDate);
            params.set("end_day", date.endDate);
        }

        if (path.includes("properties")) {
            replace(`${path}?${params.toString()}`);
        } else {
            replace(`/properties?${params.toString()}`);
        }
    };

    return (
        <div
            className={` max-w-[1200px] mx-auto rounded-full py-2  flex justify-around items-center   ${
                path === "/"
                    ? "bg-gray-900 "
                    : " bg-white shadow-md border border-gray-300 text-gray-700 mt-[57px]"
            }`}>
            <div className="border-r border-gray-700 pr-4 pl-3">
                <p
                    className={`text-sm ${
                        path == "/" ? "text-white" : "text-gray-800"
                    } `}>
                    Location
                </p>
                <Location
                    location={location}
                    setLocation={setLocation}
                    path={path}
                />
            </div>
            <div className="border-r border-gray-700 pr-4">
                <p
                    className={`text-sm ${
                        path == "/" ? "text-white" : "text-gray-800"
                    } `}>
                    Select Date
                </p>
                <Calendar date={date} setDate={setDate} path={path} />
            </div>
            <div className="border-r border-gray-700 pr-4">
                <p
                    className={`text-sm ${
                        path == "/" ? "text-white" : "text-gray-800"
                    } `}>
                    Bedroom
                </p>
                <Bedroom
                    selectedOptions={selectedOptions}
                    handleRoomSelect={handleRoomSelect}
                    path={path}
                />
            </div>
            <div className="border-r border-gray-700 pr-4 min-w-40">
                <p
                    className={`text-sm ${
                        path == "/" ? "text-white" : "text-gray-800"
                    } `}>
                    Price Range
                </p>
                <PriceRange price={price} setPrice={setPrice} path={path} />
            </div>

            <button
                onClick={handleSearch}
                className="btn-secondary rounded-full  py-3 px-6 inline-flex  items-center">
                <GoSearch className="text-xl mr-2" /> Search
            </button>
        </div>
    );
};

export default Filter;
