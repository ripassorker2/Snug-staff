import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    Transition,
} from "@headlessui/react";
import {useState} from "react";
import {BiChevronDown} from "react-icons/bi";

const Guest = ({path}) => {
    const [buttonData, setButtonData] = useState({
        bed_room: 2,
        bath_room: 2,
        guest: 1,
    });

    const [parking, setParking] = useState(true);

    const handleParkingChange = (e) => {
        setParking(e.target.value === "true");
    };

    const handleDecrement = (field) => {
        setButtonData((prevData) => ({
            ...prevData,
            [field]: Math.max(prevData[field] - 1, 0),
        }));
    };
    const handleIncrement = (field) => {
        setButtonData((prevData) => ({
            ...prevData,
            [field]: prevData[field] + 1,
        }));
    };
    return (
        <Listbox>
            <ListboxButton
                className={`relative flex space-x-6 justify-between text-sm  ${
                    path === "/" ? "text-gray-500" : "text-gray-700"
                } `}>
                <div>Select Bedroom</div>
                <BiChevronDown
                    size={25}
                    className="group pointer-events-none"
                />
            </ListboxButton>
            <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <ListboxOptions
                    anchor="bottom end"
                    className={`w-[340px] mt-5 rounded-lg text-gray-500 p-4 ${
                        path == "/"
                            ? "bg-gray-900 text-white"
                            : " bg-white shadow-md text-gray-800"
                    }`}>
                    <div className="mt-2 ">
                        <h2 className="mb-2 text-sm">Parking area</h2>
                        <div className="flex space-x-6 mt-2">
                            <label className="flex items-center space-x-2 text-gray-600">
                                <input
                                    type="radio"
                                    name="parking"
                                    className="text-sm"
                                    value={true}
                                    checked={parking === true}
                                    onChange={handleParkingChange}
                                />
                                <p>Yes</p>
                            </label>
                            <label className="flex items-center space-x-2 text-gray-600">
                                <input
                                    type="radio"
                                    name="parking"
                                    className="text-sm"
                                    value={false}
                                    checked={parking === false}
                                    onChange={handleParkingChange}
                                />
                                <p>No</p>
                            </label>
                        </div>
                    </div>
                    <div className=" ">
                        <div className="mt-2 flex justify-between ">
                            <h2 className="text-sm">Bedroom</h2>
                            <div>
                                <button
                                    type="button"
                                    className="bg-primary p-2 rounded-full text-gray-200 w-5 h-5 inline-flex items-center justify-center mr-1.5"
                                    onClick={() => handleDecrement("bed_room")}>
                                    -
                                </button>
                                <button type="button" className="px-2 text-sm">
                                    {buttonData.bed_room}
                                </button>
                                <button
                                    type="button"
                                    className="bg-primary p-2 rounded-full text-gray-200 w-5 h-5 inline-flex items-center justify-center ml-2"
                                    onClick={() => handleIncrement("bed_room")}>
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="mt-2 flex justify-between ">
                            <h2 className="text-sm">Bathroom</h2>
                            <div>
                                <button
                                    type="button"
                                    className="bg-primary p-2 rounded-full text-gray-200 w-5 h-5 inline-flex items-center justify-center mr-1.5"
                                    onClick={() =>
                                        handleDecrement("bath_room")
                                    }>
                                    -
                                </button>
                                <button type="button" className="px-2 text-sm">
                                    {buttonData.bath_room}
                                </button>
                                <button
                                    type="button"
                                    className="bg-primary p-2 rounded-full text-gray-200 w-5 h-5 inline-flex items-center justify-center ml-2"
                                    onClick={() =>
                                        handleIncrement("bath_room")
                                    }>
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="mt-2 flex justify-between ">
                            <h2 className="text-sm">Guest</h2>
                            <div>
                                <button
                                    type="button"
                                    className="bg-primary p-2 rounded-full text-gray-200 w-5 h-5 inline-flex items-center justify-center mr-1.5"
                                    onClick={() => handleDecrement("guest")}>
                                    -
                                </button>
                                <button type="button" className="px-2 text-sm">
                                    {buttonData.guest}
                                </button>
                                <button
                                    type="button"
                                    className="bg-primary p-2 rounded-full text-gray-200 w-5 h-5 inline-flex items-center justify-center ml-2"
                                    onClick={() => handleIncrement("guest")}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </ListboxOptions>
            </Transition>
        </Listbox>
    );
};

export default Guest;
