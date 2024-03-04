import Accomodation from "./pages/Home/Accomodation";
import {Banner} from "./pages/Home/Banner";
import FindAccomodation from "./pages/Home/FindAccomodation";
import Subscribe from "./pages/Home/Subscribe";
import WhyChooseUS from "./pages/Home/WhyChose";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <FindAccomodation />
            <Accomodation />
            <Subscribe />
            <WhyChooseUS />
        </div>
    );
};

export default HomePage;
