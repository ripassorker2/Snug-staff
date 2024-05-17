import React from "react";
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Transition,
} from "@headlessui/react";
import {BiChevronDown} from "react-icons/bi";

const Dropdown = ({selected, handleChange, options}) => {
    return (
        <Listbox value={selected} onChange={handleChange}>
            <ListboxButton className="relative flex space-x-4 justify-between pl-6 pr-6 py-3 border-r border-blue-gray-800 text-textGray">
                <div className="text-base">{selected.name}</div>
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
                    className="bg-gray rounded text-textGray px-4 py-3 -mt-4 w-56  max-h-60 overflow-scroll">
                    {options.map((item) => (
                        <ListboxOption
                            key={item.id}
                            value={item}
                            className="cursor-pointer rounded-lg p-2 hover:bg-primary hover:text-white">
                            <div className="text-sm">{item.name}</div>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Transition>
        </Listbox>
    );
};

export default Dropdown;
