import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Transition,
} from "@headlessui/react";

import {useState} from "react";
import {BiChevronDown} from "react-icons/bi";

const countries = [
    {id: 1, name: "Anywhere"},
    {id: 2, name: "India"},
    {id: 3, name: "USA"},
    {id: 4, name: "Singapore"},
    {id: 5, name: "Dubai"},
    {id: 22, name: "India"},
    {id: 32, name: "USA"},
    {id: 42, name: "Singapore"},
    {id: 52, name: "Dubai"},
];

const Location = ({path, location, setLocation}) => {
    const [query, setQuery] = useState("");

    const filteredCountry = countries?.filter((person) => {
        return person.name.toLowerCase().includes(query.toLowerCase());
    });

    return (
        <Combobox value={location} onChange={(value) => setLocation(value)}>
            <div className="relative">
                <ComboboxInput
                    className={`rounded-md min-w-[260px] focus:ring-0 font-normal text-sm focus:outline-none ${
                        path == "/"
                            ? "bg-gray-900 placeholder:text-gray-500 text-gray-500"
                            : "placeholder:text-gray-700 text-gray-700"
                    }`}
                    displayValue={(person) => person?.name}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Select a Location"
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                    <BiChevronDown className="size-6 text-gray-500" />
                </ComboboxButton>
            </div>
            <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}>
                <ComboboxOptions
                    anchor="bottom"
                    className={` w-[220px] h-60 mt-5 rounded-lg p-3 bg-white shadow-md text-gray-800 `}>
                    {filteredCountry.length > 0 ? (
                        <>
                            {" "}
                            {filteredCountry?.map((person) => (
                                <ComboboxOption
                                    key={person.id}
                                    value={person}
                                    className="group hover:bg-primary flex cursor-pointer  rounded-lg py-1.5 px-3 text-sm">
                                    {person.name}
                                </ComboboxOption>
                            ))}
                        </>
                    ) : (
                        <p className="text-sm text-red-500">Not found...</p>
                    )}
                </ComboboxOptions>
            </Transition>
        </Combobox>
    );
};

export default Location;
