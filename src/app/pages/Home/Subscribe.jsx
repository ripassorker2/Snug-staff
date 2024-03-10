const Subscribe = () => {
    return (
        <div className=" mt-24 mb-8 bg-primary  ">
            <div className="relative container isolate overflow-hidden">
                <div className=" md:py-20 py-16">
                    <div className=" md:flex md:items-center">
                        <div className="xl:w-0 md:flex-1">
                            <h2 className="text-2xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                                Get the latest updates!
                            </h2>
                            <p className="mt-2 max-w-3xl md:text-lg leading-6 text-gray-800">
                                Our team is here to assist. Complete the enquiry
                                form below and a member of the support team will
                                contact you.
                            </p>
                        </div>
                        <div className="mt-8 ">
                            <div>
                                <form className="sm:flex">
                                    <input
                                        className=" w-full px-4 py-2 focus:outline-none focus:border-gray-600  border placeholder:text-gray-700"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email.."
                                        required=""
                                        type="email"
                                    />
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                        <button
                                            className="btn-secondary"
                                            type="submit">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-[30px] -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
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
            </div>
        </div>
    );
};

export default Subscribe;
