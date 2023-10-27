import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const Organizer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 24px;

    @media (min-width: ${sizes.tablet}) {
        width: 689px;
        height: 424px;    
    }
`