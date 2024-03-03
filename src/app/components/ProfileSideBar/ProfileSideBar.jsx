"use client";
import Link from "next/link";
import {CgProfile} from "react-icons/cg";
import {usePathname} from "next/navigation";
import {FcList} from "react-icons/fc";
import Image from "next/image";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import userLogo from "../../../assets/profile-circle.1023x1024.png";

const ProfileSideBar = ({childrens}) => {
    const {user} = useUserContext();
    console.log(user);
    const path = usePathname();
    return (
        <div className="md:flex space-x-4 -mt-1 -mb-[85px] ">
            <div className=" p-4 md:w-72 w-full md:mb-0 mb-8 bg-gray-950 md:h-[86vh] bg-blue-gray-50 overflow-x-hidden overscroll-y-auto rounded-md ">
                <div className="flex flex-col">
                    <div className="space-y-4">
                        <div className="flex flex-col justify-center items-center mt-8">
                            <Image
                                src={userLogo}
                                className="w-20 h-20 object-cover rounded-full"
                                alt="avatar"
                            />
                            <h2 className="text-lg font-semibold">
                                Ripas sorker Rifat
                            </h2>
                            <p>example@gmail.com</p>
                        </div>

                        {/* {user?.role == "host" && ( */}
                        <div className="pt-2">
                            <Link
                                href={"/profile_page"}
                                className={`text-center w-full mt-3 inline-flex items-center px-3 py-2 hover:bg-gray-400 rounded-md ${
                                    path == "/profile_page" && "bg-gray-400"
                                }`}>
                                <CgProfile size={20} className="mr-2" /> Profile
                            </Link>
                            <Link
                                href={"/profile_page/host_profile/my_lists"}
                                className={`text-center w-full mt-3 inline-flex items-center px-3 py-2 hover:bg-gray-400 rounded-md ${
                                    path ==
                                        "/profile_page/host_profile/my_lists" &&
                                    "bg-gray-400"
                                }`}>
                                <FcList size={20} className="mr-2" /> My lists
                            </Link>
                        </div>
                        {/* )} */}
                    </div>
                </div>
            </div>
            <div className=" md:flex-1 md:h-[85vh] md:p-5 p-2 mr-3 md:mr-0 overflow-x-hidden overscroll-y-auto">
                <div className="">{childrens}</div>
            </div>
        </div>
    );
};

export default ProfileSideBar;
