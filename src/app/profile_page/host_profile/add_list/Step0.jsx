import React from "react";
import {IoCloudUploadOutline} from "react-icons/io5";
import Image from "next/image";
import {MdOutlineCancel} from "react-icons/md";

const Step0 = ({
    featureImage,
    showcaseImages,
    listImages,
    handleRemoveImage,
    handleImageChange,
}) => {
    return (
        <div>
            <div className="mt-4">
                <h2 className="my-2">Features image (only 1 image)</h2>
                <div>
                    {featureImage && (
                        <div className="relative ">
                            <Image
                                src={featureImage.preview}
                                alt="Feature Image Preview"
                                height={200}
                                width={200}
                                className="rounded-md md:h-[400px] h-[230px] object-cover object-center w-full"
                            />
                            <MdOutlineCancel
                                size={22}
                                onClick={() => handleRemoveImage("feature")}
                                className="absolute top-2 right-2 rounded-full p-0.5 bg-white text-primary cursor-pointer"
                            />
                        </div>
                    )}
                    {!featureImage && (
                        <div className="grid md:grid-cols-3 gap-3">
                            <label
                                htmlFor="feature-image-file"
                                className="cursor-pointer border border-gray-400 p-5 pt-10 flex flex-col rounded-md items-center text-center h-[160px]">
                                <IoCloudUploadOutline
                                    size={35}
                                    className="mr-1 font-semibold text-primary"
                                />
                                <span>Upload feature image</span>
                                <input
                                    type="file"
                                    id="feature-image-file"
                                    accept=".png,.jpg,.jpeg,.webp"
                                    className="hidden"
                                    onChange={(e) =>
                                        handleImageChange(e, "feature")
                                    }
                                />
                            </label>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-4">
                <h2 className="my-2">Showcase images (3 images must)</h2>
                <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
                    {showcaseImages.map((image, index) => (
                        <div key={index} className="relative">
                            <Image
                                src={image.preview}
                                alt={`Showcase Image Preview ${index}`}
                                height={200}
                                width={200}
                                className="rounded-md md:h-[240px] h-[130px] object-cover object-center w-full"
                            />
                            <MdOutlineCancel
                                size={22}
                                onClick={() =>
                                    handleRemoveImage("showcase", index)
                                }
                                className="absolute top-2 right-2 rounded-full p-0.5 bg-white text-primary cursor-pointer"
                            />
                        </div>
                    ))}
                    {showcaseImages.length < 3 && (
                        <div>
                            <label
                                htmlFor="showcase-image-file"
                                className="cursor-pointer border border-gray-400 md:p-5 p-3 md:pt-10 pt-5 flex flex-col rounded-md items-center text-center md:h-[160px] h-[130px]">
                                <IoCloudUploadOutline
                                    size={35}
                                    className="mr-1 font-semibold text-primary"
                                />
                                <span>Upload showcase images</span>
                                <input
                                    type="file"
                                    id="showcase-image-file"
                                    accept=".png,.jpg,.jpeg,.webp"
                                    className="hidden"
                                    onChange={(e) =>
                                        handleImageChange(e, "showcase")
                                    }
                                />
                            </label>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-4">
                <h2 className="my-2">Gallery images (max 15 images)</h2>
                <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
                    {listImages.map((image, index) => (
                        <div key={index} className="relative">
                            <Image
                                src={image.preview}
                                alt={`List Image Preview ${index}`}
                                height={200}
                                width={200}
                                className="rounded-md  md:h-[240px] h-[130px] object-cover object-center w-full"
                            />
                            <MdOutlineCancel
                                size={22}
                                onClick={() => handleRemoveImage("list", index)}
                                className="absolute top-2 right-2 rounded-full p-0.5 bg-white text-primary cursor-pointer"
                            />
                        </div>
                    ))}
                    {listImages.length < 15 && (
                        <div>
                            <label
                                htmlFor="list-image-file"
                                className="cursor-pointer border border-gray-400 md:p-5 p-3 md:pt-10 pt-5 flex flex-col rounded-md items-center text-center md:h-[160px] h-[130px]">
                                <IoCloudUploadOutline
                                    size={35}
                                    className="mr-1 font-semibold text-primary"
                                />
                                <span>Upload gallery images</span>
                                <input
                                    type="file"
                                    id="list-image-file"
                                    accept=".png,.jpg,.jpeg,.webp"
                                    className="hidden"
                                    onChange={(e) =>
                                        handleImageChange(e, "list")
                                    }
                                />
                            </label>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Step0;
