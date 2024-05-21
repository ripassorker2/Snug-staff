import {BiHome} from "react-icons/bi";
import {LiaHotelSolid} from "react-icons/lia";
import {
    MdApartment,
    MdHouseSiding,
    MdOutlineMapsHomeWork,
} from "react-icons/md";

const Category = ({selectedCategory, setSelectedCategory}) => {
    const categories = [
        {name: "All Category", value: "all", icon: MdOutlineMapsHomeWork},
        {name: "Hotel", value: "hotel", icon: LiaHotelSolid},
        {name: "Guest House", value: "guest", icon: BiHome},
        {name: "House", value: "house", icon: MdHouseSiding},
        {name: "Apartment", value: "apartment", icon: MdApartment},
        {name: "Studios", value: "studios", icon: LiaHotelSolid},
    ];

    return (
        <div className="md:fixed   top-20 mt-3 py-3 right-0 left-0 bg-white z-40 md:shadow-md">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-wrap md:space-x-2 space-x-8 md:space-y-0 space-y-4 md:justify-between justify-center items-center  md:ml-0 -ml-10">
                    <div className="hidden"></div>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`flex cursor-pointer flex-col items-center justify-center text-gray-700 ${
                                selectedCategory === category.value
                                    ? "border-b-2 border-primary px-2"
                                    : ""
                            }`}
                            onClick={() => setSelectedCategory(category.value)}>
                            <category.icon size={24} />
                            <p className="text-sm">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
