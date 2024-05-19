import FilterSelector from "@/app/pages/Properties/FilterSelector";
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    Transition,
} from "@headlessui/react";
import {BiChevronDown} from "react-icons/bi";

const Bedroom = ({path, selectedOptions, handleRoomSelect}) => {
    return (
        <Listbox>
            <ListboxButton
                className={`relative flex space-x-6 justify-between text-sm  ${
                    path === "/" ? "text-gray-500" : "text-gray-700"
                } `}>
                <p>
                    {selectedOptions.bathroom} bath, {selectedOptions.bedroom}{" "}
                    bed, {selectedOptions.guest} guest
                </p>
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
                    className={`max-w-[440px] mt-5 rounded-lg text-gray-700 p-6 bg-white shadow-md `}>
                    <>
                        <div className="mt-4">
                            <FilterSelector
                                roomType="Bedroom"
                                options={[1, 2, 3, 4, 5, 6]}
                                selectedOption={selectedOptions.bedroom}
                                onSelect={(option) =>
                                    handleRoomSelect("bedroom", option)
                                }
                            />
                            <FilterSelector
                                roomType="Guest"
                                options={[1, 2, 3, 4, 5, 6]}
                                selectedOption={selectedOptions.guest}
                                onSelect={(option) =>
                                    handleRoomSelect("guest", option)
                                }
                            />
                            <FilterSelector
                                roomType="Bathroom"
                                options={[1, 2, 3, 4, 5, 6]}
                                selectedOption={selectedOptions.bathroom}
                                onSelect={(option) =>
                                    handleRoomSelect("bathroom", option)
                                }
                            />
                        </div>
                    </>
                </ListboxOptions>
            </Transition>
        </Listbox>
    );
};

export default Bedroom;
