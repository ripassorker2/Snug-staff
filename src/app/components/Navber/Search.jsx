"use client";
import {Combobox, Transition} from "@headlessui/react";

import {useState} from "react";
import {BiChevronDown} from "react-icons/bi";
import {IoCheckmarkCircleOutline} from "react-icons/io5";

const people = [
    {id: 1, name: "Any Where"},
    {id: 2, name: "Wade Cooper"},
    {id: 3, name: "Tanya Fox"},
    {id: 4, name: "Arlene Mccoy"},
    {id: 5, name: "Devon Webb"},
];

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(people[1]);

    const filteredPeople =
        query === ""
            ? people
            : people.filter((person) => {
                  return person.name
                      .toLowerCase()
                      .includes(query.toLowerCase());
              });

    return (
        <div className="">
            <Combobox value={selected} onChange={(value) => setSelected(value)}>
                <div className="relative">
                    <Combobox.Input
                        className={
                            "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6  "
                        }
                        displayValue={(person) => person?.name}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="group absolute inset-y-0 right-0 px-2.5">
                        <BiChevronDown className="size-4 fill-white/60 group-data-[hover]:fill-white" />
                    </Combobox.Button>
                </div>
                <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}>
                    <Combobox.Options
                        anchor="bottom"
                        className=" rounded-xl border border-white/5 bg-white/5 p-1  empty:hidden">
                        {filteredPeople.map((person) => (
                            <Combobox.Option
                                key={person.id}
                                value={person}
                                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10">
                                <IoCheckmarkCircleOutline className="invisible size-4 fill-white group-data-[selected]:visible" />
                                <div className="text-sm/6 ">{person.name}</div>
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                </Transition>
            </Combobox>
        </div>
    );
};

export default SearchBar;
