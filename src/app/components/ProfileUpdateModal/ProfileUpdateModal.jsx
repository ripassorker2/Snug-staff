"use client";
import React, {useEffect, useState} from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import {MdCancel} from "react-icons/md";
import Image from "next/image";
import avatar from "../../../assets/blank-profile-picture-973460_1280.png";
import {useUpdateProfileMutation} from "@/redux/api/utilsApiSlice";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import SmallLoader from "../SmallLoader/SmallLoader";

const ProfileUpdateModal = ({openModal, setOpenModal}) => {
    const {user, refetch, setRefetch} = useUserContext();
    const [file, setFile] = useState(null);
    const [updateProfile, {isSuccess, isLoading}] = useUpdateProfileMutation();

    useEffect(() => {
        if (isSuccess) {
            toast.success("Updated profile successfully");
            setRefetch(!refetch);
            setOpenModal(false);
        }
    }, [isSuccess]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData();

        if (user?.role === "host") {
            formData.append("full_name", form.full_name.value);
            formData.append("mobile", form.mobile.value);
            formData.append("address_line1", form.address_line1.value);
            formData.append("address_line_2", form.address_line_2.value);
            formData.append("city", form.city.value);
            formData.append("county", form.county.value);
            formData.append("post_code", form.post_code.value);
        } else if (user?.role === "user") {
            formData.append("phone", form.phone.value);
            formData.append("address_line1", form.address_line1.value);
            formData.append("address_line_2", form.address_line_2.value);
            formData.append("city", form.city.value);
            formData.append("street", form.street.value);
            formData.append("county", form.county.value);
            formData.append("post_code", form.post_code.value);
        }
        if (file) formData.append("profile_pic", file);

        updateProfile({formData, id: user?.id});
    };

    return (
        <>
            <Dialog open={openModal} size="lg" className="md:p-4 ">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="flex justify-between items-center">
                        <DialogHeader>Update profile</DialogHeader>
                        <div className="mr-2">
                            <MdCancel
                                onClick={() => setOpenModal(false)}
                                size={30}
                            />
                        </div>
                    </div>
                    <DialogBody className="h-[32rem] overflow-scroll">
                        <div>
                            {file ? (
                                <div className="w-full flex justify-center items-center flex-col ">
                                    <label htmlFor="file" className="relative">
                                        <Image
                                            src={URL.createObjectURL(file)}
                                            className="h-28 w-28 rounded-full"
                                            alt="profile"
                                            width={110}
                                            height={110}
                                        />
                                        <input
                                            type="file"
                                            name="file"
                                            id="file"
                                            accept=".png,.jpg,.jpeg"
                                            className="hidden"
                                            onChange={(e) =>
                                                setFile(e.target.files[0])
                                            }
                                        />
                                    </label>
                                </div>
                            ) : (
                                <div className="w-full flex justify-center items-center flex-col ">
                                    <label htmlFor="file" className="relative">
                                        <Image
                                            src={user?.profile_pic || avatar}
                                            height={100}
                                            width={100}
                                            className="h-24 bg-contain w-24 rounded-full"
                                            alt="profile"
                                        />

                                        <input
                                            type="file"
                                            name="file"
                                            id="file"
                                            accept=".png,.jpg,.jpeg"
                                            className="hidden"
                                            onChange={(e) =>
                                                setFile(e.target.files[0])
                                            }
                                        />
                                    </label>
                                </div>
                            )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-x-10 md:gap-y-3 text-gray-900 text-lg">
                            {user?.role == "host" && (
                                <>
                                    <div className="mt-2">
                                        <label className="block mb-1">
                                            Full name
                                        </label>
                                        <input
                                            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                            id="full_name"
                                            type="text"
                                            name="full_name"
                                            required
                                            placeholder="Enter full_name..."
                                            defaultValue={user.full_name}
                                        />
                                    </div>{" "}
                                    <div className="mt-2">
                                        <label className="block text-base mb-1">
                                            Mobile number
                                        </label>
                                        <input
                                            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                            id="mobile"
                                            type="text"
                                            name="mobile"
                                            required
                                            placeholder="Enter mobile number..."
                                            defaultValue={user?.mobile}
                                        />
                                    </div>
                                </>
                            )}
                            {user?.role == "user" && (
                                <div className="mt-2">
                                    <label className="block text-base mb-1">
                                        Mobile number
                                    </label>
                                    <input
                                        className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        required
                                        placeholder="Enter mobile number..."
                                        defaultValue={user?.phone}
                                    />
                                </div>
                            )}

                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Address line 1
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="address_line1"
                                    type="text"
                                    name="address_line1"
                                    required
                                    placeholder="Enter address_line1 "
                                    defaultValue={user?.address_line1}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Address line 2
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="address_line_2"
                                    type="text"
                                    name="address_line_2"
                                    required
                                    placeholder="Enter address line 2..."
                                    defaultValue={user?.address_line_2}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    City
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="city"
                                    type="text"
                                    name="city"
                                    required
                                    placeholder="Enter city..."
                                    defaultValue={user?.city}
                                />
                            </div>
                            {user?.role == "user" && (
                                <div className="mt-2">
                                    <label className="block text-base mb-1">
                                        Street
                                    </label>
                                    <input
                                        className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                        id="street"
                                        type="text"
                                        name="street"
                                        required
                                        placeholder="Enter street..."
                                        defaultValue={user?.street}
                                    />
                                </div>
                            )}

                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    Postcode
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="post_code"
                                    type="text"
                                    name="post_code"
                                    required
                                    placeholder="Enter post code..."
                                    defaultValue={user?.post_code}
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-base mb-1">
                                    County
                                </label>
                                <input
                                    className="border border-gray-500 rounded w-full py-2.5 px-3 mr-2 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                    id="county"
                                    type="text"
                                    name="county"
                                    required
                                    placeholder="Enter county or state..."
                                    defaultValue={user?.county}
                                />
                            </div>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <button
                            disabled={isLoading}
                            className="btn-secondary"
                            type="submit">
                            {isLoading ? <SmallLoader /> : " Submit"}
                        </button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    );
};
export default ProfileUpdateModal;
