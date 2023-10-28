import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";
import BackIcon from "../../../assets/shared/desktop/bg-pattern-leaf.svg"


export const Organizer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 96px;
    align-items: center;
    padding-bottom: 310px;


    @media (min-width: ${sizes.tablet}) {
        padding: 0 40px 384px 40px;
        gap: 120px;
    }

    @media (min-width: ${sizes.desktop}) {
        padding: 0 40px 400px 40px;
        gap: 160px;
        background-image: url(${BackIcon});
        background-repeat: no-repeat;
        background-position: left 200px;
    }
`