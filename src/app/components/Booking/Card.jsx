// importing all the modules
import Image from "next/image";

const Card = ({status, title, image, price, user}) => {
    return (
        <div className="flex flex-col justify-between  px-4 py-10 rounded shadow-lg hover:border-green-500 hover:border-b-4 hover:duration-200 ">
            {/* Image Part */}
            <div id="image" className=" relative">
                <Image src={image} alt={title} className="w-full h-auto" />
                <p
                    className={`mt-2 ${
                        status
                            ? " absolute text-white bg-green-400 text-sm rounded-full  inline px-2 py-1 top-0 right-0 mr-2"
                            : "text-red-600"
                    }`}>
                    {status ? "Approved" : "Pending"}
                </p>
            </div>

            {/* Details Part */}
            <div className="mt-4">
                <div className="flex"></div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-600">Price: ${price}</p>
                <p className="text-gray-600">Guest Name: {user}</p>
            </div>
        </div>
    );
};

export default Card;
