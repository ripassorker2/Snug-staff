import Guest from "./Guest";
import {GoSearch} from "react-icons/go";
import Calendar from "./Calendar";
import {useState} from "react";
import Location from "./Location";
import {usePathname} from "next/navigation";

const Filter = () => {
    const [date, setDate] = useState(null);
    const path = usePathname();
    return (
        <div
            className={` max-w-[1100px] mx-auto rounded-full py-2  flex justify-around items-center ${
                path === "/"
                    ? "bg-gray-900 "
                    : " bg-white shadow-md border border-gray-300 text-gray-700"
            }`}>
            <div className="border-r border-gray-700 pr-4">
                <p
                    className={`text-sm ${
                        path == "/" ? "text-white" : "text-gray-800"
                    } `}>
                    Location
                </p>
                <Location path={path} />
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
                <Guest path={path} />
            </div>

            <button className="btn-secondary rounded-full  py-3 px-6 inline-flex  items-center">
                <GoSearch className="text-xl mr-2" /> Search
            </button>
        </div>
    );
};

export default Filter;
