import {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {BiChevronDown} from "react-icons/bi";

const people = [{name: "Home"}, {name: "Hostel"}, {name: "Rent"}];

const CategoryFilter = () => {
    const [selected, setSelected] = useState(people[0]);

    return (
        <div className=" flex space-x-6 items-center">
            <div className="w-[500px]">
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative">
                        {/* <small>Category</small> */}
                        <Listbox.Button className="w-full text-start bg-primary text-white px-9 py-3 rounded">
                            <p className="block truncate">{selected.name}</p>
                            <div className="pointer-events-none absolute bottom-3 right-6 flex items-center">
                                <BiChevronDown
                                    size={30}
                                    className="text-gray-300"
                                />
                            </div>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <Listbox.Options className="absolute mt-1  w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                <Listbox.Option
                                    key="category"
                                    className={({active}) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                                ? "bg-primary text-white"
                                                : "text-gray-900"
                                        }`
                                    }
                                    value={{name: "All categories"}}>
                                    {({selected}) => (
                                        <p
                                            className={`block truncate ${
                                                selected ? "  " : "font-normal"
                                            }`}>
                                            All categories
                                        </p>
                                    )}
                                </Listbox.Option>

                                {people.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({active}) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active
                                                    ? "bg-primary text-white"
                                                    : "text-gray-900"
                                            }`
                                        }
                                        value={person}>
                                        {({selected}) => (
                                            <p
                                                className={`block truncate ${
                                                    selected
                                                        ? "  "
                                                        : "font-normal"
                                                }`}>
                                                {person.name}
                                            </p>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>

            <div className="w-full">
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="input-feild  text-gray-800"
                    placeholder="Search by location...."
                />
            </div>
        </div>
    );
};
export default CategoryFilter;
