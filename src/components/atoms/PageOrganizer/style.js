import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const Organizer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 96px;
    align-items: center;

    @media (min-width: ${sizes.tablet}) {
        padding: 0 40px;
        gap: 120px;
    }

    @media (min-width: ${sizes.tablet}) {
        padding: 0 40px 400px 40px;
        gap: 160px;
    }
`