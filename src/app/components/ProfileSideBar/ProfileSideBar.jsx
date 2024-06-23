"use client";
import Link from "next/link";
import {CgAdd, CgProfile} from "react-icons/cg";
import {usePathname} from "next/navigation";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import Loader from "@/app/loading";
import {RiCalendarCheckLine, RiMoneyDollarCircleLine} from "react-icons/ri";
import {LuBadgeDollarSign, LuTableProperties} from "react-icons/lu";

const ProfileSideBar = ({childrens}) => {
    const {user, loading} = useUserContext();
    const path = usePathname();
    if (loading) return <Loader />;

    return (
        <>
            {user ? (
                <div className="md:flex md:space-x-3 -mt-1 md:-mb-[85px]  text-gray-800">
                    <div className="p-4 lg:w-[17rem] md:w-64 w-full md:mb-0 mb-8 bg-gray-950 md:h-[86vh] bg-blue-gray-50 overflow-x-hidden overscroll-y-auto rounded ">
                        <div className="flex flex-col ">
                            <div className="space-y-4">
                                <div className=" md:text-3xl text-xl   font-semibold mt-2">
                                    <span>Snugstaff </span>
                                </div>
                                <div>
                                    <Link
                                        href={`/profile_page/${user?.role}_profile`}
                                        className={`text-center w-full mt-3 inline-flex items-center px-3 py-2 hover:bg-gray-400 rounded ${
                                            path ==
                                                `/profile_page/${user?.role}_profile` &&
                                            "bg-gray-400"
                                        }`}>
                                        <CgProfile size={20} className="mr-2" />{" "}
                                        Profile
                                    </Link>
                                    {user?.role == "host" && (
                                        <>
                                            <Link
                                                href={
                                                    "/profile_page/host_profile/my_lists"
                                                }
                                                className={`text-center w-full mt-3 inline-flex items-center px-3 py-2 hover:bg-gray-400 rounded ${
                                                    path ==
                                                        "/profile_page/host_profile/my_lists" &&
                                                    "bg-gray-400"
                                                }`}>
                                                <LuTableProperties
                                                    size={20}
                                                    className="mr-2"
                                                />{" "}
                                                My properties
                                            </Link>
                                            <Link
                                                href={
                                                    "/profile_page/host_profile/add_list"
                                                }
                                                className={`text-center w-full mt-3 inline-flex items-center px-3 py-2 hover:bg-gray-400 rounded ${
                                                    path ==
                                                        "/profile_page/host_profile/add_list" &&
                                                    "bg-gray-400"
                                                }`}>
                                                <CgAdd
                                                    size={20}
                                                    className="mr-2"
                                                />{" "}
                                                Add property
                                            </Link>
                                            <Link
                                                href={
                                                    "/profile_page/host_profile/bookings"
                                                }
                                                className={`text-center w-full mt-3 inline-flex items-center px-3 py-2 hover:bg-gray-400 rounded ${
                                                    path ==
                                                        "/profile_page/host_profile/bookings" &&
                                                    "bg-gray-400"
                                                }`}>
                                                <RiMoneyDollarCircleLine
                                                    size={20}
                                                    className="mr-2"
                                                />
                                                Bookings
                                            </Link>
                                            <Link
                                                href={
                                                    "/profile_page/host_profile/approved-booking"
                                                }
                                                className={`text-center w-full mt-3 inline-flex items-center px-3 py-2 hover:bg-gray-400 rounded ${
                                                    path ==
                                                        "/profile_page/host_profile/approved-booking" &&
                                                    "bg-gray-400"
                                                }`}>
                                                <RiCalendarCheckLine
                                                    size={20}
                                                    className="mr-2"
                                                />
                                                Approved Booking
                                            </Link>
                                            <Link
                                                href={
                                                    "/profile_page/host_profile/my-subscription"
                                                }
                                                className={`text-center w-full mt-3 inline-flex items-center px-3 py-2 hover:bg-gray-400 rounded ${
                                                    path ==
                                                        "/profile_page/host_profile/my-subscription" &&
                                                    "bg-gray-400"
                                                }`}>
                                                <RiMoneyDollarCircleLine
                                                    size={20}
                                                    className="mr-2"
                                                />{" "}
                                                My subscription
                                            </Link>
                                            <Link
                                                href={
                                                    "/profile_page/host_profile/subscription"
                                                }
                                                className={`text-center w-full mt-3 inline-flex items-center px-3 py-2 hover:bg-gray-400 rounded ${
                                                    path ==
                                                        "/profile_page/host_profile/subscription" &&
                                                    "bg-gray-400"
                                                }`}>
                                                <LuBadgeDollarSign
                                                    size={20}
                                                    className="mr-2"
                                                />{" "}
                                                Get subscription
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 md:h-[86vh] md:p-4 md:mr-0 overflow-x-hidden overscroll-y-auto">
                        <div>{childrens}</div>
                    </div>
                </div>
            ) : (
                <div className="text-center mt-32 h-[50vh] text-lg ">
                    For access this page? You have to{" "}
                    <Link href={"/auth/login"} className="hover:underline">
                        <span> Sign In</span>
                    </Link>{" "}
                    frist.
                </div>
            )}
        </>
    );
};

export default ProfileSideBar;
