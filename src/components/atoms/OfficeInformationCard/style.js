import styled from "styled-components";
import oval from '../../../assets/shared/desktop/bg-pattern-two-circles.svg'
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";

export const Containercard = styled.div`
    width: 100%;
    height: 394px;
    background-color: #FDF3F0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 24px;
    line-height: 25px;
    background-image: url(${oval});
    background-repeat: no-repeat;

    h3 {
        color: #E7816B;
        font-size: 32px;
        font-weight: 500;
        line-height: 36px;
    }

    div {
        color: #333136;
        font-size: 15px;
        font-weight: 700;
    }

    p {
        font-weight: 400;
    }

    @media (min-width: ${sizes.tablet}) {
        border-radius: 15px;
        align-items: flex-start;
        padding: 88px 100px 88px 75px;
        height: 326px;

        h3 {
            font-size: 40px;
            line-height: 48px;
        }

        div {
            font-size: 16px;
        }
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: ${sizes.tablet}) {
        display: flex;
        flex-direction: row;
        gap: 80px;
        text-align: start;
    }
`