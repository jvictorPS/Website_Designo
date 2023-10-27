import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const ContainerAdvantagesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    padding: 0 24px;

    @media (min-width: ${sizes.tablet}) {
        width: 689px;
    }
`

export const CardAdvantage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    color: #333136;

    @media (min-width: ${sizes.tablet}) {
        flex-direction: row;
        gap: 48px;
        justify-content: space-between;
    }
`

export const Text = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;

    h4 {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 5px;
    }

    p {
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
    }

    @media (min-width: ${sizes.tablet}) {
        gap: 16px;
        align-items: flex-start;

        h4 {
            text-align: left;
        }

        p {
            text-align: left;
        }
    }
`