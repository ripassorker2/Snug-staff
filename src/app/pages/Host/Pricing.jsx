import {FaCheck} from "react-icons/fa6";

const Pricing = () => {
    return (
        <div className="container flex items-center justify-center">
            <div class=" mt-20">
                <div className="text-center">
                    <h2 class="heading ">
                        <span> Our Pricing Plans</span>
                    </h2>
                    <p class="max-w-3xl mx-auto my-4 desc ">
                        At Snugstaff, we understand that one size doesn’t fit
                        all. That’s why we offer two distinct pricing models
                        tailored to meet your individual needs.
                    </p>
                </div>
                <div class="grid md:grid-cols-2 gap-5">
                    <div class="relative p-6  border-2 border-gray-300 rounded-lg hover:border-2 hover:border-gray-500 duration-300 max-w-sm ">
                        <div class="">
                            <h3 class="text-xl font-semibold ">Commission</h3>
                            <p class="mt-4 flex items-baseline ">
                                <span class="md:text-4xl text-2xl font-extrabold tracking-tight">
                                    $10
                                </span>
                                <span class="ml-1 text-xl font-semibold">
                                    on each booking amount
                                </span>
                            </p>

                            <ul class="mt-5 space-y-2 text-base font-medium">
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">Free advertising</p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">
                                        Advantage of securing more direct
                                        bookings
                                    </p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">
                                        Control of rental business
                                    </p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">Maximize earnings</p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">
                                        Unparalleled hospitality
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="relative p-6  border-2 border-gray-300 rounded-lg hover:border-2 hover:border-gray-500 duration-300 max-w-sm ">
                        <div class="">
                            <h3 class="text-xl font-semibold ">
                                Monthly Subscription
                            </h3>

                            <p class="mt-4 flex items-baseline ">
                                <span class="md:text-4xl text-2xl font-extrabold tracking-tight">
                                    $12{" "}
                                </span>
                                <span class="ml-1 text-xl font-semibold">
                                    /month per property list
                                </span>
                            </p>

                            <ul class="mt-5 space-y-2 text-base font-medium">
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">Premium Features</p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">Increased Visibility</p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">Zero Commission</p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">Payment Control</p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">
                                        Direct Communication with Guests
                                    </p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">More Direct Bookings</p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">
                                        Personalized Booking Experience
                                    </p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">
                                        Build Stronger Relationships
                                    </p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">
                                        Advantage of Securing More Direct
                                        Bookings
                                    </p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">
                                        Control of Rental Business
                                    </p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">Maximize Earnings</p>
                                </li>
                                <li class="flex">
                                    <FaCheck
                                        size={20}
                                        className="text-primary"
                                    />
                                    <p class="ml-3 ">
                                        Unparalleled Hospitality
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
