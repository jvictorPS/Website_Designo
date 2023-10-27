import styled from "styled-components";

import imageMobile from "../../../assets/about/mobile/image-about-hero.jpg"
import imageTablet from "../../../assets/about/tablet/image-about-hero.jpg"
import imageDesktop from "../../../assets/about/desktop/image-about-hero.jpg"
import oval from "../../../assets/about/mobile/bg-pattern-hero-about-mobile.svg"
import BigOval from "../../../assets//about/desktop/bg-pattern-hero-about-desktop.svg"
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const ContainerCard = styled.div`
    width: 100%;
    height: 715px;
    display: flex;
    flex-direction: column;
    background-color: transparent;

    @media (min-width: ${sizes.tablet}) {
        width: 689px;

    }
`

export const ContainerImage = styled.div`
    border: none;
    width: 100%;
    height: 320px;
    background-image: url(${imageMobile});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: ${sizes.tablet}) {
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        background-image: url(${imageTablet});

    }
`

export const ContainerDescription = styled.div`
    background-color: #E7816B;
    color: #FFF;
    width: 100%;
    height: 395px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 24px;
    gap: 24px;
    background-image: url(${oval});
    background-position: center top;
    background-repeat: no-repeat;

    h4 {
        font-size: 32px;
        font-weight: 500;
        line-height: 36px;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
    }

    @media (min-width: ${sizes.tablet}) {
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        background-image: url(${BigOval});
        background-position: -110px -400px;
        gap: 32px;
        padding: 64px 58px;

        h4 {
            font-size: 48px;
            line-height: 48px;
        }

        p {
            font-size: 16px;
            line-height: 26px;
        }
    }
`