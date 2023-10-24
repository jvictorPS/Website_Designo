import styled from "styled-components";

import imageMobile from "../../../assets/about/mobile/image-about-hero.jpg"
import imageTablet from "../../../assets/about/tablet/image-about-hero.jpg"
import imageDesktop from "../../../assets/about/desktop/image-about-hero.jpg"
import oval from "../../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"


export const ContainerCard = styled.div`
    width: 100%;
    height: 865px;
    display: flex;
    flex-direction: column;
    background-color: transparent;
`
export const ContainerImage = styled.div`
    border: none;
    width: 100%;
    height: 320px;
    background-image: url(${props => props.image.mobile});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ContainerDescription = styled.div`
    background-color: #FDF3F0;
    color: #FFF;
    width: 100%;
    height: 545px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 24px;
    gap: 24px;
    
    h4 {
        color: #E7816B;
        font-size: 32px;
        font-weight: 500;
        line-height: 36px;
    }

    p {
        color: #333136;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
    }
`