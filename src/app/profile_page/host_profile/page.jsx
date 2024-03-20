"use client";
import Image from "next/image";
import React, {useState} from "react";
import userLogo from "../../../assets/profile-circle.1023x1024.png";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import {MdEdit} from "react-icons/md";
import ProfileUpdateModal from "@/app/components/ProfileUpdateModal/ProfileUpdateModal";
import HostProtected from "@/protect_route/HostProtect";

const HostProfilePage = () => {
    const {user} = useUserContext();
    const [openModal, setOpenModal] = useState(false);
    return (
        <HostProtected>
            <div className="mb-6">
                <div className="flex flex-col justify-center items-center mt-4">
                    {user?.profile_pic ? (
                        <Image
                            src={user?.profile_pic}
                            width={200}
                            height={150}
                            className="w-28 h-28 bg-contain rounded-full"
                            alt="avatar"
                        />
                    ) : (
                        <Image
                            src={userLogo}
                            className="w-28 h-28 bg-contain rounded-full"
                            alt="avatar"
                        />
                    )}
                    <h2 className="text-lg font-medium"> {user?.username}</h2>
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
                        <div className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4 py-3">
                            {user?.full_name}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">Business email</h2>
                        <div className="bg-blue-gray-50 cursor-not-allowed text-base rounded-md text-gray-900 px-4 py-3">
                            {user?.email}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-base">Business phone</h2>
                        <div className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4 py-3">
                            {user?.phone}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">Address line 1</h2>
                        <div className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4 py-3">
                            {user?.address_line1}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">Address line 2</h2>
                        <div className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4 py-3">
                            {user?.address_line_2}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">City</h2>
                        <div className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4 py-3">
                            {user?.city}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">Postcode</h2>
                        <div className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4 py-3">
                            {user?.post_code}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-base">County</h2>
                        <div className="bg-blue-gray-50 text-base rounded-md text-gray-900 px-4 py-3">
                            {user?.county}
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="sub-head mt-8">
                        <span>Business information</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mt-2">
                    <div>
                        <h2 className="text-base">Company name</h2>
                        <div className="bg-blue-gray-50 cursor-not-allowed text-base rounded-md text-gray-900 px-4 py-3">
                            {user?.company_name}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-base">
                            Company house registration number ( if applicable )
                        </h2>
                        <div className="bg-blue-gray-50 cursor-not-allowed text-base rounded-md text-gray-900 px-4 py-3">
                            {user?.Company_house_registration_number}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base">
                            VAT number (if applicable)
                        </h2>
                        <div className="bg-blue-gray-50 cursor-not-allowed text-base rounded-md text-gray-900 px-4 py-3">
                            {user?.Vat_number ? user?.Vat_number : "none"}
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
        </HostProtected>
    );
};

export default HostProfilePage;
