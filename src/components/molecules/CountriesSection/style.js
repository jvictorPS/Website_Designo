import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const ContainerCountries = styled.section`
    display: flex;
    flex-direction: column;
    gap: 48px;

    @media (min-width: ${sizes.desktop}) {
        flex-direction: row;
        width: 1111px;
        justify-content: space-around;
    }
`

export const Countrie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CountrieName = styled.h4`
    font-size: 20px;
    font-weight: 500;
    margin: 48px 0 32px 0;
`