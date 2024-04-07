"use client";
import {
    useGetPropertiesAminityQuery,
    useGetPropertiesCategoryQuery,
    useUploadPropertyMutation,
} from "@/redux/api/propertyApi";
import {Step, Stepper} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import SmallLoader from "@/app/components/SmallLoader/SmallLoader";
import {useRouter} from "next/navigation";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import HostProtected from "@/protect_route/HostProtect";

const AddListPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const {user} = useUserContext();

    const {data: categories} = useGetPropertiesCategoryQuery();
    const {data: aminites} = useGetPropertiesAminityQuery();
    const [uploadPropety, {isLoading, isSuccess, isError}] =
        useUploadPropertyMutation();
    const [images, setImages] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const [parking, setParking] = useState(true);

    const handleCheckboxChange = (e, name) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedAmenities([...selectedAmenities, name]);
        } else {
            setSelectedAmenities(
                selectedAmenities.filter((item) => item !== name)
            );
        }
    };

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImages([
                    ...images,
                    {file: selectedFile, preview: e.target.result},
                ]);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const [buttonData, setButtonData] = useState({
        bed_room: 0,
        bath_room: 0,
        minimum_guest: 0,
        maximum_guest: 0,
        minimum_stay: 0,
    });
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

    const handleParkingChange = (e) => {
        setParking(e.target.value === "true");
    };

    const [formData, setFormData] = useState({
        category: "",
        title: "",
        area: "",
        location: "",
        latitude: "",
        longtitude: "",
        short_description: "",
        description: "",
        per_day_price: "",
        per_guest_price: "",
        cleaning_fee: "",
        discount_price_days: "",
        discount_parcentage: "",
        allowed_cancelation_days: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const router = useRouter();

    useEffect(() => {
        if (isSuccess) {
            toast.success("Property added successfully");
            router.push("/profile_page/host_profile/my_lists");
        }
    }, [isSuccess, router]);

    useEffect(() => {
        if (isError) toast.error("Something went wrong. Please try again");
    }, [isError]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (images.length < 3)
            return toast.error("Please upload at least 3 images.");

        if (
            !formData.category ||
            !formData.title ||
            !formData.area ||
            !formData.location ||
            !formData.latitude ||
            !formData.longtitude ||
            !formData.short_description ||
            !formData.description ||
            !formData.per_day_price ||
            !formData.per_guest_price ||
            !formData.cleaning_fee ||
            !formData.discount_price_days ||
            !formData.discount_parcentage ||
            !formData.allowed_cancelation_days
        ) {
            return toast.error("Please fill out all required fields.");
        }

        const propertyFormData = new FormData();

        images.forEach((image) => {
            propertyFormData.append(`upload_image`, image.file);
        });
        selectedAmenities.forEach((iminity) => {
            propertyFormData.append(`amenities_list`, iminity);
        });

        propertyFormData.append("author", user.id);
        propertyFormData.append("category_id", formData.category);
        propertyFormData.append("title", formData.title);
        propertyFormData.append("area", formData.area);
        propertyFormData.append("location", formData.location);
        propertyFormData.append("latitude", formData.latitude);
        propertyFormData.append("longtitude", formData.longtitude);
        propertyFormData.append(
            "short_description",
            formData.short_description
        );
        propertyFormData.append("description", formData.description);
        propertyFormData.append("per_day_price", formData.per_day_price);
        propertyFormData.append("per_guest_price", formData.per_guest_price);
        propertyFormData.append("cleaning_fee", formData.cleaning_fee);
        propertyFormData.append(
            "discount_price_days",
            formData.discount_price_days
        );
        propertyFormData.append(
            "discount_parcentage",
            formData.discount_parcentage
        );
        propertyFormData.append(
            "allowed_cancelation_days",
            formData.allowed_cancelation_days
        );
        propertyFormData.append("bed_room", buttonData.bed_room);
        propertyFormData.append("bath_room", buttonData.bath_room);
        propertyFormData.append("minimum_guest", buttonData.minimum_guest);
        propertyFormData.append("maximum_guest", buttonData.maximum_guest);
        propertyFormData.append("minimum_stay", buttonData.minimum_stay);
        propertyFormData.append("parking", parking);

        uploadPropety(propertyFormData);
    };

    return (
        <HostProtected>
            <form onSubmit={handleSubmit} className="mt-6 md:mb-10">
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}>
                    <Step onClick={() => setActiveStep(0)}>1</Step>
                    <Step onClick={() => setActiveStep(1)}>2</Step>
                    <Step onClick={() => setActiveStep(2)}>3</Step>
                </Stepper>
                <div className="mt-5">
                    {activeStep === 0 && (
                        <Step1
                            images={images}
                            formData={formData}
                            categories={categories}
                            aminites={aminites}
                            handleRemoveImage={handleRemoveImage}
                            handleImageChange={handleImageChange}
                            handleInputChange={handleInputChange}
                            selectedAmenities={selectedAmenities}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    )}
                    {activeStep === 1 && (
                        <Step2
                            formData={formData}
                            parking={parking}
                            buttonData={buttonData}
                            handleDecrement={handleDecrement}
                            handleIncrement={handleIncrement}
                            handleInputChange={handleInputChange}
                            handleParkingChange={handleParkingChange}
                        />
                    )}
                    {activeStep === 2 && (
                        <Step3
                            categories={categories}
                            images={images}
                            formData={formData}
                            aminites={aminites}
                            parking={parking}
                            buttonData={buttonData}
                            selectedAmenities={selectedAmenities}
                        />
                    )}
                </div>
                <div
                    className={`mt-7 flex ${activeStep != 0 && "space-x-3"}  ${
                        activeStep === 1 || 2
                            ? "justify-between"
                            : "justify-end"
                    }`}>
                    <div
                        className={`btn-primary ${
                            activeStep === 0 && "hidden"
                        }`}
                        onClick={handlePrev}
                        disabled={isFirstStep}>
                        Prev
                    </div>
                    <div
                        className={`btn-primary ${
                            activeStep === 2 && "hidden"
                        }`}
                        onClick={handleNext}
                        disabled={isLastStep}>
                        Next
                    </div>
                    {activeStep === 2 && (
                        <button
                            disabled={isLoading}
                            type="submit"
                            className={`btn-secondary`}>
                            {isLoading ? <SmallLoader /> : "Submit"}
                        </button>
                    )}
                </div>
            </form>
        </HostProtected>
    );
};

export default AddListPage;
