"use client";
import {
    Drawer,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from "@material-tailwind/react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import {RxAvatar} from "react-icons/rx";
import {IoMenu} from "react-icons/io5";

import Link from "next/link";

import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import {logOut} from "@/utils/logout";
import Dropdown from "./Dropdoen";

const NavDrawer = ({
    showDrawer,
    setShowDrawer,
    openLocation,
    setOpenLocation,
}) => {
    const {user, setUser, setToken} = useUserContext();

    return (
        <>
            <Drawer
                transition={{duration: 0}}
                open={showDrawer}
                placement="top"
                onClose={setShowDrawer}
                className="p-4 ">
                <div className="bg-white relative h-full text-black">
                    <div className="container ">
                        <div className="flex justify-between items-center">
                            <Link href={"/"}>
                                <Image
                                    height={68}
                                    src={logo}
                                    alt="Brand logo"
                                />
                            </Link>

                            <div>Find Snug Stay</div>
                            <div className="absolute w-52 bottom-16 right-[48%]">
                                <Dropdown
                                    openLocation={openLocation}
                                    setOpenLocation={setOpenLocation}
                                />
                            </div>
                            <div className="flex items-center space-x-2 ">
                                <div className="hover:underline">
                                    Snug your home
                                </div>
                                <Menu placement="bottom-end">
                                    <MenuHandler>
                                        <div className="flex space-x-2 rounded-full border-2 px-3 py-1.5 cursor-pointer">
                                            <IoMenu
                                                size={30}
                                                className="text-gray-900 "
                                            />

                                            <RxAvatar
                                                className="bg-primary rounded-full text-gray-100"
                                                size={30}
                                            />
                                        </div>
                                    </MenuHandler>
                                    <MenuList className="w-[230px] text-gray-900 font-medium  text-base">
                                        <MenuItem className="mt-1">
                                            <Link
                                                className="block  w-full text-center"
                                                href={"/properties"}>
                                                Properties
                                            </Link>
                                        </MenuItem>
                                        {!user?.id ? (
                                            <>
                                                <MenuItem className="mt-1">
                                                    <Link
                                                        className="block  w-full text-center"
                                                        href={"/auth/login"}>
                                                        Sign in
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem className="mt-1">
                                                    <Link
                                                        className="block w-full text-center"
                                                        href={"/auth/register"}>
                                                        Sign up
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem className="mt-1">
                                                    <Link
                                                        className="block w-full text-center"
                                                        href={
                                                            "/auth/become-a-host"
                                                        }>
                                                        Become a host
                                                    </Link>
                                                </MenuItem>
                                            </>
                                        ) : (
                                            <>
                                                {user?.role == "host" ? (
                                                    <MenuItem className="mt-1">
                                                        <Link
                                                            className="block w-full text-center"
                                                            href={
                                                                "/profile_page/host_profile"
                                                            }>
                                                            Profile
                                                        </Link>
                                                    </MenuItem>
                                                ) : (
                                                    <MenuItem className="mt-1">
                                                        <Link
                                                            className="block w-full text-center"
                                                            href={
                                                                "/profile_page/user_profile"
                                                            }>
                                                            Profile
                                                        </Link>
                                                    </MenuItem>
                                                )}
                                                <MenuItem className="mt-1">
                                                    <div
                                                        onClick={() =>
                                                            logOut(
                                                                setToken,
                                                                setUser
                                                            )
                                                        }
                                                        className="block  w-full text-center">
                                                        Logout
                                                    </div>
                                                </MenuItem>
                                            </>
                                        )}
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default NavDrawer;
