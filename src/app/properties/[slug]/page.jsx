"use client";
import GalleryModal from "@/app/components/Modal/GalleryModal/GalleryModal";
import React, {useState} from "react";
import DatePicker from "../../pages/Properties/DatePicker";
import {useGetPropertyDetailsQuery} from "@/redux/api/propertyApi";
import Loading from "@/app/profile_page/loading";
import PropertyImages from "@/app/pages/Properties/PropertyImages";
import BasicInfo from "@/app/pages/Properties/BasicInfo";
import GoogleMap from "@/app/components/Map/GoogleMap";

const PropertyDetails = ({params}) => {
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState(null);
    const handleDateChange = (newValue) => {
        setDate(newValue);
    };

    const {data: property, isLoading} = useGetPropertyDetailsQuery({
        slug: params.slug,
    });

    if (isLoading) return <Loading />;

    return (
        <div className="container">
            <div className="md:mt-20 mt-12">
                <div>
                    <PropertyImages
                        setShowModal={setShowModal}
                        property={property}
                    />
                </div>
                <div className="mt-6 md:grid md:grid-cols-5 gap-3">
                    <div className="md:col-span-3">
                        <BasicInfo property={property} />
                    </div>

                    <div className="md:col-span-2 md:w-[80%] mx-auto md:mb-0 mb-10 md:mt-32 mt-14 text-gray-800">
                        <DatePicker
                            property={property}
                            date={date}
                            handleDateChange={handleDateChange}
                        />
                    </div>
                </div>
                <div className="mt-12 ">
                    <GoogleMap
                        lat={property?.latitude}
                        long={property?.longtitude}
                        location={property?.location}
                    />
                </div>
            </div>
            {showModal && (
                <GalleryModal
                    images={property?.property_images}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    );
};

export default PropertyDetails;
