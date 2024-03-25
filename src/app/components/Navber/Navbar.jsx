"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../assets/logo.png";
import {RxAvatar} from "react-icons/rx";
import {IoMenu} from "react-icons/io5";
import {Menu, MenuHandler, MenuList, MenuItem} from "@material-tailwind/react";
import Link from "next/link";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";

const Navbar = () => {
    const {user, setUser, setToken} = useUserContext();
    console.log(user);
    const handleLogout = () => {
        localStorage.removeItem("snugstuff_access_token");
        localStorage.removeItem("snugstuff_refresh_token");
        setToken("");
        setUser(null);
    };
    return (
        <div className="border-b-2 py-3 sticky top-0 right-0 z-50 bg-white">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link href={"/"}>
                        <Image height={68} src={logo} alt="Brand logo" />
                    </Link>
                    <div className="flex items-center space-x-2 ">
                        <div className="hover:underline">Snug your home</div>
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
                                                href={"/authtentication/login"}>
                                                Sign in
                                            </Link>
                                        </MenuItem>
                                        <MenuItem className="mt-1">
                                            <Link
                                                className="block w-full text-center"
                                                href={
                                                    "/authtentication/register"
                                                }>
                                                Sign up
                                            </Link>
                                        </MenuItem>
                                        <MenuItem className="mt-1">
                                            <Link
                                                className="block w-full text-center"
                                                href={
                                                    "/authtentication/become-a-host"
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
                                                onClick={handleLogout}
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
    );
};

export default Navbar;
