"use client";
import {useState} from "react";
import {Checkbox, Tooltip} from "@material-tailwind/react";
import {useGetPropertiesByHostQuery} from "@/redux/api/propertyApi";
import Loading from "../../loading";
import SubscriptionModal from "@/app/components/SubscriptionModal/SubscriptionModal";
import Image from "next/image";

const TABLE_HEAD = ["", "Picture", "Property name", "Price", "Action"];

const SubscriptionPage = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const {data, isLoading} = useGetPropertiesByHostQuery();

    const handleRowSelection = (id) => {
        if (selectedRows?.includes(id)) {
            setSelectedRows(selectedRows?.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    if (isLoading) return <Loading />;

    return (
        <>
            {data?.filter((dt) => !dt.is_subcribed)?.length ? (
                <div className="shadow-md rounded-lg">
                    <div className="w-full overflow-x-scroll ">
                        <table className="w-full min-w-max text-center">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head, index) => (
                                        <th
                                            key={index}
                                            className="border-b  border-blue-gray-100  bg-blue-gray-50 p-4">
                                            <p className="font-medium ">
                                                {" "}
                                                {head}
                                            </p>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data
                                    ?.filter((dt) => !dt.is_subcribed)
                                    ?.map(
                                        (
                                            {
                                                title,
                                                price,
                                                id,
                                                property_images,
                                                is_subcribed,
                                            },
                                            index
                                        ) => {
                                            const isLast =
                                                index === data.length - 1;
                                            const classes = isLast
                                                ? "p-4 text-[15px]"
                                                : "p-4 border-b border-gray-300 text-[15px]";

                                            return (
                                                <tr key={index}>
                                                    <td
                                                        className={`${classes} bg-blue-gray-100/20`}>
                                                        <Checkbox
                                                            checked={selectedRows.includes(
                                                                id
                                                            )}
                                                            onChange={() =>
                                                                handleRowSelection(
                                                                    id
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                    <td
                                                        className={`${classes} flex justify-center items-center`}>
                                                        <Image
                                                            src={
                                                                property_images[0]
                                                                    ?.image
                                                            }
                                                            alt="property image"
                                                            height={90}
                                                            width={100}
                                                            className="rounded-lg object-cover object-center"
                                                        />
                                                    </td>
                                                    <td
                                                        className={`${classes} bg-blue-gray-100/20`}>
                                                        <Tooltip
                                                            placement="top"
                                                            content={title}
                                                            animate={{
                                                                mount: {
                                                                    scale: 1,
                                                                    y: 0,
                                                                },
                                                                unmount: {
                                                                    scale: 0,
                                                                    y: 25,
                                                                },
                                                            }}>
                                                            <p>
                                                                {title.length >
                                                                30
                                                                    ? `${title.slice(
                                                                          0,
                                                                          30
                                                                      )}...`
                                                                    : title}
                                                            </p>
                                                        </Tooltip>
                                                    </td>
                                                    <td
                                                        className={`${classes}`}>
                                                        ${price}
                                                    </td>

                                                    <td
                                                        className={`${classes} bg-blue-gray-50/50`}>
                                                        {is_subcribed ? (
                                                            <button
                                                                disabled
                                                                className="text-gray-100 rounded-md bg-gray-800 px-3 py-1 cursor-not-allowed">
                                                                Subscribed
                                                            </button>
                                                        ) : (
                                                            <button
                                                                disabled={
                                                                    selectedRows.length
                                                                }
                                                                onClick={() => {
                                                                    setShowModal(
                                                                        true
                                                                    );
                                                                    setSelectedRows(
                                                                        [id]
                                                                    );
                                                                }}
                                                                className="text-gray-100 disabled:bg-gray-800 rounded-md bg-secondary px-3 py-1">
                                                                Subscribe
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )}
                            </tbody>
                        </table>
                    </div>
                    {selectedRows.length > 0 && (
                        <div className=" py-6  lg:ml-8 md:ml-5 ml-3">
                            <button
                                onClick={() => setShowModal(true)}
                                className="btn-primary">
                                Subscribe
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <p className="text-center mt-32 h-[60vh] text-lg">
                    No property available.
                </p>
            )}

            {showModal && (
                <SubscriptionModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    selectedRows={selectedRows}
                    setSelectedRows={setSelectedRows}
                />
            )}
        </>
    );
};

export default SubscriptionPage;
