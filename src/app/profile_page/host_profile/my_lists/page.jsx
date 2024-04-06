"use client";
import HostProtected from "@/protect_route/HostProtect";
import Image from "next/image";
import {FaUser} from "react-icons/fa";
import {MdOutlineBedroomParent, MdOutlineBathroom} from "react-icons/md";
import {useGetPropertiesByHostQuery} from "@/redux/api/propertyApi";
import Loading from "../../loading";

const MyLists = () => {
    const {data, isLoading} = useGetPropertiesByHostQuery();
    if (isLoading) return <Loading />;
    return (
        <HostProtected>
            <div className="text-gray-800">
                <h2 className="sub-head">
                    <span>My all properties</span>
                </h2>
                {data?.length ? (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                        {data?.map((dt, i) => (
                            <div
                                key={i}
                                className="border border-gray-400 p-4 rounded-lg shadow-md">
                                <Image
                                    src={dt.property_images[0].image}
                                    width={200}
                                    height={200}
                                    className="rounded-lg w-full h-[200px]"
                                    alt="property images"
                                />
                                <div className="flex space-x-3 space-y-3 -ml-3 flex-wrap items-center my-2 text-sm">
                                    <button className="hidden "></button>
                                    <button className="bg-gray-300  inline-flex items-center rounded-lg px-2 py-1">
                                        <MdOutlineBedroomParent
                                            size={14}
                                            className="mr-1"
                                        />{" "}
                                        {dt.bed_room} bed
                                    </button>
                                    <button className="bg-gray-300  inline-flex items-center rounded-lg px-2 py-1">
                                        <MdOutlineBathroom
                                            size={14}
                                            className="mr-1"
                                        />
                                        {dt.bath_room} bath
                                    </button>
                                    <button className="bg-gray-300  inline-flex items-center rounded-lg px-2 py-1">
                                        <FaUser size={14} className=" mr-1" />
                                        {dt.guest} guest
                                    </button>
                                </div>
                                <div className="mt-3 leading-5 text-base">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {dt.title.length > 39
                                            ? `${dt.title.slice(0, 39)}...`
                                            : dt.title}
                                    </h3>

                                    <p className="pt-2">
                                        <b>${dt.price}</b> per person/night
                                    </p>
                                </div>
                                <button className="btn-secondary mt-4 w-full rounded-lg">
                                    More details
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="mt-7 text-base text-gray-800">
                        You dont have any property.
                    </p>
                )}
            </div>
        </HostProtected>
    );
};

export default MyLists;
