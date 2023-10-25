/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { MapContainerStyled } from "./style";
import { Icon } from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

export default function MapCard({
    latitude,
    longitude,
    office,
}) {

    return (
        <MapContainerStyled center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
                position={[latitude, longitude]}
                icon={
                    new Icon({
                        iconRetinaUrl: markerIcon2x,
                        iconUrl: markerIcon,
                        shadowUrl: markerShadow,
                    })
                }
                >
                    <Popup>
                        {office}
                    </Popup>
            </Marker>
        </MapContainerStyled>
    )
}