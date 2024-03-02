import Image from "next/image";
import img1 from "../../../assets/accomodation1.jpg";
import img2 from "../../../assets/accomodation2.jpg";
import {FaArrowRight} from "react-icons/fa";
const Accomodation = () => {
    return (
        <div className="container">
            <div className="md:mt-32 mt-20">
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <Image
                            src={img1}
                            alt=""
                            className="rounded object-contain"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <div>
                            <h2 className="heading">
                                <span>Staff Accommodation</span>
                            </h2>
                            <h3 className="md:text-4xl text-xl md:my-4 my-2">
                                Making it easier for all.
                            </h3>
                            <p className="desc">
                                It doesn’t matter if you are an individual
                                worker, a Company or a Student on placement at a
                                hospital, we are here to help you with your
                                stay. Browse our available properties in the
                                location you desire or contact us to help with
                                your requirements.
                            </p>
                            <button className="btn-secondary mt-4 inline-flex items-center md:py-4 group  ">
                                Get a Quote{" "}
                                <FaArrowRight className="ml-2 group-hover:ml-4 duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 mt-20">
                    <div className="block md:hidden">
                        <Image
                            src={img2}
                            alt=""
                            className="rounded object-contain"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <div>
                            <h2 className="heading">
                                <span>Company Accommodation</span>
                            </h2>
                            <h3 className="md:text-4xl text-xl md:my-4 my-2">
                                Long-term bookings.
                            </h3>
                            <p className="desc">
                                If you are a company looking for a long-term
                                stay of 4 months+, many of our hosts offer a
                                discount on these types of bookings. If this
                                doesn’t show in their listing, please fill in
                                the enquiry form below and we will find you
                                suitable accommodation and ensure your
                                requirements are met.
                            </p>
                            <button className="btn-secondary mt-4 inline-flex items-center md:py-4 group  ">
                                Get a Quote{" "}
                                <FaArrowRight className="ml-2 group-hover:ml-4 duration-300" />
                            </button>
                        </div>
                    </div>{" "}
                    <div className="md:block hidden">
                        <Image
                            src={img2}
                            alt=""
                            className="rounded object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accomodation;
