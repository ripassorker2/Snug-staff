import SmallLoader from "@/app/components/SmallLoader/SmallLoader";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import {useCreateBookingMutation} from "@/redux/api/bookingApi";
import {totalDays} from "@/utils/totalDays";
import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({property}) => {
    const {user} = useUserContext();
    const [date, setDate] = useState(null);
    const [guest, setGuest] = useState(property?.minimum_guest);
    const [totalPrice, setTotalPrice] = useState(0);

    const [createBooking, {isLoading, isSuccess, isError}] =
        useCreateBookingMutation();

    useEffect(() => {
        if (isSuccess)
            return toast.success(
                "Booking created successfully. Please wait for admin approval."
            );

        if (isError) return toast.error("Something went wrong");
    }, [isSuccess, isError]);

    useEffect(() => {
        const totalDay = totalDays(date);
        let calculatedPrice = 0;

        if (property?.discount_parcentage) {
            const nights =
                totalDay == "any" ? property?.minimum_stay : totalDay;
            calculatedPrice =
                property?.per_day_price *
                    (1 - property?.discount_parcentage / 100) *
                    nights +
                guest * property?.per_guest_price +
                property?.cleaning_fee;
        } else {
            const nights =
                totalDay == "any" ? property?.minimum_stay : totalDay;
            calculatedPrice =
                property?.per_day_price * nights +
                guest * property?.per_guest_price +
                property?.cleaning_fee;
        }

        setTotalPrice(calculatedPrice);
    }, [guest, property, date]);

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

    const handleBooking = async () => {
        if (!user) return toast.error("Please login first to make a booking");
        if (user?.role == "host")
            return toast.error("Please login as a user to make a booking");

        const totalDay = totalDays(date);

        if (property?.minimum_stay > totalDay) {
            return toast.error(
                "Booking minimum stay is " + property.minimum_stay + " days "
            );
        }

        const bookingData = {
            guest,
            property: property?.id,
            check_in: date?.startDate,
            check_out: date?.endDate,
        };

        await createBooking(bookingData);
    };

    return (
        <div className="shadow-lg p-6 border rounded-xl border-gray-300 capitalize">
            {property?.discount_parcentage ? (
                <>
                    <h2 className="font-semibold text-gray-800 ">
                        £ {}
                        {(
                            property?.per_day_price *
                            (1 - property?.discount_parcentage / 100)
                        ).toFixed(2)}
                        /night
                    </h2>
                    <p>
                        <del className="text-gray-600 text-sm pb-2">
                            £ {property?.per_day_price}
                        </del>
                        {"  "}
                        {property?.discount_parcentage}%
                    </p>
                </>
            ) : (
                <h2 className="font-semibold text-gray-800 pb-2 ">
                    £ {property?.per_day_price}/night
                </h2>
            )}
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
                onChange={(date) => setDate(date)}
                displayFormat={"DD/MM/YYYY"}
                minDate={new Date(afterThreeDaysDate)}
                maxDate={new Date(afterThirtyDaysDate)}
                toggleClassName="absolute bg-primary rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
            />

            <div className="flex justify-between items-center space-x-2 p-1 mt-2">
                <p>Per guest fee</p>
                <p>£ {property?.per_guest_price}</p>
            </div>

            <div className="flex justify-between p-1">
                <p>Guest </p>
                <div>
                    <button
                        type="button"
                        className={`p-2 rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 ${
                            property?.minimum_guest == guest
                                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                                : "bg-secondary text-gray-200"
                        }`}
                        onClick={() => {
                            setGuest((prevGuest) =>
                                prevGuest > property?.minimum_guest
                                    ? prevGuest - 1
                                    : prevGuest
                            );
                        }}
                        disabled={property?.minimum_guest == guest}>
                        -
                    </button>
                    <span className="px-2">{guest}</span>
                    <button
                        type="button"
                        className={`p-2 rounded-full w-6 h-6 inline-flex items-center justify-center ml-2 ${
                            property?.maximum_guest == guest
                                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                                : "bg-secondary text-gray-200"
                        }`}
                        onClick={() => {
                            setGuest((prevGuest) =>
                                prevGuest < property?.maximum_guest
                                    ? prevGuest + 1
                                    : prevGuest
                            );
                        }}
                        disabled={property?.maximum_guest == guest}>
                        +
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center space-x-2 p-1 mt-1">
                <p>Minimum stay</p>
                <p>{property?.minimum_stay} days</p>
            </div>

            <div className="flex justify-between items-center space-x-2 p-1 mt-1">
                <p>Cleaning fee </p>
                <p>£ {property?.cleaning_fee}</p>
            </div>
            <div className="flex justify-between items-center space-x-2 p-1 mt-1 font-semibold">
                <p>Total fee </p>
                <p>£ {totalPrice}</p>
            </div>
            <div className="mt-2">
                <button
                    disabled={date?.startDate == null || isLoading}
                    onClick={handleBooking}
                    className={`btn-secondary w-full ${
                        date?.startDate ||
                        "bg-gray-500 text-white cursor-not-allowed"
                    }`}>
                    {isLoading ? <SmallLoader /> : "Book Now"}
                </button>
            </div>
        </div>
    );
};

export default DatePicker;
