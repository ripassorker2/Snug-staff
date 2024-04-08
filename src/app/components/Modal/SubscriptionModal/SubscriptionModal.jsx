/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import SmallLoader from "../../SmallLoader/SmallLoader";
import {
    useGetSubscriptionMutation,
    useSuccessSubscriptionMutation,
} from "@/redux/api/subscriptionApi";
import {Dialog, DialogBody, DialogFooter} from "@material-tailwind/react";
import {useRouter} from "next/navigation";

const SubscriptionModal = ({
    showModal,
    setShowModal,
    selectedRows,
    setSelectedRows,
}) => {
    const [selectedOption, setSelectedOption] = useState(1);
    const [getSubscription, {data: resData, isLoading, isSuccess, isError}] =
        useGetSubscriptionMutation();

    const [
        successSubscription,
        {isLoading: ssLoading, isError: ssError, isSuccess: ssSuccess},
    ] = useSuccessSubscriptionMutation();

    const router = useRouter();

    useEffect(() => {
        if (isSuccess) {
            const subsInfo = {
                session_id: resData.sessiod_id,
                property_list: selectedRows,
            };
            console.log(subsInfo);
            localStorage.setItem("subs_info", JSON.stringify(subsInfo));
            window.location.href = `${resData.Data}`;
        } else if (isError) {
            toast.error("Something went wrong");
        }
    }, [isSuccess, isError]);

    useEffect(() => {
        if (ssSuccess) {
            toast.success("Free subscription successfully");
            router.push("/profile_page/host_profile/my-subscription");
            setShowModal(false);
            setSelectedRows([]);
        } else if (ssError) {
            toast.error("Something went wrong");
        }
    }, [ssError, ssSuccess]);

    const handleSubmit = async () => {
        if (selectedOption == 0) {
            successSubscription({
                type_variation: "free_trial",
                property_list: selectedRows,
            });
        } else if (selectedOption == 1) {
            const data = {
                pack_id: parseInt(selectedOption),
                property_list: selectedRows,
            };
            getSubscription(data);
        }
    };

    return (
        <Dialog
            open={showModal}
            size="sm"
            animate={{
                mount: {scale: 1, y: 0},
                unmount: {scale: 0.9, y: -100},
            }}>
            <DialogBody className="md:p-8 p-5 text-gray-700">
                <p className="text-lg pb-2 font-semibold">
                    <span> Select your subscription type</span>
                </p>
                <select
                    className="focus:outline-none border border-gray-300 bg-blue-gray-100/30 px-4 py-2.5 rounded-md w-full"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}>
                    <option value={0}>Free</option>
                    <option selected value={1}>
                        Monthly
                    </option>
                </select>
            </DialogBody>
            <DialogFooter>
                <button
                    onClick={() => {
                        setShowModal(false);
                        setSelectedRows([]);
                    }}
                    className="mr-4 btn-primary">
                    Cancel
                </button>
                <button
                    disabled={isLoading || ssLoading}
                    className="btn-secondary"
                    onClick={handleSubmit}>
                    {isLoading || ssLoading ? <SmallLoader /> : "Confirm"}
                </button>
            </DialogFooter>
        </Dialog>
    );
};

export default SubscriptionModal;
