import L from "leaflet";
import MarkerIcon from "../../../../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../../../../node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

const GoogleMap = ({lat = 0.0, long = 0.0, location = ""}) => {
    return (
        <div className="relative">
            <h2 className="text-xl ">Where we place.</h2>
            <MapContainer
                className="md:h-[500px] h-[300px] w-full z-[5] rounded-lg mt-4 "
                center={[lat, long]}
                zoom={10}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                    icon={
                        new L.Icon({
                            iconUrl: MarkerIcon.src,
                            iconRetinaUrl: MarkerIcon.src,
                            iconSize: [25, 41],
                            iconAnchor: [12.5, 41],
                            popupAnchor: [0, -41],
                            shadowUrl: MarkerShadow.src,
                            shadowSize: [41, 41],
                        })
                    }
                    position={[lat, long]}>
                    <Popup className="">
                        <div className="text-center text-xs">
                            <h3>{location}</h3>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
            <div className="bg-white border-b h-4 text-center w-[240px] text-xs absolute bottom-0 z-10 right-0 rounded-r-lg">
                Powered by Snugstaff
            </div>
        </div>
    );
};

export default GoogleMap;
