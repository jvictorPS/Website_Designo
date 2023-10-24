import styled from "styled-components";

import imageMobile from "../../../assets/about/mobile/image-about-hero.jpg"
import imageTablet from "../../../assets/about/tablet/image-about-hero.jpg"
import imageDesktop from "../../../assets/about/desktop/image-about-hero.jpg"
import oval from "../../../assets/about/mobile/bg-pattern-hero-about-mobile.svg"


export const ContainerCard = styled.div`
    width: 100%;
    height: 715px;
    display: flex;
    flex-direction: column;
    background-color: transparent;
`
export const ContainerImage = styled.div`
    border: none;
    width: 100%;
    height: 320px;
    background-image: url(${imageMobile});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
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
`