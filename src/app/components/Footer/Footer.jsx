import {MdFacebook} from "react-icons/md";
import {FaInstagram, FaLinkedin} from "react-icons/fa";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import {BiX} from "react-icons/bi";
const Footer = () => {
    return (
        <footer className="pt-14 pb-4 bg-gray-900 mt-20 text-white ">
            <div className="container relative isolate overflow-hidden">
                <div className="flex flex-wrap text-left md:text-left">
                    <div className="w-full md:w-[34%] ">
                        <div>
                            <Image height={66} src={logo} alt="logo" />
                        </div>
                        <div className="mt-3 md:mb-2 mb-6">
                            <button
                                className=" inline-flex bg-blue-500  h-8 w-8 items-center justify-center  rounded-full mr-2"
                                type="button">
                                <MdFacebook size={20} />
                            </button>

                            <button
                                className=" inline-flex bg-pink-600  h-8 w-8 items-center justify-center  rounded-full mr-2"
                                type="button">
                                <FaInstagram size={20} />
                            </button>

                            <button
                                className=" inline-flex bg-black  h-8 w-8 items-center justify-center  rounded-full mr-2"
                                type="button">
                                <BiX size={20} />
                            </button>

                            <button
                                className="inline-flex bg-purple-600  h-8 w-8 items-center justify-center  rounded-full mr-2"
                                type="button">
                                <FaLinkedin size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-[66%] ">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full md:w-[33%] md:px-4 ml-auto">
                                <p className="mb-4 uppercase">Snugstaff</p>
                                <ul>
                                    <li>
                                        <Link
                                            href={"/"}
                                            className=" hover:text-primary duration-300  mb-1.5 block ">
                                            About us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href={"/"}
                                            className=" hover:text-primary duration-300  mb-1.5 block ">
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-[33%] md:px-4 ml-auto">
                                <p className="mb-4 uppercase">Hosting</p>
                                <ul>
                                    <li>
                                        <Link
                                            href={"/auth/become-a-host"}
                                            className=" hover:text-primary duration-300  mb-1.5 block ">
                                            Become a host
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href={"/policies/subscriptions"}
                                            className=" hover:text-primary duration-300  mb-1.5 block ">
                                            Subscription & Commission Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-[33%] md:px-4 md:mt-0 mt-4">
                                <p className="mb-4 uppercase">Policies</p>
                                <ul>
                                    <li>
                                        <Link
                                            href={"/policies/privacy"}
                                            className=" hover:text-primary duration-300  mb-1.5 block ">
                                            Privacy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"/policies/terms-condition"}
                                            className=" hover:text-primary duration-300  mb-1.5 block ">
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
                    <div className="text-sm   ">
                        Copyright © 2024 SnugStaff Ltd.
                    </div>
                </div>
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute md:block hidden left-1/2 md:top-[20px]  -top-[10px] opacity-50 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
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
