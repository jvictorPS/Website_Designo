/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import MapCard from "../../atoms/MapCard";
import OfficeInformationCard from "../../atoms/OfficeInformationCard";
import { Containercards } from "./style";


export default function LocationCard({
    latitude,
    longitude,
    officeName,
    countrie,
    adress,
    city,
    phone,
    email
}) {
    return (
        <Containercards>
            {/* <MapCard 
                latitude={latitude}
                longitude={longitude}
                office={officeName}
            /> */}

            <OfficeInformationCard 
                countrie={countrie}
                officeName={officeName}
                adress={adress}
                city={city}
                phone={phone}
                email={email}
            />
        </Containercards>
    )
}