import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    Transition,
} from "@headlessui/react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {BiChevronDown} from "react-icons/bi";

const PriceRange = ({path, price, setPrice}) => {
    return (
        <Listbox>
            <ListboxButton
                className={`relative flex space-x-6 justify-between text-sm  ${
                    path === "/" ? "text-gray-500" : "text-gray-700"
                } `}>
                <p>{price[0] + " - " + price[1]}</p>
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
                    className={`w-[340px] mt-5 rounded-lg text-gray-700 p-6 bg-white shadow-lg   md:ml-0 ml-10`}>
                    <div className="mt-4">
                        <h2 className="font-semibold">Pricing</h2>
                        <div className="flex justify-between items-center text-[13px]">
                            <p>0</p>
                            <p>{price[0] + " -" + price[1]}</p>
                            <p>1000</p>
                        </div>{" "}
                        <Slider
                            range
                            min={0}
                            max={1000}
                            allowCross={false}
                            defaultValue={[0, 1000]}
                            trackStyle={{backgroundColor: "#439ad4"}}
                            onChange={(value) => setPrice(value)}
                        />
                    </div>
                </ListboxOptions>
            </Transition>
        </Listbox>
    );
};

export default PriceRange;
