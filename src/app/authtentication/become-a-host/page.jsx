import {Banner} from "@/app/pages/Home/Banner";
import Subscribe from "@/app/pages/Home/Subscribe";
import BecomeHost from "@/app/pages/Host/BecomeHost";
import Benifit from "@/app/pages/Host/Benifit";
import Faq from "@/app/pages/Host/Faq";
import Pricing from "@/app/pages/Host/Pricing";
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
