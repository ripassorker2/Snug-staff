/* eslint-disable @next/next/no-img-element */
import SmallLoader from "@/app/components/SmallLoader/SmallLoader";
import React from "react";
import {CiEdit} from "react-icons/ci";
import {GiCheckMark} from "react-icons/gi";
import {MdOutlineCancel} from "react-icons/md";

const ShowcaseImageUpdate = ({
    image,
    showcaseFile,
    setShowcaseFile,
    isLoading,
    setImageId,
}) => {
    return (
        <div>
            {showcaseFile ? (
                <div className="relative ">
                    <div>
                        <img
                            src={URL.createObjectURL(showcaseFile)}
                            alt="Feature Image Preview"
                            height={200}
                            width={200}
                            className="rounded-md md:h-[500px] h-[230px] object-cover object-center w-full"
                        />
                    </div>
                    <label htmlFor="file">
                        <CiEdit
                            className="absolute cursor-pointer text-primary top-5 right-20 bg-white p-0.5 rounded-full"
                            size={24}
                        />

                        <input
                            type="file"
                            name="file"
                            id="file"
                            accept=".png,.jpg,.jpeg"
                            className="hidden"
                            onChange={(e) => {
                                setShowcaseFile(e.target.files[0]);
                                setImageId(image.id);
                            }}
                        />
                    </label>
                    <div className="absolute top-5 right-5 flex space-x-1.5">
                        {isLoading ? (
                            <SmallLoader />
                        ) : (
                            <GiCheckMark
                                // onClick={handleImageUpdate}
                                className="cursor-pointer text-primary bg-white p-0.5 rounded-full "
                                size={24}
                            />
                        )}
                        <MdOutlineCancel
                            className="cursor-pointer text-primary bg-white p-0.5 rounded-full"
                            size={24}
                            onClick={() => {
                                setShowcaseFile(null);
                                setImageId(null);
                            }}
                        />{" "}
                    </div>
                </div>
            ) : (
                <div className="relative">
                    <div>
                        <img
                            src={image?.image}
                            alt="Feature Image Preview"
                            height={200}
                            width={200}
                            className="rounded-md md:h-[500px] h-[230px] object-cover object-center w-full"
                        />
                    </div>
                    <label htmlFor="file">
                        <CiEdit
                            className="absolute top-5 cursor-pointer text-primary right-5 bg-white p-0.5 rounded-full"
                            size={24}
                        />

                        <input
                            type="file"
                            name="file"
                            id="file"
                            accept=".png,.jpg,.jpeg"
                            className="hidden"
                            onChange={(e) => {
                                setShowcaseFile(e.target.files[0]);
                                setImageId(image.id);
                            }}
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default ShowcaseImageUpdate;
