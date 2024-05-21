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
    const [location, setLocation] = useState({
        id: 999999,
        name: destination ? destination : "Anywhere",
    });
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
        const totalDay = totalDays(date);

        params.set("destination", location?.name || "Anywhere");
        params.set("bed_room", selectedOptions.bedroom);
        params.set("bath_room", selectedOptions.bathroom);
        params.set("maximum_guest", selectedOptions.guest);
        params.set("min_price", parseFloat(price[0]));
        params.set("max_price", parseFloat(price[1]));

        params.set("total_days", totalDay);

        if (date) {
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
        <>
            {/* for large devices  */}
            <div
                className={` max-w-[1200px] mx-auto md:rounded-full py-2.5   rounded-lg  md:flex hidden justify-around items-center   ${
                    path === "/"
                        ? "bg-gray-900 "
                        : " bg-white shadow-md border border-gray-300 text-gray-700 mt-[57px]"
                }`}>
                <div className="border-r border-gray-600 pr-4 mt-0 px-2 py-0.5 pl-3">
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
                <div className="border-r border-gray-600 pr-4 mt-0 px-2 py-0.5">
                    <p
                        className={`text-sm ${
                            path == "/" ? "text-white" : "text-gray-800"
                        } `}>
                        Select Date
                    </p>
                    <Calendar date={date} setDate={setDate} path={path} />
                </div>
                <div className="border-r border-gray-600 pr-4 mt-0 px-2 py-0.5">
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
                <div className="border-r border-gray-600 pr-4 mt-0 px-2 py-0.5 min-w-40">
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
                    className="btn-secondary rounded-full  py-3 px-6 inline-flex  items-center md:mt-0 mt-6">
                    <GoSearch className="text-xl mr-2" /> Search
                </button>
            </div>

            {/* for small decvies */}
            <div
                className={` max-w-[1200px] mx-auto   p-6 rounded-lg  md:hidden block  ${
                    path === "/"
                        ? "bg-gray-900 "
                        : " bg-white shadow-md border border-gray-300 text-gray-700 mt-[77px]"
                }`}>
                <div
                    className={`border border-gray-400 pr-4 mt-4 rounded-lg px-2 py-0.5 ${
                        path == "/" ? "border-gray-800" : "border-gray-400"
                    }`}>
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
                <div
                    className={`border border-gray-400 pr-4 mt-4 rounded-lg px-2 py-0.5 ${
                        path == "/" ? "border-gray-800" : "border-gray-400"
                    }`}>
                    <p
                        className={`text-sm ${
                            path == "/" ? "text-white" : "text-gray-800"
                        } `}>
                        Select Date
                    </p>
                    <Calendar date={date} setDate={setDate} path={path} />
                </div>
                <div
                    className={`border border-gray-400 pr-4 mt-4 rounded-lg px-2 py-0.5 ${
                        path == "/" ? "border-gray-800" : "border-gray-400"
                    }`}>
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
                <div
                    className={`border border-gray-400 pr-4 mt-4 rounded-lg px-2 py-0.5 ${
                        path == "/" ? "border-gray-800" : "border-gray-400"
                    }`}>
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
                    className="btn-secondary rounded-full  py-3 px-6 inline-flex  items-center  mt-6">
                    <GoSearch className="text-xl mr-2" /> Search
                </button>
            </div>
        </>
    );
};

export default Filter;
