import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const Containercards = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${sizes.tablet}) {
        gap: 31px;
        width: 100%;
    }
`