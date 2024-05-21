"use client";

import {useGetAllPropertiesQuery} from "@/redux/api/propertyApi";
import PropertyCard from "../components/PropertyCard/PropertyCard";

import Skalaton from "../components/Skalation/Skalaton";

const AllProperties = ({
    destination,
    total_days,
    bed_room,
    bath_room,
    maximum_guest,
    min_price,
    max_price,
}) => {
    let queries = "";

    if (destination) queries += `location=${destination}&`;
    if (total_days) queries += `total_days=${total_days}&`;
    if (bed_room) queries += `bed_room=${bed_room}&`;
    if (bath_room) queries += `bath_room=${bath_room}&`;
    if (maximum_guest) queries += `guest=${maximum_guest}&`;
    if (min_price) queries += `min_price=${min_price}&`;
    if (max_price) queries += `max_price=${max_price}`;

    const {data: properties, isLoading} = useGetAllPropertiesQuery(queries);

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
