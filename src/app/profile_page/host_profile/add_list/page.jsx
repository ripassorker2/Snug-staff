/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
    useGetPropertiesAminityQuery,
    useGetPropertiesCategoryQuery,
    useUploadPropertyImagesMutation,
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
import Step0 from "./Step0";

const AddListPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const {user} = useUserContext();

    const {data: categories} = useGetPropertiesCategoryQuery();
    const {data: aminites} = useGetPropertiesAminityQuery();
    const [uploadPropety, {data, isLoading, isSuccess, isError}] =
        useUploadPropertyMutation();
    const [
        uploadPropertyImage,
        {isLoading: upIsLoading, isSuccess: upIsSuccess, isError: upIsErroor},
    ] = useUploadPropertyImagesMutation();

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

    const [featureImage, setFeatureImage] = useState(null);
    const [showcaseImages, setShowcaseImages] = useState([]);
    const [listImages, setListImages] = useState([]);

    const handleRemoveImage = (type, index) => {
        switch (type) {
            case "feature":
                setFeatureImage(null);
                break;
            case "showcase":
                setShowcaseImages(showcaseImages.filter((_, i) => i !== index));
                break;
            case "list":
                setListImages(listImages.filter((_, i) => i !== index));
                break;
            default:
                break;
        }
    };

    const handleImageChange = (e, type) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const preview = event.target.result;
            const newImage = {preview, file};

            switch (type) {
                case "feature":
                    setFeatureImage(newImage);
                    break;
                case "showcase":
                    setShowcaseImages([...showcaseImages, newImage]);
                    break;
                case "list":
                    setListImages([...listImages, newImage]);
                    break;
                default:
                    break;
            }
        };
        reader.readAsDataURL(file);
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
        if (isSuccess && data) {
            const propertyImageData = new FormData();
            propertyImageData.append("property", data.id);
            propertyImageData.append("featured_image", featureImage.file);
            showcaseImages.forEach((image) => {
                propertyImageData.append(`showcase_image`, image.file);
            });
            listImages.forEach((image) => {
                propertyImageData.append(`list_image`, image.file);
            });
            uploadPropertyImage(propertyImageData);
        }
    }, [isSuccess, data]);

    useEffect(() => {
        if (upIsSuccess) {
            toast.success("Property created successfully.");
            router.push("/profile_page/host_profile/my_lists");
        }
    }, [upIsSuccess]);

    useEffect(() => {
        if (isError || upIsErroor)
            toast.error("Something went wrong. Please try again");
    }, [isError, upIsErroor]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!featureImage) return toast.error("Please upload a feature image.");
        if (showcaseImages?.length < 3)
            return toast.error("Please upload 3 showcase images.");
        if (!listImages)
            return toast.error("Please upload some gallery images.");

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
                    <Step onClick={() => setActiveStep(3)}>4</Step>
                </Stepper>
                <div className="mt-5">
                    {activeStep === 0 && (
                        <Step0
                            featureImage={featureImage}
                            showcaseImages={showcaseImages}
                            listImages={listImages}
                            handleRemoveImage={handleRemoveImage}
                            handleImageChange={handleImageChange}
                        />
                    )}
                    {activeStep === 1 && (
                        <Step1
                            formData={formData}
                            categories={categories}
                            aminites={aminites}
                            handleInputChange={handleInputChange}
                            selectedAmenities={selectedAmenities}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    )}
                    {activeStep === 2 && (
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
                    {activeStep === 3 && (
                        <Step3
                            featureImage={featureImage}
                            showcaseImages={showcaseImages}
                            listImages={listImages}
                            categories={categories}
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
                            activeStep === 3 && "hidden"
                        }`}
                        onClick={handleNext}
                        disabled={isLastStep}>
                        Next
                    </div>
                    {activeStep === 3 && (
                        <button
                            disabled={isLoading || upIsLoading}
                            type="submit"
                            className={`btn-secondary`}>
                            {isLoading || upIsLoading ? (
                                <SmallLoader />
                            ) : (
                                "Submit"
                            )}
                        </button>
                    )}
                </div>
            </form>
        </HostProtected>
    );
};

export default AddListPage;
