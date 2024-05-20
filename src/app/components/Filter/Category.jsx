import {BiHome} from "react-icons/bi";
import {LiaHotelSolid} from "react-icons/lia";
import {MdApartment, MdHouseSiding} from "react-icons/md";

const Category = () => {
    return (
        <div className="fixed  top-20 mt-3 py-3 right-0 left-0 bg-white  z-40 shadow-md">
            <div className="flex justify-between items-center max-w-[1200px] mx-auto">
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
            </div>
        </div>
    );
};

export default Category;
