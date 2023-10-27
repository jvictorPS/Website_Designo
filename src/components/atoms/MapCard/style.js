import { MapContainer } from "react-leaflet";
import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const MapContainerStyled = styled(MapContainer)`
    width: 100%;
    height: 320px;
    z-index: 1;

    @media (min-width: ${sizes.tablet}) {
        gap: 31px;
        width: 100%;
        border-radius: 15px;
    }
`