"use client";
import React, {useState} from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
    mount: {scale: 1},
    unmount: {scale: 0.9},
};

const data = [
    {
        title: "What happens if I have an issue with my listing?",
        content:
            "We strive to provide you with the best possible experience. If you have any issues with your listing, please contact us and we will do our best to resolve them. We are here to help.",
    },
    {
        title: "How do I get started with hosting?",
        content:
            " You can get started with hosting by simply listing your properties. We are here to help.",
    },
    {
        title: "How much does it cost to host?",
        content:
            "We don't charge any fees for hosting. We take a fees in every transaction for the hosts to pay. Also, We are here to help.",
    },
    {
        title: "What should I do to make the properties to be featured in the home page?",
        content:
            "You have to fill out a form to make your properties list in the featured sections and we have packages for that section.",
    },
    {
        title: "What is the best way to get started?",
        content:
            "The best way to get started with hosting is to list your properties by filling out a form that doesn't require much work and you are good to go.",
    },
];

const Faq = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="container md:w-[70%] mx-auto">
            <div className="mt-20 mb-6 text-center">
                <h2 className="heading mb-2">
                    <span>Host FAQs</span>
                </h2>
                <p className="desc">
                    Some of the most frequently asked questions about hosting
                    and listing properties.
                </p>
            </div>
            {data.map((item, index) => (
                <Accordion
                    key={index}
                    open={open === index + 1}
                    animate={CUSTOM_ANIMATION}>
                    <AccordionHeader
                        className="text-lg"
                        onClick={() => handleOpen(index + 1)}>
                        {item.title}
                    </AccordionHeader>
                    <AccordionBody className="text-base">
                        {item.content}
                    </AccordionBody>
                </Accordion>
            ))}
        </div>
    );
};

export default Faq;
