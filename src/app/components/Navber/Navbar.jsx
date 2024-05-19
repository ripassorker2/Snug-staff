"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../assets/logo.png";
import {RxAvatar} from "react-icons/rx";
import {IoMenu} from "react-icons/io5";
import Link from "next/link";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import {logOut} from "@/utils/logout";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";

const Navbar = () => {
    const {user, setUser, setToken} = useUserContext();

    return (
        <div className="border-b-2 py-0.5 sticky top-0 right-0 z-50 bg-white text-gray-800">
            <div className="container !font-montserrat">
                <div className="flex justify-between items-center">
                    <Link href={"/"}>
                        <Image height={68} src={logo} alt="Brand logo" />
                    </Link>
                    <div className="">
                        <div className="flex justify-center items-center px-6 py-3 text-[17px] ">
                            <Link className="block w-full px-4" href={"/"}>
                                Home
                            </Link>
                            <Link
                                className="block w-full px-4"
                                href={"/properties"}>
                                Properties
                            </Link>
                            <Link className="block w-full px-4" href={""}>
                                About
                            </Link>
                            <Link className="block w-full px-4" href={""}>
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 text-[17px]">
                        <div className="hover:underline ">Snug your home</div>
                        <Menu>
                            <MenuButton>
                                <div className="flex space-x-2 rounded-full border-2 px-3 py-1.5 cursor-pointer">
                                    <IoMenu
                                        size={30}
                                        className="text-gray-900"
                                    />
                                    <RxAvatar
                                        className="bg-primary rounded-full text-gray-100"
                                        size={30}
                                    />
                                </div>
                            </MenuButton>
                            <MenuItems
                                MenuItems
                                anchor="bottom"
                                className="w-[230px] text-gray-700 bg-white shadow-md p-4 rounded-lg mt-6 z-50">
                                <MenuItem>
                                    <Link
                                        className="block hover:bg-primary px-2 py-1 rounded hover:text-white text-[17px] w-full "
                                        href="/properties">
                                        Properties
                                    </Link>
                                </MenuItem>
                                {!user?.id ? (
                                    <>
                                        <MenuItem>
                                            <Link
                                                className="block hover:bg-primary px-2 py-1 rounded hover:text-white text-[17px] w-full "
                                                href="/auth/login">
                                                Sign in
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link
                                                className="block hover:bg-primary px-2 py-1 rounded hover:text-white text-[17px] w-full "
                                                href="/auth/register">
                                                Sign up
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link
                                                className="block hover:bg-primary px-2 py-1 rounded hover:text-white text-[17px] w-full "
                                                href="/auth/become-a-host">
                                                Become a host
                                            </Link>
                                        </MenuItem>
                                    </>
                                ) : (
                                    <>
                                        {user?.role === "host" ? (
                                            <MenuItem>
                                                <Link
                                                    className="block hover:bg-primary px-2 py-1 rounded hover:text-white text-[17px] w-full "
                                                    href="/profile_page/host_profile">
                                                    Profile
                                                </Link>
                                            </MenuItem>
                                        ) : (
                                            <MenuItem>
                                                <Link
                                                    className="block hover:bg-primary px-2 py-1 rounded hover:text-white text-[17px] w-full "
                                                    href="/profile_page/user_profile">
                                                    Profile
                                                </Link>
                                            </MenuItem>
                                        )}
                                        <MenuItem>
                                            <div
                                                onClick={() =>
                                                    logOut(setToken, setUser)
                                                }
                                                className="block hover:bg-primary px-2 py-1 rounded hover:text-white text-[17px] w-full ">
                                                Logout
                                            </div>
                                        </MenuItem>
                                    </>
                                )}
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
            {/* <>
                {showDrawer && (
                    <NavDrawer
                        openLocation={openLocation}
                        setOpenLocation={setOpenLocation}
                        showDrawer={showDrawer}
                        setShowDrawer={setShowDrawer}
                    />
                )}
            </> */}
        </div>
    );
};

export default Navbar;
