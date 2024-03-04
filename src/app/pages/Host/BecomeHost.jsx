import Link from "next/link";
import React from "react";
import {FaArrowRight, FaCashRegister} from "react-icons/fa";
import {LuTableProperties} from "react-icons/lu";
import {FaCodePullRequest} from "react-icons/fa6";
import {RiMoneyPoundCircleLine} from "react-icons/ri";

const BecomeHost = () => {
    return (
        <div className="container ">
            <div className="md:grid md:grid-cols-2 gap-10 mt-20">
                <div className="flex flex-col justify-center">
                    <h2 className="heading">
                        <span>How to become a host?</span>
                    </h2>
                    <p className="desc pt-3">
                        List Your Properties and Select most suitable requests.
                        Also, Manage your properties and analyze it via various
                        reports and analytics.
                    </p>
                    <div>
                        <Link
                            href="/authtentication/become-a-host/register"
                            className="btn-secondary mt-6 group">
                            Create account{" "}
                            <FaArrowRight className="ml-2 group-hover:ml-4 duration-300 " />
                        </Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5 text-center">
                    <div className="shadow-lg flex flex-col justify-center items-center rounded-md px-4 py-8 shadow-gray-300">
                        <FaCashRegister size={33} className="text-primary" />
                        <h2 className="md:text-xl text-lg mt-2">
                            Register as host
                        </h2>
                    </div>
                    <div className="shadow-lg flex flex-col justify-center items-center rounded-md px-4 py-8 shadow-gray-300">
                        <LuTableProperties size={33} className="text-primary" />
                        <h2 className="md:text-xl text-lg mt-2">
                            List your properties
                        </h2>
                    </div>
                    <div className="shadow-lg flex flex-col justify-center items-center rounded-md px-4 py-8 shadow-gray-300">
                        <FaCodePullRequest size={33} className="text-primary" />
                        <h2 className="md:text-xl text-lg mt-2">
                            Select best request
                        </h2>
                    </div>
                    <div className="shadow-lg flex flex-col justify-center items-center rounded-md px-4 py-8 shadow-gray-300">
                        <RiMoneyPoundCircleLine
                            size={33}
                            className="text-primary"
                        />
                        <h2 className="md:text-xl text-lg mt-2">
                            Earn a passive income
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeHost;
