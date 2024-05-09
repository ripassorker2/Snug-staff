"use client";
import React from "react";
import Loading from "../profile_page/loading";
import {useGetPropertiesByHostQuery} from "@/redux/api/propertyApi";
import {usePathname} from "next/navigation";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import CategoryFilter from "../pages/Properties/FilterCategory";
import SidebarFilter from "../pages/Properties/SidebarFilter";

const PropertyPage = () => {
    const path = usePathname();
    const {data: properties, isLoading} = useGetPropertiesByHostQuery();

    console.log(properties);

    if (isLoading) return <Loading />;

    return (
        <div className="container">
            <div className="mt-10">
                <div className="grid md:grid-cols-9  gap-x-8 gap-y-6 ">
                    <div className="col-span-2 md:mr-2">
                        <SidebarFilter />
                    </div>
                    <div className="col-span-7">
                        <div className="mb-8">
                            <CategoryFilter />
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            {properties?.map((dt, i) => (
                                <PropertyCard
                                    path={path}
                                    key={i}
                                    property={dt}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyPage;
