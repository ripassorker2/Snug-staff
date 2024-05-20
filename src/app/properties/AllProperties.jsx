"use client";

import {useGetAllPropertiesQuery} from "@/redux/api/propertyApi";
import PropertyCard from "../components/PropertyCard/PropertyCard";

import Skalaton from "../components/Skalation/Skalaton";

const AllProperties = () => {
    const {data: properties, isLoading} = useGetAllPropertiesQuery();

    console.log(properties);

    if (isLoading)
        return (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-10 gap-8 mt-12">
                <Skalaton />
                <Skalaton />
                <Skalaton />
            </div>
        );

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-10 gap-8 mt-12">
            {properties?.length > 0 ? (
                <>
                    {properties?.map((dt, i) => (
                        <PropertyCard key={i} property={dt} />
                    ))}
                </>
            ) : (
                <>
                    <p className="text-gray-700 mt-7 col-span-3 text-center">
                        No properties available.
                    </p>
                </>
            )}
        </div>
    );
};

export default AllProperties;
