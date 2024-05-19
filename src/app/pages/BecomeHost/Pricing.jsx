import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";
import {FaCheck} from "react-icons/fa6";

const Pricing = () => {
    return (
        <div className="container flex items-center justify-center">
            <div className=" mt-20">
                <div className="text-center">
                    <h2 className="heading ">
                        <span> Our Pricing Plans</span>
                    </h2>
                    <p className="max-w-3xl mx-auto my-4 desc ">
                        At Snugstaff, we understand that one size doesn’t fit
                        all. That’s why we offer two distinct pricing models
                        tailored to meet your individual needs.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="relative p-6  border-2 border-gray-300 rounded-lg hover:border-2 hover:border-gray-500 duration-300 max-w-sm ">
                        <div className="">
                            <h3 className="text-xl font-semibold ">Free</h3>
                            <p className="mt-4 flex items-baseline ">
                                <span className="md:text-4xl text-2xl font-extrabold tracking-tight">
                                    $0
                                </span>
                                <span className="ml-1 text-xl font-semibold">
                                    on each booking for only 3 property
                                </span>
                            </p>

                            <ul className="mt-5 space-y-2 text-base   ">
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">Free advertising</p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Advantage of securing more direct
                                        bookings
                                    </p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Control of rental business
                                    </p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">Maximize earnings</p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Unparalleled hospitality
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href="/authtentication/become-a-host/register"
                            className="btn-secondary mt-6 group w-full">
                            Create account{" "}
                            <FaArrowRight className="ml-2 group-hover:ml-4 duration-300 " />
                        </Link>
                    </div>
                    <div className="relative p-6  border-2 border-gray-300 rounded-lg hover:border-2 hover:border-gray-500 duration-300 max-w-sm ">
                        <div className="">
                            <h3 className="text-xl font-semibold ">
                                Monthly Subscription
                            </h3>

                            <p className="mt-4 flex items-baseline ">
                                <span className="md:text-4xl text-2xl font-extrabold tracking-tight">
                                    $10{" "}
                                </span>
                                <span className="ml-1 text-xl font-semibold">
                                    /month per property list
                                </span>
                            </p>

                            <ul className="mt-5 space-y-2 text-base   ">
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">Premium Features</p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Increased Visibility
                                    </p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">Zero Commission</p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">Payment Control</p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Direct Communication with Guests
                                    </p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        More Direct Bookings
                                    </p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Personalized Booking Experience
                                    </p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Build Stronger Relationships
                                    </p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Advantage of Securing More Direct
                                        Bookings
                                    </p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Control of Rental Business
                                    </p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">Maximize Earnings</p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Unparalleled Hospitality
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href="/authtentication/become-a-host/register"
                            className="btn-secondary mt-6 group w-full">
                            Create account{" "}
                            <FaArrowRight className="ml-2 group-hover:ml-4 duration-300 " />
                        </Link>
                    </div>
                    <div className="relative p-6  border-2 border-gray-300 rounded-lg hover:border-2 hover:border-gray-500 duration-300 max-w-sm ">
                        <div className="">
                            <h3 className="text-xl font-semibold ">
                                Commission
                            </h3>
                            <p className="mt-4 flex items-baseline ">
                                <span className="md:text-4xl text-2xl font-extrabold tracking-tight">
                                    $10
                                </span>
                                <span className="ml-1 text-xl font-semibold">
                                    on each booking amount
                                </span>
                            </p>

                            <ul className="mt-5 space-y-2 text-base   ">
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">Free advertising</p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Advantage of securing more direct
                                        bookings
                                    </p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Control of rental business
                                    </p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">Maximize earnings</p>
                                </li>
                                <li className="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p className="ml-3 ">
                                        Unparalleled hospitality
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href="/authtentication/become-a-host/register"
                            className="btn-secondary mt-6 group w-full">
                            Create account{" "}
                            <FaArrowRight className="ml-2 group-hover:ml-4 duration-300 " />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
