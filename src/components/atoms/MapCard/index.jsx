/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { MapContainerStyled } from "./style";
import { Icon } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";

export default function MapCard({
    latitude,
    longitude,
    office,
}) {

    return (
        <MapContainerStyled 
            center={[latitude, longitude]} 
            zoom={14}>
            
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
                position={[latitude, longitude]}
                icon={
                    new Icon({
                        iconUrl: markerIcon,
                        iconSize:     [35, 50], 
                        iconAnchor:   [19, 48],
                        popupAnchor:  [-3, -60]
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