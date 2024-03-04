import {GiTargeted} from "react-icons/gi";
import {BiSupport} from "react-icons/bi";
import {TbBrandBooking} from "react-icons/tb";
import {MdPriceChange} from "react-icons/md";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";

const Benifit = () => {
    return (
        <div className="mt-12">
            <div className="container">
                <div className="text-center">
                    <h2 className="heading">
                        <span>Benefits of Host on Snugstaff</span>
                    </h2>
                    <p className="desc pt-3 max-w-4xl mx-auto">
                        Snugstaff offers an array of benefits to elevate your
                        hosting experience
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5 text-gray-200 mt-6 text-center">
                    <div className="bg-primary px-5 py-8 relative flex flex-col items-center justify-center">
                        <MdPriceChange size={43} />
                        <h2 className="text-xl mt-1">
                            {" "}
                            Flexible Pricing Models
                        </h2>
                        <p className="absolute top-[3px] left-[3px] w-6 h-6 font-semibold bg-brown-50 text-gray-800 text-center text-lg">
                            1
                        </p>
                    </div>
                    <div className="bg-primary px-5 py-8 relative flex flex-col items-center justify-center">
                        <GiTargeted size={43} />
                        <h2 className="text-xl mt-1"> Targeted Market</h2>
                        <p className="absolute top-[3px] left-[3px] w-6 h-6 font-semibold bg-brown-50 text-gray-800 text-center text-lg">
                            2
                        </p>
                    </div>
                    <div className="bg-primary px-5 py-8 relative flex flex-col items-center justify-center">
                        <TbBrandBooking size={43} />
                        <h2 className="text-xl mt-1">
                            {" "}
                            Streamlined Booking Process
                        </h2>
                        <p className="absolute top-[3px] left-[3px] w-6 h-6 font-semibold bg-brown-50 text-gray-800 text-center text-lg">
                            3
                        </p>
                    </div>
                    <div className="bg-primary px-5 py-8 relative flex flex-col items-center justify-center">
                        <BiSupport size={43} />
                        <h2 className="text-xl mt-1"> Dedicated Support</h2>
                        <p className="absolute top-[3px] left-[3px] w-6 h-6 font-semibold bg-brown-50 text-gray-800 text-center text-lg">
                            4
                        </p>
                    </div>
                </div>
                <div className="md:flex justify-end">
                    <Link
                        href="/authtentication/become-a-host/register"
                        className="btn-secondary mt-6 group">
                        Create account{" "}
                        <FaArrowRight className="ml-2 group-hover:ml-4 duration-300 " />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Benifit;
