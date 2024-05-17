"use client";
import PropertyCard from "@/app/components/PropertyCard/PropertyCard";
import Skalaton from "@/app/components/Skalation/Skalaton";
import {useGetAllPropertiesQuery} from "@/redux/api/propertyApi";
import React from "react";

const HomeProperty = () => {
    const {data, isLoading} = useGetAllPropertiesQuery();

    if (isLoading) {
        return (
            <div className="mt-28">
                <div className="grid lg:grid-cols-3 md:grid-cols-2  lg:gap-12 md:gap-10 gap-8 container ">
                    <Skalaton />
                    <Skalaton />
                    <Skalaton />
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="mt-20">
                <h2 className="heading pb-6">
                    <span>Our properties</span>
                </h2>
                {data?.length ? (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-10 gap-8">
                        {data?.map((dt, i) => (
                            <PropertyCard key={i} property={dt} />
                        ))}
                    </div>
                ) : (
                    <p> No properties available.</p>
                )}
            </div>
        </div>
    );
};

export default HomeProperty;
