"use client";
import Filter from "../components/Filter/Filter";
import Category from "../components/Filter/Category";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import {useEffect, useState} from "react";
import Loader from "../loading";
import {config} from "@/envConfig/envConfig";

const PropertyPage = ({
    searchParams: {
        destination,
        total_days,
        bed_room,
        bath_room,
        maximum_guest,
        min_price,
        max_price,
        start_day,
        end_day,
    },
}) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [properties, setproperties] = useState([]);
    const [loading, setloading] = useState(false);
    let queries = "";

    if (destination) queries += `location=${destination}&`;
    if (total_days) queries += `total_days=${total_days}&`;
    if (bed_room) queries += `bed_room=${bed_room}&`;
    if (bath_room) queries += `bath_room=${bath_room}&`;
    if (maximum_guest) queries += `guest=${maximum_guest}&`;
    if (min_price) queries += `min_price=${min_price}&`;
    if (max_price) queries += `max_price=${max_price}`;

    useEffect(() => {
        setloading(true);
        fetch(`${config.base_url}/property?${queries}`)
            .then((res) => res.json())
            .then((data) => {
                setproperties(data);
                setloading(false);
            });
    }, [queries]);

    return (
        <div className="container">
            <Category
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <Filter
                destination={destination}
                bed_room={bed_room}
                bath_room={bath_room}
                maximum_guest={maximum_guest}
                min_price={min_price}
                max_price={max_price}
                start_day={start_day}
                end_day={end_day}
            />

            <>
                {loading && <Loader />}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-10 gap-8 mt-12">
                    {properties?.length > 0 ? (
                        <>
                            {properties?.map((dt, i) => (
                                <PropertyCard key={i} property={dt} />
                            ))}
                        </>
                    ) : (
                        <p className="text-gray-700 my-20 col-span-3 text-center">
                            No properties available.
                        </p>
                    )}
                </div>
            </>
        </div>
    );
};

export default PropertyPage;
