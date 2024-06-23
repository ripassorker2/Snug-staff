import Card from "@/app/components/Booking/Card";
import propertyIMage from "@/assets/accomodation1.jpg";
// importing all the modules
const ApprovedBooking = () => {
    return (
        <div className="mb-10 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
                status={true}
                title="This is a title"
                image={propertyIMage}
                price={99.99}
                user="John Doe"
            />
            <Card
                status={true}
                title="This is a title"
                image={propertyIMage}
                price={99.99}
                user="John Doe"
            />
            <Card
                status={true}
                title="This is a title"
                image={propertyIMage}
                price={99.99}
                user="John Doe"
            />
            <Card
                status={true}
                title="This is a title"
                image={propertyIMage}
                price={99.99}
                user="John Doe"
            />
            <Card
                status={true}
                title="This is a title"
                image={propertyIMage}
                price={99.99}
                user="John Doe"
            />
        </div>
    );
};

export default ApprovedBooking;
