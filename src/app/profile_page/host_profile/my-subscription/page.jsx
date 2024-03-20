"use client";
import React from "react";
import {useGetHostSubscriptionQuery} from "@/redux/api/subscriptionApi";
import Loading from "../../loading";

const TABLE_HEAD = [
    "Property name",
    "Picture",
    "Total paid",
    "Start date",
    "End date",
];

const MySubscriptionPage = () => {
    const {data, isLoading} = useGetHostSubscriptionQuery();
    console.log(data);

    if (isLoading) return <Loading />;
    return (
        <>
            {data.length ? (
                <div className="">
                    <h2 className="sub-head pb-4">
                        <span>My subscription properties</span>
                    </h2>
                    <div className="w-full overflow-x-scroll  shadow-md rounded-lg">
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
                                    const isLast = index === data.length - 1;
                                    const classes = isLast
                                        ? "p-4 text-[15px]"
                                        : "p-4 border-b border-gray-300 text-[15px]";

                                    return (
                                        <tr key={index}>
                                            <td
                                                className={`${classes} bg-blue-gray-100/20`}>
                                                {/* <Tooltip
                                                            placement="top"
                                                            content={title}
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
                                                                {title.length >
                                                                30
                                                                    ? `${title.slice(
                                                                          0,
                                                                          30
                                                                      )}...`
                                                                    : title}
                                                            </p>
                                                        </Tooltip> */}
                                                Property name
                                            </td>
                                            <td
                                                className={`${classes} flex justify-center items-center`}>
                                                {/* <Image
                                                            src={
                                                                property_images[0]
                                                                    ?.image
                                                            }
                                                            alt="property image"
                                                            height={90}
                                                            width={100}
                                                            className="rounded-lg object-cover object-center"
                                                        /> */}
                                                images
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
            ) : (
                <p className="text-center mt-32 h-[60vh] text-lg">
                    No property available.
                </p>
            )}
        </>
    );
};

export default MySubscriptionPage;
