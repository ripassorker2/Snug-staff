import {GoSearch} from "react-icons/go";
import Calendar from "./Calendar";
import {useState} from "react";
import Location from "./Location";
import {usePathname} from "next/navigation";
import Bedroom from "./Bedroom";

const Filter = () => {
    const [date, setDate] = useState(null);
    const [location, setLocation] = useState("");
    const path = usePathname();

    const [selectedOptions, setSelectedOptions] = useState({
        bedroom: "any",
        guest: "any",
        bathroom: "any",
    });

    const handleRoomSelect = (roomType, option) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [roomType]: option,
        }));
    };

    const handleSearch = () => {
        const quries = {
            startDate: date?.startDate,
            endDate: date?.endDate,
            location: location?.name,
            bedroom: selectedOptions.bedroom,
            guest: selectedOptions.guest,
            bathroom: selectedOptions.bathroom,
        };
        console.log(quries);
    };

    return (
        <div
            className={` max-w-[1100px] mx-auto rounded-full py-2  flex justify-around items-center   ${
                path === "/"
                    ? "bg-gray-900 "
                    : " bg-white shadow-md border border-gray-300 text-gray-700 mt-20"
            }`}>
            <div className="border-r border-gray-700 pr-4 pl-2">
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

            <button
                onClick={handleSearch}
                className="btn-secondary rounded-full  py-3 px-6 inline-flex  items-center">
                <GoSearch className="text-xl mr-2" /> Search
            </button>
        </div>
    );
};

export default Filter;
