import React, {useState} from "react";
import {BiHome} from "react-icons/bi";
import {LiaHotelSolid} from "react-icons/lia";
import {MdApartment, MdHouseSiding} from "react-icons/md";
import {TbFilterSearch} from "react-icons/tb";
import FilterModal from "./FilterModal";

const Category = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="fixed  top-20 mt-3 py-3 right-0 left-0 bg-white  z-40 shadow-md">
            <div className="flex justify-between items-center max-w-[1100px] mx-auto">
                <div className="flex flex-col items-center justify-center text-gray-700">
                    <LiaHotelSolid size={24} />
                    <p className="text-sm">Hotel</p>
                </div>
                <div className="flex flex-col items-center justify-center text-gray-700">
                    <BiHome size={24} />
                    <p className="text-sm">Guest House</p>
                </div>
                <div className="flex flex-col items-center justify-center text-gray-700">
                    <MdHouseSiding size={24} />
                    <p className="text-sm">House</p>
                </div>
                <div className="flex flex-col items-center justify-center text-gray-700">
                    <MdApartment size={24} />
                    <p className="text-sm">Apartment</p>
                </div>
                <div className="flex flex-col items-center justify-center text-gray-700">
                    <LiaHotelSolid size={24} />
                    <p className="text-sm">Studios</p>
                </div>
                <div className="flex flex-col items-center justify-center text-gray-700">
                    <button
                        onClick={() => setShowModal(true)}
                        className="rounded-xl px-4 py-2 inline-flex items-center justify-center hover:bg-primary duration-300 text border border-[#CEDFEB]">
                        <TbFilterSearch size={20} className="mr-2" /> Filter
                    </button>
                </div>
            </div>
            <>
                {showModal && (
                    <FilterModal
                        setShowModal={setShowModal}
                        showModal={showModal}
                    />
                )}
            </>
        </div>
    );
};

export default Category;
