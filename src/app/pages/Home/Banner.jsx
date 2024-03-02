import Image from "next/image";
import banner from "../../../assets/baner.png";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";

export const Banner = () => {
    return (
        <div className="relative flex  py-16 lg:pt-0 flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-[59%] lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice">
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <Image
                    className="object-cover bg-contain w-full  rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-[90%]"
                    src={banner}
                    alt="banner-image"
                />
            </div>
            <div className="relative flex flex-col items-start   container">
                <div className="md:mb-16 lg:my-40 lg:max-w-xl lg:pr-5">
                    <h2 className="mb-5 mt-6 md:mt-0 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                        Find Snug <br className="hidden md:block" />{" "}
                        <span> Accommodation</span> or{" "}
                        <br className="hidden md:block" /> Become a{" "}
                        <span>Snug Host</span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-800 ">
                        Discover suitable accommodation or showcase your
                        property for business professionals to easily find their
                        ideal stay.
                    </p>
                    <div className="flex space-x-5 mb-4">
                        <div className="border-l-8 border-primary my-2 leading-3">
                            <div className="pl-2">
                                <h2 className="text-4xl font-semibold">
                                    <span>50K++</span>
                                </h2>
                                <p>booking</p>
                            </div>
                        </div>
                        <div className="border-l-8 border-primary my-2 leading-3">
                            <div className="pl-2">
                                <h2 className="text-4xl font-semibold">
                                    <span>10K++</span>
                                </h2>
                                <p>properties</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center md:flex-row flex-col md:space-x-3 text-center">
                        <Link
                            href=""
                            className="btn-secondary mt-4  md:py-4 group md:w-auto w-full ">
                            Accommodation{" "}
                            <FaArrowRight className="ml-2 group-hover:ml-4 duration-300" />
                        </Link>
                        <Link
                            href=""
                            className="btn-secondary mt-4  md:py-4 group md:w-auto w-full ">
                            Become A Host{" "}
                            <FaArrowRight className="ml-2 group-hover:ml-4 duration-300 " />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
