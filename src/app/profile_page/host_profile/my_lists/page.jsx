"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "../../loading";
import {Tooltip} from "@material-tailwind/react";
import HostProtected from "@/protect_route/HostProtect";
import {useGetPropertiesByHostQuery} from "@/redux/api/propertyApi";
import DeleteModal from "../../../components/Modal/DeleteModal/DeleteModal";
import DetailModal from "../../../components/Modal/PropertyDetailModal/DetailModal";

const TABLE_HEAD = ["Picture", "Property name", "Details", "Update", "Delete"];

const MyLists = () => {
    const [detailsModal, setDetailsModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [currentProperty, setCurrentProperty] = useState(null);

    const {data: properties, isLoading} = useGetPropertiesByHostQuery();
    if (isLoading) return <Loading />;

    return (
        <HostProtected>
            {properties?.length ? (
                <>
                    <h2 className="sub-head pb-4">
                        <span>My properties</span>
                    </h2>
                    <div className="shadow-md rounded-lg scrollbar">
                        <div className="w-full  overflow-x-auto ">
                            <table className="w-full min-w-max text-center">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head, index) => (
                                            <th
                                                key={index}
                                                className="border-b  border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <p className="   ">{head}</p>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {properties?.map((property, index) => {
                                        const isLast =
                                            index === properties?.length - 1;
                                        const classes = isLast
                                            ? "p-4 text-[15px]"
                                            : "p-4 border-b border-gray-300 text-[15px]";

                                        return (
                                            <tr key={index}>
                                                <td
                                                    className={`${classes}  bg-blue-gray-100/20 flex justify-center items-center`}>
                                                    <Image
                                                        src={
                                                            property
                                                                ?.property_images[0]
                                                                ?.image
                                                        }
                                                        alt="property image"
                                                        height={90}
                                                        width={100}
                                                        wipropertyh={100}
                                                        className="rounded-lg h-[66px] object-cover object-center"
                                                    />
                                                </td>
                                                <td className={`${classes}`}>
                                                    <Tooltip
                                                        placement="top"
                                                        content={property.title}
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
                                                            {property?.title
                                                                ?.length > 30
                                                                ? `${property.title.slice(
                                                                      0,
                                                                      30
                                                                  )}...`
                                                                : property.title}
                                                        </p>
                                                    </Tooltip>
                                                </td>

                                                <td
                                                    className={`${classes} bg-blue-gray-100/20`}>
                                                    <button
                                                        onClick={() => {
                                                            setCurrentProperty(
                                                                property
                                                            );
                                                            setDetailsModal(
                                                                true
                                                            );
                                                        }}
                                                        className="bg-primary text-gray-200 rounded-xl px-2 py-[3px] text-sm">
                                                        Details
                                                    </button>
                                                </td>
                                                <td className={`${classes}`}>
                                                    <Link
                                                        href={`/properties/update/${property.slug}`}
                                                        className="bg-secondary text-gray-200 rounded-xl px-2 py-[3px] text-sm">
                                                        Update
                                                    </Link>
                                                </td>
                                                <td
                                                    className={`${classes} bg-blue-gray-100/20`}>
                                                    <button
                                                        onClick={() => {
                                                            setCurrentProperty(
                                                                property
                                                            );
                                                            setDeleteModal(
                                                                true
                                                            );
                                                        }}
                                                        className="bg-red-500 text-gray-200 rounded-xl px-2 py-[3px] text-sm">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            ) : (
                <p className="text-center mt-32 h-[60vh] text-lg">
                    No property available.
                </p>
            )}

            {detailsModal && (
                <DetailModal
                    property={currentProperty}
                    showModal={detailsModal}
                    setShowModal={setDetailsModal}
                />
            )}

            {deleteModal && currentProperty && (
                <DeleteModal
                    id={currentProperty.id}
                    showModal={deleteModal}
                    setShowModal={setDeleteModal}
                />
            )}
        </HostProtected>
    );
};

export default MyLists;
