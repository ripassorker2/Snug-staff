"use client";
import Typewriter from "typewriter-effect";
import img from "../../../assets/baner.png";
import Filter from "@/app/components/Filter/Filter";

const NewBanner = () => {
    return (
        <div
            className="h-[650px] "
            style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="bg-black bg-opacity-75 h-[650px] ">
                <div className="container ">
                    <div className="text-center   rounded-lg mt-32 ">
                        <h3 className="text-4xl font-medium text-white pb-1 inline-flex">
                            Welcome to
                            <Typewriter
                                options={{
                                    strings: ["Snug Staff"],
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: "text-white ml-2",
                                    cursorClassName: "text-white",
                                }}
                            />
                        </h3>
                        <p className="text-5xl mt-4 text-white">
                            Discover Our Properties
                        </p>
                    </div>
                    <div className="mt-8">
                        <Filter />
                    </div>
                    <p className="text-center mt-12 text-white">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewBanner;
