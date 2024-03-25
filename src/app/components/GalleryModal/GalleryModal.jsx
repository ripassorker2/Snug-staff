import React from "react";
import {Dialog} from "@material-tailwind/react";
import {IoMdArrowRoundBack} from "react-icons/io";
import Image from "next/image";

const GalleryModal = ({showModal, setShowModal}) => {
    return (
        <Dialog
            open={showModal}
            size="xxl"
            animate={{
                mount: {scale: 1, y: 0},
                unmount: {scale: 0.9, y: -100},
            }}>
            <div className="container ">
                <IoMdArrowRoundBack
                    onClick={() => setShowModal(false)}
                    size={25}
                    className="mt-10"
                />

                <div className="max-w-5xl mx-auto overflow-auto max-h-[88vh]">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <Image
                                className="h-auto w-full rounded-lg object-cover object-center"
                                src="https://mrwallpaper.com/images/hd/real-estate-modern-white-house-dcxpp5xsw4e7wqgc.jpg"
                                width={200}
                                height={200}
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto w-full rounded-lg object-cover object-center"
                                src="https://mrwallpaper.com/images/hd/real-estate-modern-white-house-dcxpp5xsw4e7wqgc.jpg"
                                width={200}
                                height={200}
                                alt="gallery-photo"
                            />
                        </div>
                        <div className="col-span-2">
                            <Image
                                className="h-auto w-full rounded-lg object-cover object-center"
                                src="https://mrwallpaper.com/images/hd/real-estate-modern-white-house-dcxpp5xsw4e7wqgc.jpg"
                                width={200}
                                height={200}
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto w-full rounded-lg object-cover object-center"
                                src="https://mrwallpaper.com/images/hd/real-estate-modern-white-house-dcxpp5xsw4e7wqgc.jpg"
                                width={200}
                                height={200}
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto w-full rounded-lg object-cover object-center"
                                src="https://mrwallpaper.com/images/hd/real-estate-modern-white-house-dcxpp5xsw4e7wqgc.jpg"
                                width={200}
                                height={200}
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default GalleryModal;
