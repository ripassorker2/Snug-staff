"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../assets/logo.png";
import {RxAvatar} from "react-icons/rx";
import {Menu, MenuHandler, MenuList, MenuItem} from "@material-tailwind/react";
import Link from "next/link";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import {logOut} from "@/utils/logout";

const Navbar = () => {
    const {user, setUser, setToken} = useUserContext();

    console.log(user);

    return (
        <div className="border-b-2 py-1 sticky top-0 right-0 z-50 bg-white">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link href={"/"}>
                        <Image height={68} src={logo} alt="Brand logo" />
                    </Link>
                    <ul className="flex items-center space-x-6 text-gray-900 font-medium duration-300">
                        <li className="hover:text-primary duration-300 cursor-pointer ">
                            <Link href={"/properties"}> Properties</Link>
                        </li>
                        <li className="hover:text-primary duration-300 cursor-pointer ">
                            Top rated
                        </li>
                        <li className="hover:text-primary duration-300 cursor-pointer ">
                            Contact
                        </li>
                        <li className="hover:text-primary duration-300 cursor-pointer ">
                            About Us
                        </li>
                        {user?.role == "host" || (
                            <li className="hover:underline duration-300">
                                <Link
                                    href={"/auth/become-a-host"}
                                    className="w-full">
                                    Become a host
                                </Link>
                            </li>
                        )}
                        {user?.id && (
                            <Menu placement="bottom">
                                <MenuHandler>
                                    <div className="flex rounded-full  px-3 py-1.5 cursor-pointer">
                                        {user?.profile_pic ? (
                                            <Image
                                                src={user?.profile_pic}
                                                width={30}
                                                height={30}
                                                className="rounded-full  w-10 h-10"
                                                alt="profile picture"
                                            />
                                        ) : (
                                            <RxAvatar
                                                className="bg-primary rounded-full text-gray-100"
                                                size={30}
                                            />
                                        )}
                                    </div>
                                </MenuHandler>
                                <MenuList className=" text-base text-gray-900">
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
                                    <MenuItem className="mt-1 w-full text-center">
                                        <div
                                            onClick={() =>
                                                logOut(setToken, setUser)
                                            }>
                                            Logout
                                        </div>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        )}
                        {user?.id ? null : (
                            <li>
                                <Link
                                    href={"/auth/login"}
                                    className="btn-primary">
                                    Sign In
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
