"use client";
import React, {useEffect} from "react";
import {
    useGetHostSubscriptionQuery,
    useSuccessSubscriptionMutation,
} from "@/redux/api/subscriptionApi";
import Loading from "../../loading";
import Image from "next/image";
import {Tooltip} from "@material-tailwind/react";
import toast from "react-hot-toast";
import HostProtected from "@/protect_route/HostProtect";

const TABLE_HEAD = [
    "Picture",
    "Property name",
    "Paid",
    "Start date",
    "End date",
];

const MySubscriptionPage = () => {
    const {data, isLoading} = useGetHostSubscriptionQuery();
    const [successSubscription, {isError, isLoading: ssLoading}] =
        useSuccessSubscriptionMutation();

    useEffect(() => {
        const subsInfo = JSON.parse(localStorage.getItem("subs_info"));
        if (subsInfo) {
            const subsData = {
                type_variation: "monthly",
                property_list: subsInfo.property_list,
                session_id: subsInfo.session_id,
            };
            successSubscription(subsData);
            localStorage.removeItem("subs_info");
        }
    }, []);
    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong");
            localStorage.removeItem("subs_info");
        }
    }, [isError]);

    if (isLoading || ssLoading) return <Loading />;
    return (
        <HostProtected>
            {data.length ? (
                <div className="">
                    <h2 className="sub-head pb-4">
                        <span>My subscription properties</span>
                    </h2>
                    <div className="shadow-md rounded-lg scrollbar">
                        <div className="w-full overflow-x-auto  ">
                            <table className="w-full min-w-max text-center">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head, index) => (
                                            <th
                                                key={index}
                                                className="border-b  border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <p className="font-medium ">
                                                    {head}
                                                </p>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((dt, index) => {
                                        const isLast =
                                            index === data.length - 1;
                                        const classes = isLast
                                            ? "p-4 text-[15px]"
                                            : "p-4 border-b border-gray-300 text-[15px]";

                                        return (
                                            <tr key={index}>
                                                <td
                                                    className={`${classes}  bg-blue-gray-100/20 flex justify-center items-center`}>
                                                    <Image
                                                        src={dt.image}
                                                        alt="property image"
                                                        height={90}
                                                        width={100}
                                                        className="rounded-lg object-cover object-center"
                                                    />
                                                </td>
                                                <td className={`${classes}`}>
                                                    <Tooltip
                                                        placement="top"
                                                        content={
                                                            dt.property_name
                                                        }
                                                        animate={{
                                                            mount: {
                                                                scale: 1,
                                                                y: 0,
                                                            },
                                                            unmount: {
                                                                scale: 0,
                                                                y: 25,
                                                            },
                                                        }}>
                                                        <p>
                                                            {dt.property_name
                                                                .length > 30
                                                                ? `${dt.property_name.slice(
                                                                      0,
                                                                      30
                                                                  )}...`
                                                                : dt.property_name}
                                                        </p>
                                                    </Tooltip>
                                                </td>

                                                <td
                                                    className={`${classes} bg-blue-gray-100/20`}>
                                                    ${dt.total_paid}
                                                </td>
                                                <td className={`${classes}`}>
                                                    {dt.start_date}
                                                </td>
                                                <td
                                                    className={`${classes} bg-blue-gray-100/20`}>
                                                    {dt.end_date}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center mt-32 h-[60vh] text-lg">
                    No property available.
                </p>
            )}
        </HostProtected>
    );
};

export default MySubscriptionPage;
