import PropertyCard from "@/app/components/PropertyCard/PropertyCard";
import React from "react";

const HomeProperty = () => {
    return (
        <div className="container">
            <div className="mt-20">
                <h2 className="heading pb-6">
                    <span>Our popular properties</span>
                </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-10 gap-8">
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                </div>
            </div>
        </div>
    );
};

export default HomeProperty;
