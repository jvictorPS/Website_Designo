import styled from "styled-components";
import { sizes } from "../../styles/ScreenSizes/ScreenSizes";


export const ContainerCards = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (min-width: ${sizes.tablet}) {
        gap: 120px;
        align-items: center;
        margin: 0 40px;
    }

    @media (min-width: ${sizes.desktop}) {
        gap: 40px;
        padding-bottom: 400px;
    }
`