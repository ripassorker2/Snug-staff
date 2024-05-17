import Accomodation from "./pages/Home/Accomodation";
import FindAccomodation from "./pages/Home/FindAccomodation";
import HomeProperty from "./pages/Home/HomeProperty";
import NewBanner from "./pages/Home/NewBanner";
import Subscribe from "./pages/Home/Subscribe";
import WhyChooseUS from "./pages/Home/WhyChose";

const HomePage = () => {
    return (
        <>
            {/* <Banner /> */}
            <NewBanner />
            <HomeProperty />
            <FindAccomodation />
            <Accomodation />
            <Subscribe />
            <WhyChooseUS />
        </>
    );
};

export default HomePage;
