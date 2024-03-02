import Accomodation from "./pages/Home/Accomodation";
import {Banner} from "./pages/Home/Banner";
import WhyChooseUS from "./pages/Home/WhyChose";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Accomodation />
            <WhyChooseUS />
        </div>
    );
};

export default HomePage;
