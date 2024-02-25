import Image from "next/image";
import banner from "../../../assets/baner.png";
import Link from "next/link";

export const Banner = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice">
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src={banner}
                    alt="banner-image"
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl container">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                        Find Snug <br className="hidden md:block" />{" "}
                        <span> Accommodation</span> or{" "}
                        <br className="hidden md:block" /> Become a{" "}
                        <span>Snug Host</span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-900 ">
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
                    <div className="flex items-center space-x-3 text-center">
                        <Link href="" className="btn-secondary md:py-4 ">
                            Find Accommodation
                        </Link>
                        <Link href="" className="btn-secondary md:py-4">
                            Become A Host
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
