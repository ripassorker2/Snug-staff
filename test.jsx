"use client";
import HostProtected from "@/protect_route/HostProtect";
import {useGetPropertiesCategoryQuery} from "@/redux/api/propertyApi";

const AddListPage = () => {
    const {data: categories} = useGetPropertiesCategoryQuery();
    console.log(categories);

    return (
        <HostProtected>
            <h2 className="sub-head mb-3">
                <span>Add property</span>
            </h2>
            <div className="grid md:grid-cols-6 gap-x-8 gap-y-2">
                <div className="md:col-span-4 md:grid md:grid-cols-2 gap-x-5">
                    <div className="mt-2 col-span-2">
                        <label className="block text-base mb-1">
                            Category name
                        </label>
                        <select
                            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                            id="category"
                            name="category"
                            defaultValue="">
                            <option value="" disabled>
                                Select category ...
                            </option>
                            {categories?.map((category, index) => (
                                <option key={index} value={category.id}>
                                    {category.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2 ">
                        <label className="block text-base mb-1">
                            Property title{" "}
                        </label>
                        <input
                            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                            id="title"
                            type="text"
                            name="title"
                            placeholder="Enter title ..."
                            required
                        />
                    </div>
                    <div className="mt-2 ">
                        <label className="block text-base mb-1">
                            Bed room quantity
                        </label>
                        <input
                            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                            id="bed_room"
                            type="number"
                            name="bed_room"
                            placeholder="Enter bed room quantity..."
                            required
                        />
                    </div>
                    <div className="mt-2 col-span-2">
                        <label className="block text-base mb-1">
                            Bath room quantity
                        </label>
                        <input
                            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                            id="bath_room"
                            type="number"
                            name="bath_room"
                            placeholder="Enter bath room quantity..."
                            required
                        />
                    </div>

                    <div className="mt-2 ">
                        <label className="block text-base mb-1">
                            Number of guest
                        </label>
                        <input
                            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                            id="guest"
                            type="number"
                            name="guest"
                            placeholder="Enter the of guest..."
                            required
                        />
                    </div>
                    <div className="mt-2 col-span-2">
                        <label className="block text-base mb-1">Location</label>
                        <input
                            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                            id="location"
                            type="text"
                            name="location"
                            placeholder="Enter location..."
                            required
                        />
                    </div>
                    <div className="mt-2 ">
                        <label className="block text-base mb-1">Price</label>
                        <input
                            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                            id="price"
                            type="number"
                            name="price"
                            placeholder="Enter price..."
                            required
                        />
                    </div>
                </div>
                <div></div>
            </div>
        </HostProtected>
    );
};

export default AddListPage;

{
    /* <div className="grid md:grid-cols-6 gap-x-8 gap-y-2">
    <div className="mt-2 ">
        <label className="block text-base mb-1">Category name</label>
        <select
            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
            id="category"
            name="category"
            defaultValue="">
            <option value="" disabled>
                Select category ...
            </option>
            {categories?.map((category, index) => (
                <option key={index} value={category.id}>
                    {category.title}
                </option>
            ))}
        </select>
    </div>
    <div className="mt-2 ">
        <label className="block text-base mb-1">Property title </label>
        <input
            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
            id="title"
            type="text"
            name="title"
            placeholder="Enter title ..."
            required
        />
    </div>
    <div className="mt-2 ">
        <label className="block text-base mb-1">Bed room quantity</label>
        <input
            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
            id="bed_room"
            type="number"
            name="bed_room"
            placeholder="Enter bed room quantity..."
            required
        />
    </div>
    <div className="mt-2 ">
        <label className="block text-base mb-1">Bath room quantity</label>
        <input
            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
            id="bath_room"
            type="number"
            name="bath_room"
            placeholder="Enter bath room quantity..."
            required
        />
    </div>
    <div className="mt-2 ">
        <label className="block text-base mb-1">Property area </label>
        <input
            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
            id="area"
            type="number"
            name="area"
            placeholder="Enter area size..."
            required
        />
    </div>
    <div className="mt-2 ">
        <label className="block text-base mb-1">Number of guest</label>
        <input
            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
            id="guest"
            type="number"
            name="guest"
            placeholder="Enter the of guest..."
            required
        />
    </div>
    <div className="mt-2 ">
        <label className="block text-base mb-1">Location</label>
        <input
            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
            id="location"
            type="text"
            name="location"
            placeholder="Enter location..."
            required
        />
    </div>
    <div className="mt-2 ">
        <label className="block text-base mb-1">Price</label>
        <input
            className="border border-gray-500 rounded w-full py-2.5 px-3 focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
            id="price"
            type="number"
            name="price"
            placeholder="Enter price..."
            required
        />
    </div>
</div>; */
}
