const Subscribe = () => {
    return (
        <div className=" mt-24 mb-8 bg-primary  ">
            <div className="relative container isolate overflow-hidden">
                <div className=" md:py-20 py-16">
                    <div className=" md:flex md:items-center">
                        <div className="xl:w-0 md:flex-1">
                            <h2 className="text-2xl leading-8 font-semibold tracking-tight text-gray-300 sm:text-3xl sm:leading-9">
                                Get the latest updates!
                            </h2>
                            <p className="mt-2 max-w-3xl md:text-lg leading-6 text-gray-300">
                                Our team is here to assist. Complete the enquiry
                                form below and a member of the support team will
                                contact you.
                            </p>
                        </div>
                        <div className="mt-8 ">
                            <div>
                                <form className="sm:flex">
                                    <input
                                        className=" w-full px-4 py-2 focus:outline-none focus:border-gray-600  border placeholder:text-gray-700 rounded-md"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email.."
                                        required=""
                                        type="email"
                                    />
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                        <button
                                            className="btn-primary"
                                            type="submit">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
