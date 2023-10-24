/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { Organizer } from "./style";


export default function PageOrganizer({children}) {
    return (
        <Organizer>
            {children}
        </Organizer>
    )
}