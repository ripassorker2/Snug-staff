"use client";
import Link from "next/link";
import {CgProfile} from "react-icons/cg";
import {usePathname} from "next/navigation";
import {FcList} from "react-icons/fc";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";

const ProfileSideBar = ({childrens}) => {
    const {user} = useUserContext();
    const path = usePathname();

    return (
        <>
            {user ? (
                <>
                    <div className="md:flex md:space-x-3 -mt-1 md:-mb-[85px]  ">
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
                                            <CgProfile
                                                size={20}
                                                className="mr-2"
                                            />{" "}
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
                                                    <FcList
                                                        size={20}
                                                        className="mr-2"
                                                    />{" "}
                                                    My lists
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" md:flex-1 md:h-[86vh] md:p-4 md:mr-0 overflow-x-hidden overscroll-y-auto">
                            <div>{childrens}</div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center mt-20 text-lg">
                    For access this page? You have to{" "}
                    <Link
                        href={"/authtentication/login"}
                        className="hover:underline">
                        <span> Sign In</span>
                    </Link>{" "}
                    frist.
                </div>
            )}
        </>
    );
};

export default ProfileSideBar;
