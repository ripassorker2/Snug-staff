import Datepicker from "react-tailwindcss-datepicker";

const Calendar = ({date, setDate, path}) => {
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
        <Datepicker
            containerClassName="relative border-none rounded-xl"
            inputClassName={`rounded-md min-w-[270px] focus:ring-0 font-normal text-sm focus:outline-none ${
                path === "/"
                    ? "bg-gray-900 placeholder:text-gray-500 text-gray-500"
                    : "bg-white placeholder:text-gray-700 text-gray-700"
            }`}
            value={date}
            primaryColor={"blue"}
            startFrom={new Date(todayDate)}
            endDate={new Date() + 30}
            separator="-"
            onChange={(event) => setDate(event)}
            minDate={new Date(afterThreeDaysDate)}
            maxDate={new Date(afterThirtyDaysDate)}
            toggleClassName={`absolute  rounded-r-lg right-0 h-full px-3  focus:outline-none ${
                path == "/"
                    ? "bg-gray-900 text-gray-500"
                    : "bg-white text-gray-700"
            }`}
        />
    );
};

export default Calendar;
