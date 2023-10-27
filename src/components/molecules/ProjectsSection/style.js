import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const ContainerProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 0 24px;

    @media (min-width: ${sizes.tablet}) {
        margin: 0;
    }

    @media (min-width: ${sizes.desktop}) {
        flex-wrap: wrap;
        flex-direction: row;
        width: 1111px;
        gap: 30px;
        justify-content: flex-start;
    }
`