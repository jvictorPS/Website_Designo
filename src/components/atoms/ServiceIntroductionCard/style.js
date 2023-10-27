import styled from "styled-components";
import image from '../../../assets/app-design/desktop/bg-pattern-intro-app.svg'
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    height: 320px;
    width: 100%;
    background-color: #E7816B;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 24px;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: 876px;
    background-position: right top;
    padding: 0 24px;

    p {
        line-height: 25px;
        font-size: 15px;
        font-weight: 400;
    }

    h4 {
        font-size: 32px;
        font-weight: 500;
        line-height: 36px;
    }

    @media (min-width: ${sizes.tablet}) {
        border-radius: 15px;
        background-position: center center;
        padding: 0 100px;

        p {
            line-height: 26px;
            font-size: 16px;
        }

        h4 {
            font-size: 48px;
            line-height: 48px;
        }
    }
`