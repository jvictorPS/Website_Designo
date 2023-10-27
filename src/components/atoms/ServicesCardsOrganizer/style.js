import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const Organizer = styled.section`
    display: grid;
    flex-direction: column;
    gap: 24px;
    margin: 0 24px;

    @media (min-width: ${sizes.tablet}) {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
        width: 689px;
        height: 424px;
        row-gap: 24px;
        margin: 0;
    }

    @media (min-width: ${sizes.desktop}) {
        width: 1111px;
        height: 308px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        column-gap: 30px;
    }
`