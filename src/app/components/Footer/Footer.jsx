import {MdFacebook} from "react-icons/md";
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="pt-14 pb-4 bg-gray-900 mt-20 text-gray-300">
            <div className="container relative isolate overflow-hidden">
                <div className="flex flex-wrap text-left md:text-left">
                    <div className="w-full md:w-6/12 ">
                        <div>
                            <Image height={66} src={logo} alt="logo" />
                        </div>
                        <h5 className="text-lg mt-0 mb-2 ">
                            Connect with us on these platforms, and expect a
                            response within 1-2 days.
                        </h5>
                        <div className="mt-3 md:mb-2 mb-6">
                            <button
                                className=" inline-flex bg-blue-500  h-8 w-8 items-center justify-center  rounded-full mr-1"
                                type="button">
                                <MdFacebook size={20} />
                            </button>

                            <button
                                className=" inline-flex bg-pink-600  h-8 w-8 items-center justify-center  rounded-full mr-1"
                                type="button">
                                <FaInstagram size={20} />
                            </button>

                            <button
                                className=" inline-flex bg-black  h-8 w-8 items-center justify-center  rounded-full mr-1"
                                type="button">
                                <FaTwitter size={20} />
                            </button>

                            <button
                                className="inline-flex bg-purple-600  h-8 w-8 items-center justify-center  rounded-full mr-1"
                                type="button">
                                <FaLinkedin size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 ">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full md:w-4/12 md:px-4 ml-auto">
                                <p className=" font-semibold mb-2">
                                    Useful Links
                                </p>
                                <ul className="list-unstyled ">
                                    <li>
                                        <Link
                                            href={"/"}
                                            className=" hover:text-gray-500 duration-300 f pb-2 ">
                                            About us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href={"/"}
                                            className=" hover:text-gray-500 duration-300 f pb-2 ">
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-4/12 md:px-4 md:mt-0 mt-4">
                                <p className=" font-semibold mb-2">
                                    Other Resources
                                </p>
                                <ul className="list-unstyled ">
                                    <li>
                                        <Link
                                            href={"/"}
                                            className=" hover:text-gray-500 duration-300 f pb-2 ">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"/"}
                                            className=" hover:text-gray-500 duration-300 f pb-2 ">
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t mb-3 border-gray-700 "></div>
                <div className="flex flex-wrap -mb-3 items-center md:justify-end justify-center">
                    <div className="text-sm  font-medium ">
                        Copyright © 2024 SnugStaff Ltd.
                    </div>
                </div>
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 md:top-[20px]  -top-[10px] opacity-50 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                    aria-hidden="true">
                    <circle
                        cx="512"
                        cy="512"
                        r="512"
                        fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                        fillOpacity="0.7"></circle>
                    <defs>
                        <radialGradient
                            id="759c1415-0410-454c-8f7c-9a820de03641"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(512 512) rotate(90) scale(512)">
                            <stop stopColor="#7775D6"></stop>
                            <stop
                                offset="1"
                                stopColor="#7ED321"
                                stopOpacity="0"></stop>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;
