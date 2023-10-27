import styled from "styled-components";
import { sizes } from "../../styles/ScreenSizes/ScreenSizes";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${sizes.tablet}) {
        gap: 120px;
    }
`