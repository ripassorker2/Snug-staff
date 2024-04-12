/* eslint-disable @next/next/no-img-element */
import {Dialog, DialogBody, DialogHeader} from "@material-tailwind/react";
import {MdOutlineCancel} from "react-icons/md";

const DetailModal = ({property, showModal, setShowModal}) => {
    return (
        <Dialog
            open={showModal}
            size="xl"
            animate={{
                mount: {scale: 1, y: 0},
                unmount: {scale: 0.9, y: -100},
            }}
            className="relative">
            <DialogHeader>
                <MdOutlineCancel
                    className="absolute top-3 right-3 text-2xl"
                    onClick={() => setShowModal(false)}
                />
            </DialogHeader>
            <DialogBody className="md:p-8 p-5 text-gray-700 md: h-[44rem]  overflow-x-auto mt-4">
                <div className="mb-5">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-6 ">
                        {property.property_images?.map((img, i) => (
                            <img
                                key={i}
                                src={img.image}
                                className={`w-full rounded-md object-center object-cover ${
                                    i === 0
                                        ? "lg:col-span-3 md:col-span-2 col-span-1 md:h-[450px] h-[210px]"
                                        : "lg:h-[200px] md:h-[150] h-[210px]"
                                }`}
                                alt={"proterty image"}
                            />
                        ))}
                    </div>
                </div>
                <div className="">
                    <h2>Property category : {property?.category?.title}</h2>

                    <h2 className="lg:text-2xl md:text-xl text-lg ">
                        Property title : {property?.title}
                    </h2>
                </div>
                <div className="flex space-x-3 space-y-2 flex-wrap items-center mb-2">
                    <button className=" hidden"></button>
                    <button className=" !-ml-0 border-[2px]  shadow-md  rounded-lg px-2 py-1">
                        {property?.bed_room} bedrooms
                    </button>
                    <button className="border-[2px]  shadow-md  rounded-lg px-2 py-1">
                        {property?.bath_room} bathrooms
                    </button>
                    <button className=" border-[2px]  shadow-md  rounded-lg px-2 py-1">
                        {property?.minimum_guest} min guest
                    </button>
                    <button className="border-[2px]  shadow-md  rounded-lg px-2 py-1">
                        {property?.maximum_guest} max guest
                    </button>
                    <button className="border-[2px]  shadow-md  rounded-lg px-2 py-1">
                        {property?.minimum_stay} min stay
                    </button>
                </div>

                <div className="md:flex md:space-x-8 flex-wrap ">
                    <h2 className="mb-1">
                        <b className="font-semibold">Discount price days</b> :{" "}
                        {property.discount_price_days}days
                    </h2>
                    <h2 className="mb-1">
                        <b className="font-semibold">Discount parcentage</b> :{" "}
                        {property.discount_parcentage}%
                    </h2>
                </div>
                <div>
                    <h2 className="mb-1">
                        <b className="font-semibold">Price</b> : $
                        {property.price}
                    </h2>
                    <h2 className="mb-1">
                        <b className="font-semibold"> Parking area : </b>
                        {property.parking ? "Available" : "Not available"}
                    </h2>
                    <h2 className="mb-1">
                        <b className="font-semibold"> Property area : </b>
                        {property.area}
                    </h2>
                    <h2 className="mb-1">
                        <b className="font-semibold">Location : </b>
                        {property.location}
                    </h2>
                </div>

                <div className="my-2">
                    <b className="font-semibold">Short description</b>
                    {property?.short_description
                        ?.split("\n")
                        ?.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                </div>
                <div className="my-2">
                    <b className="font-semibold">Description</b>
                    {property?.description?.split("\n")?.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <div>
                    <p className="font-semibold">Aminities</p>
                    <div className="flex space-x-4 space-y-2 flex-wrap items-center !-ml-3">
                        <button className="hidden"></button>
                        {property?.aminites.map((amenity, i) => (
                            <button
                                key={i}
                                className="border-[2px]  shadow-md  rounded-lg px-2 py-1">
                                {amenity.name}
                            </button>
                        ))}
                    </div>
                </div>
                {/* <div className="mt-5 ">
                    <GoogleMap
                        lat={property?.latitude}
                        long={property?.longtitude}
                        location={property?.location}
                    />
                </div> */}

                <div className="flex justify-end mt-5">
                    <button
                        onClick={() => {
                            setShowModal(false);
                        }}
                        className="mr-4 btn-secondary  w-auto">
                        Close
                    </button>
                </div>
            </DialogBody>
        </Dialog>
    );
};

export default DetailModal;
