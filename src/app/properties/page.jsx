import Filter from "../components/Filter/Filter";
import Category from "../components/Filter/Category";
import AllProperties from "./AllProperties";

const PropertyPage = ({
    searchParams: {
        destination,
        bed_room,
        bath_room,
        maximum_guest,
        min_price,
        max_price,
        start_day,
        end_day,
    },
}) => {
    // const {data: properties, isLoading} = useGetAllPropertiesQuery();

    // if (isLoading) return <Loading />;

    return (
        <div className="container">
            <Category />

            <div>
                <Filter
                    destination={destination}
                    bed_room={bed_room}
                    bath_room={bath_room}
                    maximum_guest={maximum_guest}
                    min_price={min_price}
                    max_price={max_price}
                    start_day={start_day}
                    end_day={end_day}
                />
            </div>
            <div>
                <>
                    <AllProperties />
                </>
            </div>
        </div>
    );
};

export default PropertyPage;
