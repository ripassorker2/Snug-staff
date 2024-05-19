"use client";
import Image from "next/image";
import React, {useState} from "react";
import userLogo from "../../../assets/profile-circle.1023x1024.png";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import {MdEdit} from "react-icons/md";
import ProfileUpdateModal from "@/app/components/Modal/ProfileUpdateModal/ProfileUpdateModal";
import UserProtected from "@/protect_route/UserProtect";

const UserProfilePage = () => {
    const {user} = useUserContext();
    const [openModal, setOpenModal] = useState(false);

    return (
        <UserProtected>
            <div className="mb-6">
                <div className="flex flex-col justify-center items-center mt-4">
                    {user?.profile_pic ? (
                        <Image
                            src={user?.profile_pic}
                            width={100}
                            height={100}
                            className="w-28 h-28 object-cover rounded-full"
                            alt="avatar"
                        />
                    ) : (
                        <Image
                            src={userLogo}
                            className="w-28 h-28 object-cover rounded-full"
                            alt="avatar"
                        />
                    )}

                    <h2 className="text-lg   "> {user?.username}</h2>
                    <p> {user?.email}</p>
                </div>
                <div className="mt-6">
                    <h2 className="sub-head">
                        <span>Personal information</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mt-2">
                    <div>
                        <h2 className="text-base">Full name</h2>
                        <div
                            className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4
                    py-3">
                            {user?.full_name ? user.full_name : "none"}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">Address line 1</h2>
                        <div
                            className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4
                    py-3">
                            {user?.address_line1 ? user.address_line1 : "none"}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">Address line 2</h2>
                        <div
                            className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4
                    py-3">
                            {user?.address_line_2
                                ? user.address_line_2
                                : "none"}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">Mobile number</h2>
                        <div
                            className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4
                    py-3">
                            {user?.phone ? user.phone : "none"}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">Street</h2>
                        <div
                            className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4
                    py-3">
                            {user?.street ? user.street : "none"}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">City</h2>
                        <div
                            className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4
                    py-3">
                            {user?.city ? user.city : "none"}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">Postcode</h2>
                        <div
                            className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4
                    py-3">
                            {user?.post_code ? user.post_code : "none"}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-base">County</h2>
                        <div
                            className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4
                    py-3">
                            {user?.county ? user.county : "none"}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-20">
                <button
                    onClick={() => setOpenModal(true)}
                    className="btn-secondary float-end ">
                    <MdEdit size={20} className="mr-2" /> Edit profile
                </button>
            </div>
            {openModal && (
                <ProfileUpdateModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            )}
        </UserProtected>
    );
};

export default UserProfilePage;
