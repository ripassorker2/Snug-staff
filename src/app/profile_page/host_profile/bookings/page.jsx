/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, {useEffect} from "react";
import {MdOutlineDone} from "react-icons/md";
import {RxCross2} from "react-icons/rx";
import {
    useApproveBookingMutation,
    useCancelBookingMutation,
    useGetBookingForHostQuery,
} from "@/redux/api/bookingApi";
import Loading from "../../loading";
import SmallLoader from "@/app/components/SmallLoader/SmallLoader";
import toast from "react-hot-toast";

const Bookings = () => {
    const {data, isLoading} = useGetBookingForHostQuery();
    const [approveBooking, {isLoading: approveLoading, isSuccess}] =
        useApproveBookingMutation();
    const [
        cancelBooking,
        {isLoading: cancelLoaing, isSuccess: cancelIsSuccess},
    ] = useCancelBookingMutation();
    useEffect(() => {
        if (isSuccess)
            toast.success(
                "Booking has been approved. Payment Link has been sent."
            );
    }, [isSuccess]);
    useEffect(() => {
        if (cancelIsSuccess) toast.success("Booking has been canceled.");
    }, [cancelIsSuccess]);

    if (isLoading) return <Loading />;

    const getTotalEarnings = (parcentage, prevTotal) => {
        return prevTotal - (prevTotal * parcentage) / 100;
    };
    const ApprovedBooking = async (id) => {
        await approveBooking({id});
    };
    const CancelBooking = async (id) => {
        await cancelBooking({id, reason: "Demo reason"});
    };
    return (
        <div className="my-10">
            {data?.length ? (
                <>
                    {data?.map((booking, index) => (
                        <div
                            key={index}
                            className="grid md:grid-cols-2 gap-8  mt-10  border-2 border-gray-300 rounded-lg p-6 shadow-md">
                            <div className="flex flex-col justify-between">
                                <h3 className="text-2xl ">Stay Requirements</h3>
                                <div>
                                    <div className="flex items-center justify-between mt-6">
                                        <p>Expected Guests</p>
                                        <p>{booking.guest}</p>
                                    </div>

                                    <div className="flex items-center justify-between mt-3">
                                        <p>Bedroom Required</p>
                                        <p>{booking.bed_room}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <p>Bathroom Required </p>
                                        <p>{booking?.bath_room}</p>
                                    </div>

                                    <div className="flex items-center justify-between mt-3">
                                        <p>Parking Nedded </p>
                                        <p>{booking?.parking ? "Yes" : "No"}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row space-x-4 md:space-y-0 space-y-4 mt-6">
                                    {approveLoading ? (
                                        <button
                                            disabled={approveLoading}
                                            className="btn-secondary px-16">
                                            <SmallLoader />
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() =>
                                                    ApprovedBooking(booking?.id)
                                                }
                                                className="btn-secondary">
                                                Approve{" "}
                                                <MdOutlineDone className="text-lg ml-2" />
                                            </button>
                                        </>
                                    )}
                                    {cancelLoaing ? (
                                        <button
                                            disabled={cancelLoaing}
                                            className="btn-secondary px-16">
                                            <SmallLoader />
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() =>
                                                    CancelBooking(booking?.id)
                                                }
                                                className="btn-secondary">
                                                Cencel{" "}
                                                <RxCross2 className="text-lg ml-2" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="md:w-[80%] mx-auto">
                                <div className="">
                                    <div className="flex items-center space-x-3 border-b pb-3">
                                        <Image
                                            height={160}
                                            width={140}
                                            className="rounded-lg "
                                            src={booking?.property_image}
                                            alt="property image"
                                        />
                                        <div>
                                            <h2 className="font-semibold text-lg">
                                                {booking?.property_title}
                                            </h2>
                                            <p className="font-semibold mt-1">
                                                Price :{" "}
                                                {booking?.property_price}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="border-b pb-3">
                                        <p className="font-semibold my-4">
                                            Your Earnings
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <p>Total Charges</p>
                                            <p>£ {booking?.total_payment}</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-1">
                                            <p>Commission Percentage </p>
                                            <p>£ 10%</p>
                                        </div>
                                    </div>
                                    <div className="font-semibold flex justify-between items-center mt-2 ">
                                        <p>Your Earnings</p>
                                        <p>
                                            £{" "}
                                            {getTotalEarnings(
                                                10,
                                                booking?.total_payment
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div className="text-center mt-32 h-[50vh] text-lg ">
                    You don't have any pending bookings.
                </div>
            )}
        </div>
    );
};

export default Bookings;
