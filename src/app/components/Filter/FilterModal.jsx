import {Dialog, DialogBody} from "@material-tailwind/react";
import {useState} from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import FilterSelector from "@/app/pages/Properties/FilterSelector";

const FilterModal = ({showModal, setShowModal}) => {
    const [value, setValue] = useState([100, 500]);
    const [selectedOptions, setSelectedOptions] = useState({
        bedroom: "any",
        guest: "any",
        bathroom: "any",
    });

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    console.log(value);

    const handleRoomSelect = (roomType, option) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [roomType]: option,
        }));
    };
    return (
        <Dialog open={showModal} handler={() => setShowModal(false)}>
            <DialogBody className="">
                <div className="px-4 pt-6 pb-2">
                    <h2 className="text-center text-2xl text-gray-800 font-semibold ">
                        Filters here
                    </h2>
                    <div className="text-gray-800 overflow-scroll px-2">
                        <div className="mt-4">
                            <h2 className="font-semibold">Parking</h2>
                            <div className="flex space-x-6 text-[16px]">
                                <label className="flex items-center space-x-2 ">
                                    <input
                                        type="radio"
                                        name="parking"
                                        value={true}
                                        checked={true}
                                        // onChange={handleParkingChange}
                                    />
                                    <p>Yes</p>
                                </label>
                                <label className="flex items-center space-x-2 ">
                                    <input
                                        type="radio"
                                        name="parking"
                                        value={false}
                                        // checked={parking === false}
                                        // onChange={handleParkingChange}
                                    />
                                    <p>No</p>
                                </label>
                            </div>
                        </div>
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
                        <div className="mt-4">
                            <h2 className="font-semibold">Pricing</h2>
                            <div className="flex justify-between items-center text-[13px]">
                                <p>50</p>
                                <p>{value[0] + " -" + value[1]}</p>
                                <p>1000</p>
                            </div>{" "}
                            <Slider
                                range
                                min={50}
                                max={1000}
                                allowCross={false}
                                defaultValue={[100, 500]}
                                trackStyle={{backgroundColor: "#439ad4"}}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button className="btn-primary font-semibold ">
                            Apply
                        </button>
                    </div>
                </div>
            </DialogBody>
        </Dialog>
    );
};

export default FilterModal;
