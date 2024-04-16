/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from "react";
import {CiEdit} from "react-icons/ci";
import {GiCheckMark} from "react-icons/gi";
import {
    useDeleteImageMutation,
    useImageUpdateMutation,
    useUploadNewImageMutation,
} from "@/redux/api/propertyApi";
import SmallLoader from "@/app/components/SmallLoader/SmallLoader";
import toast from "react-hot-toast";
import {MdDelete, MdOutlineCancel} from "react-icons/md";
import {IoCloudUploadOutline} from "react-icons/io5";
import Image from "next/image";

const EditImages = ({property}) => {
    const [featureFile, setFeatureFile] = useState(null);
    const [showcaseFiles, setShowcaseFiles] = useState([null, null, null]);
    const [imageIds, setImageIds] = useState([null, null, null]);
    const [deleteImageId, setDeleteImageId] = useState(null);
    const [newGalleryFile, setNewGalleryFile] = useState(null);

    const [imageUpdate, {data, isLoading, isSuccess}] =
        useImageUpdateMutation();
    const [deleteImage, {isSuccess: deleteSuccess, isLoading: deleteLoading}] =
        useDeleteImageMutation();

    const [
        uploadNewImage,
        {
            data: uploadNewImageData,
            isSuccess: uploadNewImageSuccess,
            isLoading: uploadNewImageLoading,
        },
    ] = useUploadNewImageMutation();

    const [featuredImage, setFeaturedImage] = useState(null);
    const [showcaseImages, setShowcaseImages] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        setFeaturedImage(
            property?.property_images?.find((pr) => pr.is_featured)
        );
        setShowcaseImages(
            property?.property_images?.filter((pr) => pr.is_showcased)
        );
        setGalleryImages(
            property?.property_images?.filter(
                (img) => !img.is_featured && !img.is_showcased
            )
        );
    }, [property]);

    const handleFeatureImageUpdate = () => {
        if (featureFile && featuredImage?.id) {
            const propertyImageData = new FormData();
            propertyImageData.append("image", featureFile);
            imageUpdate({file: propertyImageData, imageId: featuredImage.id});
        }
    };

    const handleShowcaseImageUpdate = (index) => {
        const file = showcaseFiles[index];
        const imageId = imageIds[index];
        if (file && imageId) {
            const propertyImageData = new FormData();
            propertyImageData.append("image", file);
            imageUpdate({file: propertyImageData, imageId});
        }
    };

    const handleDeletedImage = (id) => {
        setDeleteImageId(id);
        deleteImage({imageId: id});
    };

    const handleUploadNewImage = () => {
        if (newGalleryFile) {
            const formData = new FormData();
            formData.append("property", property?.id);
            formData.append("list_image", newGalleryFile);
            uploadNewImage(formData);
        }
    };

    useEffect(() => {
        if (isSuccess && data) {
            if (data.is_featured) {
                setFeatureFile(null);
                setFeaturedImage({...featuredImage, image: data.image});
                toast.success("Updated featured image");
            } else {
                setShowcaseImages((prevShowcaseImages) => {
                    return prevShowcaseImages.map((image) => {
                        if (image.id === data.id)
                            return {...image, image: data.image};
                        return image;
                    });
                });
                setShowcaseFiles([null, null, null]);
                toast.success("Updated showcase image");
            }
        }
    }, [isSuccess]);

    useEffect(() => {
        if (deleteSuccess && deleteImageId) {
            setGalleryImages((prevImages) => {
                return prevImages.filter((image) => image.id !== deleteImageId);
            });
            setDeleteImageId(null);
            toast.success("Deleted showcase image");
        }
    }, [deleteSuccess]);

    useEffect(() => {
        if (uploadNewImageSuccess && uploadNewImageData) {
            setGalleryImages((prevImages) => {
                return [
                    ...prevImages,
                    {
                        ...uploadNewImageData,
                        is_featured: false,
                        is_showcased: false,
                    },
                ];
            });
            setNewGalleryFile(null);
            toast.success("Uploaded new gallery image");
        }
    }, [uploadNewImageSuccess]);

    return (
        <div>
            <div className="mt-4">
                <h2 className="my-2">Features image</h2>
                {featureFile ? (
                    <div className="relative ">
                        <div>
                            <img
                                src={URL.createObjectURL(featureFile)}
                                alt="Feature Image Preview"
                                height={100}
                                width={100}
                                className="rounded-md md:h-[500px] h-[220px] object-cover object-center w-full"
                            />
                        </div>
                        <label htmlFor="file">
                            <CiEdit
                                className="absolute cursor-pointer text-primary top-3 right-20 bg-white p-0.5 rounded-full"
                                size={24}
                            />

                            <input
                                type="file"
                                name="file"
                                id="file"
                                accept=".png,.jpg,.jpeg"
                                className="hidden"
                                onChange={(e) =>
                                    setFeatureFile(e.target.files[0])
                                }
                            />
                        </label>
                        <div className="absolute top-3 right-3 flex space-x-1.5">
                            {isLoading ? (
                                <SmallLoader />
                            ) : (
                                <GiCheckMark
                                    onClick={handleFeatureImageUpdate}
                                    className="cursor-pointer text-primary bg-white p-0.5 rounded-full "
                                    size={24}
                                />
                            )}
                            <MdOutlineCancel
                                className="cursor-pointer text-primary bg-white p-0.5 rounded-full"
                                size={24}
                                onClick={() => setFeatureFile(null)}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="relative">
                        <div>
                            <img
                                src={featuredImage?.image}
                                alt="Feature Image Preview"
                                height={100}
                                width={100}
                                className="rounded-md md:h-[500px] h-[230px] object-cover object-center w-full"
                            />
                        </div>
                        <label htmlFor="file">
                            <CiEdit
                                className="absolute top-3 cursor-pointer text-primary right-3 bg-white p-0.5 rounded-full"
                                size={24}
                            />

                            <input
                                type="file"
                                name="file"
                                id="file"
                                accept=".png,.jpg,.jpeg"
                                className="hidden"
                                onChange={(e) =>
                                    setFeatureFile(e.target.files[0])
                                }
                            />
                        </label>
                    </div>
                )}
            </div>
            <div className="mt-6">
                <h2 className="mb-1">Showcase images</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 grid-cols-1">
                    {showcaseFiles.map((file, index) => (
                        <div key={index}>
                            {file ? (
                                <div className="relative ">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt="Showcase Image Preview"
                                        height={100}
                                        width={100}
                                        className="rounded-md md:h-[230px] h-[220px] object-cover object-center w-full"
                                    />
                                    <label htmlFor={`showcase-file-${index}`}>
                                        <CiEdit
                                            className="absolute cursor-pointer text-primary top-3 right-20 bg-white p-0.5 rounded-full"
                                            size={24}
                                        />
                                        <input
                                            type="file"
                                            name={`showcase-file-${index}`}
                                            id={`showcase-file-${index}`}
                                            accept=".png,.jpg,.jpeg"
                                            className="hidden"
                                            onChange={(e) => {
                                                const newShowcaseFiles = [
                                                    ...showcaseFiles,
                                                ];
                                                newShowcaseFiles[index] =
                                                    e.target.files[0];
                                                setShowcaseFiles(
                                                    newShowcaseFiles
                                                );
                                                const imageId =
                                                    showcaseImages[index]?.id;
                                                setImageIds((prevIds) => {
                                                    const newIds = [...prevIds];
                                                    newIds[index] = imageId;
                                                    return newIds;
                                                });
                                            }}
                                        />
                                    </label>
                                    <div className="absolute top-3 right-3 flex space-x-1.5">
                                        {isLoading ? (
                                            <SmallLoader />
                                        ) : (
                                            <GiCheckMark
                                                onClick={() =>
                                                    handleShowcaseImageUpdate(
                                                        index
                                                    )
                                                }
                                                className="cursor-pointer text-primary bg-white p-0.5 rounded-full "
                                                size={24}
                                            />
                                        )}
                                        <MdOutlineCancel
                                            className="cursor-pointer text-primary bg-white p-0.5 rounded-full"
                                            size={24}
                                            onClick={() => {
                                                const newShowcaseFiles = [
                                                    ...showcaseFiles,
                                                ];
                                                newShowcaseFiles[index] = null;
                                                setShowcaseFiles(
                                                    newShowcaseFiles
                                                );
                                                setImageIds((prevIds) => {
                                                    const newIds = [...prevIds];
                                                    newIds[index] = null;
                                                    return newIds;
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="relative">
                                    <img
                                        src={
                                            showcaseImages &&
                                            showcaseImages[index]?.image
                                        }
                                        alt="Showcase Image Preview"
                                        height={100}
                                        width={100}
                                        className="rounded-md md:h-[230px] h-[220px] object-cover object-center w-full"
                                    />
                                    <label htmlFor={`showcase-file-${index}`}>
                                        <CiEdit
                                            className="absolute top-3 cursor-pointer text-primary right-3 bg-white p-0.5 rounded-full"
                                            size={24}
                                        />
                                        <input
                                            type="file"
                                            name={`showcase-file-${index}`}
                                            id={`showcase-file-${index}`}
                                            accept=".png,.jpg,.jpeg"
                                            className="hidden"
                                            onChange={(e) => {
                                                const newShowcaseFiles = [
                                                    ...showcaseFiles,
                                                ];
                                                newShowcaseFiles[index] =
                                                    e.target.files[0];
                                                setShowcaseFiles(
                                                    newShowcaseFiles
                                                );
                                                const imageId =
                                                    showcaseImages[index]?.id;
                                                setImageIds((prevIds) => {
                                                    const newIds = [...prevIds];
                                                    newIds[index] = imageId;
                                                    return newIds;
                                                });
                                            }}
                                        />
                                    </label>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6">
                <h2 className="mb-1">Gallery images </h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 grid-cols-1">
                    {galleryImages?.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={image.image}
                                alt={`Gallery Image ${index}`}
                                height={100}
                                width={100}
                                className="rounded-md md:h-[220px] h-[220px] object-cover object-center w-full"
                            />
                            <button
                                onClick={() => handleDeletedImage(image?.id)}
                                disabled={deleteLoading}>
                                <MdDelete
                                    className="cursor-pointer absolute top-2 right-2 text-red-500 p-0.5 bg-white rounded-full"
                                    size={22}
                                />
                            </button>
                        </div>
                    ))}
                    {galleryImages?.length < 15 && (
                        <>
                            {newGalleryFile ? (
                                <div className="relative ">
                                    <Image
                                        src={URL.createObjectURL(
                                            newGalleryFile
                                        )}
                                        alt="Feature Image Preview"
                                        height={100}
                                        width={100}
                                        className="rounded-md md:h-[220px] h-[220px] object-cover object-center w-full"
                                    />
                                    <div className="absolute top-2 right-2 flex space-x-1">
                                        {uploadNewImageLoading ? (
                                            <SmallLoader />
                                        ) : (
                                            <GiCheckMark
                                                onClick={handleUploadNewImage}
                                                className="cursor-pointer text-primary bg-white p-0.5 rounded-full "
                                                size={22}
                                            />
                                        )}

                                        <MdOutlineCancel
                                            size={22}
                                            className="  rounded-full p-0.5 bg-white text-primary cursor-pointer"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <label
                                    htmlFor="feature-image-file"
                                    className="cursor-pointer border border-gray-400 p-5 pt-10 flex flex-col rounded-md items-center text-center md:h-[220px] h-[220px]">
                                    <IoCloudUploadOutline
                                        size={35}
                                        className="mr-1 font-semibold text-primary"
                                    />
                                    <span>
                                        Upload gallery <br /> image
                                    </span>
                                    <input
                                        type="file"
                                        id="feature-image-file"
                                        accept=".png,.jpg,.jpeg,.webp"
                                        className="hidden"
                                        onChange={(e) =>
                                            setNewGalleryFile(e.target.files[0])
                                        }
                                    />
                                </label>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditImages;
