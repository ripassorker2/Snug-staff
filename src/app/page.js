import Accomodation from "./pages/Home/Accomodation";
import {Banner} from "./pages/Home/Banner";
import FindAccomodation from "./pages/Home/FindAccomodation";
import HomeProperty from "./pages/Home/HomeProperty";
import Subscribe from "./pages/Home/Subscribe";
import WhyChooseUS from "./pages/Home/WhyChose";

const HomePage = () => {
    return (
        <>
            <Banner />
            <HomeProperty />
            <FindAccomodation />
            <Accomodation />
            <Subscribe />
            <WhyChooseUS />
        </>
    );
};

export default HomePage;
