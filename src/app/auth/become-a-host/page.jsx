import {Banner} from "@/app/pages/Home/Banner";
import Subscribe from "@/app/pages/Home/Subscribe";
import BecomeHost from "@/app/pages/BecomeHost/BecomeHost";
import Benifit from "@/app/pages/BecomeHost/Benifit";
import Faq from "@/app/pages/BecomeHost/Faq";
import Pricing from "@/app/pages/BecomeHost/Pricing";
import React from "react";

const HostRegister = () => {
    return (
        <>
            <Banner />
            <Benifit />
            <Pricing />
            <BecomeHost />
            <Subscribe />
            <Faq />
        </>
    );
};

export default HostRegister;
