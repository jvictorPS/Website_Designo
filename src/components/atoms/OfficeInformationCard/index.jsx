/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { Containercard } from "./style";


export default function OfficeInformationCard({
    countrie,
    officeName,
    adress,
    city,
    phone,
    email
}) {
    return (
        <Containercard>
            <h3>{countrie}</h3>

            <div>
                <h4>{officeName}</h4>
                <p>{adress}</p>
                <p>{city}</p>
            </div>
            
            <div>
                <h4>Contact</h4>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </Containercard>
    )
}