/* eslint-disable react-hooks/exhaustive-deps */
import {useDeletePropertyMutation} from "@/redux/api/propertyApi";
import {Dialog, DialogBody} from "@material-tailwind/react";
import SmallLoader from "../../SmallLoader/SmallLoader";
import {useEffect} from "react";
import toast from "react-hot-toast";

const DeleteModal = ({id, showModal, setShowModal}) => {
    const [deleteProperty, {isLoading, isSuccess, isError}] =
        useDeletePropertyMutation();
    useEffect(() => {
        if (isSuccess) {
            toast.success("Property deleted successfully");
            setShowModal(false);
        }
        if (isError) toast.error("Something went wrong. Please try again.");
    }, [isSuccess, isError]);
    const handleDelete = () => {
        deleteProperty({id});
    };

    return (
        <Dialog
            open={showModal}
            size="sm"
            animate={{
                mount: {scale: 1, y: 0},
                unmount: {scale: 0.9, y: -100},
            }}>
            <DialogBody className="p-14 text-gray-700">
                <div>
                    <h2 className="text-center text-xl mb-2">
                        Are you sure you want to delete this?
                    </h2>
                    <div className="flex justify-center items-center space-x-5">
                        <button
                            onClick={handleDelete}
                            className="btn-secondary w-auto">
                            {isLoading ? <SmallLoader /> : "Confirm"}
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="btn-primary w-auto bg-red-500">
                            Cancel
                        </button>
                    </div>
                </div>
            </DialogBody>
        </Dialog>
    );
};

export default DeleteModal;
