import {MdFacebook} from "react-icons/md";
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="relative  pt-8 pb-6 bg-blue-gray-50 mt-20">
            <div className="container">
                <div className="flex flex-wrap text-left md:text-left">
                    <div className="w-full md:w-6/12 ">
                        <div>
                            <Image height={67} src={logo} alt="logo" />
                        </div>
                        <h5 className="text-lg mt-0 mb-2 text-gray-900">
                            Connect with us on these platforms, and expect a
                            response within 1-2 days.
                        </h5>
                        <div className="mt-3 md:mb-0 mb-6">
                            <button
                                className=" inline-flex text-blue-600  h-9 w-9 items-center justify-center  rounded-full mr-1"
                                type="button">
                                <MdFacebook size={24} />
                            </button>

                            <button
                                className=" inline-flex text-pink-600  h-8 w-8 items-center justify-center  rounded-full mr-1"
                                type="button">
                                <FaInstagram size={24} />
                            </button>

                            <button
                                className=" inline-flex text-black  h-8 w-8 items-center justify-center  rounded-full mr-1"
                                type="button">
                                <FaTwitter size={24} />
                            </button>

                            <button
                                className="inline-flex text-blue-600  h-8 w-8 items-center justify-center  rounded-full mr-1"
                                type="button">
                                <FaLinkedin size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 ">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full md:w-4/12 md:px-4 ml-auto">
                                <p className="text-dark  font-semibold mb-2">
                                    Useful Links
                                </p>
                                <ul className="list-unstyled text-gray-900">
                                    <li>
                                        <Link
                                            href={"/"}
                                            className=" hover:text-gray-700 duration-300 f pb-2 ">
                                            About us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href={"/"}
                                            className=" hover:text-gray-700 duration-300 f pb-2 ">
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-4/12 md:px-4 md:mt-0 mt-4">
                                <p className="text-dark  font-semibold mb-2">
                                    Other Resources
                                </p>
                                <ul className="list-unstyled text-gray-900">
                                    <li>
                                        <Link
                                            href={"/"}
                                            className=" hover:text-gray-700 duration-300 f pb-2 ">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"/"}
                                            className=" hover:text-gray-700 duration-300 f pb-2 ">
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t mb-3 border-gray-500 "></div>
                <div className="flex flex-wrap -mb-3 items-center md:justify-end justify-center">
                    <div className="text-sm  font-medium text-gray-900">
                        Copyright © 2024 SnugStaff Ltd..
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
