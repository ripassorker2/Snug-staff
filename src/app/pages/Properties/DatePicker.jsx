import React from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({date, handleDateChange}) => {
    const today = new Date();
    const afterThreeDays = new Date(today);
    afterThreeDays.setDate(afterThreeDays.getDate() + 1);
    const afterThirtyDays = new Date(today);
    afterThirtyDays.setDate(afterThirtyDays.getDate() + 30);
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const todayDate = formatDate(today);
    const afterThreeDaysDate = formatDate(afterThreeDays);
    const afterThirtyDaysDate = formatDate(afterThirtyDays);
    return (
        <div className="shadow-lg p-6 border rounded-xl border-gray-300">
            <h2 className="font-semibold text-gray-800 pb-3 ">$94/night</h2>
            <Datepicker
                containerClassName="relative border border-gray-400 rounded-xl"
                inputClassName={
                    "p-2 m-1 w-[80%] rounded-md focus:ring-0 font-normal placeholder:text-gray-700 focus:outline-none"
                }
                value={date}
                primaryColor={"blue"}
                startFrom={new Date(todayDate)}
                endDate={new Date() + 30}
                separator="-"
                onChange={handleDateChange}
                displayFormat={"DD/MM/YYYY"}
                minDate={new Date(afterThreeDaysDate)}
                maxDate={new Date(afterThirtyDaysDate)}
                toggleClassName="absolute bg-primary rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
            />
            <div className="flex justify-between items-center space-x-2 p-1    mt-2">
                <p>$104 x 17 nights price</p>
                <p>$594</p>
            </div>
            <div className="flex justify-between items-center space-x-2 p-1    mt-2">
                <p>Cleaning fee </p>
                <p>$194</p>
            </div>
            <div className="flex justify-between items-center space-x-2 p-1    mt-2 border-b-2">
                <p>Service fee </p>
                <p>$134</p>
            </div>
            <div className="flex justify-between items-center space-x-2 p-1 mt-2 font-semibold">
                <p>Total fee </p>
                <p>$1134</p>
            </div>
            <div className="mt-3">
                <button className="btn-secondary w-full">Book Now</button>
            </div>
        </div>
    );
};

export default DatePicker;
