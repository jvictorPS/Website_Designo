import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const ContainerCard = styled.div`
    width: 100%;
    height: 865px;
    display: flex;
    flex-direction: column;
    background-color: transparent;

    @media (min-width: ${sizes.tablet}) {
        width: 689px;
        height: 736px;
    }
`
export const ContainerImage = styled.div`
    border: none;
    width: 100%;
    height: 320px;
    background-image: url(${props => props.image.mobile});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: ${sizes.tablet}) {
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        background-image: url(${props => props.image.tablet});
    }
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

    @media (min-width: ${sizes.tablet}) {
        height: 416px;
        padding: 68px 58px;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;

        h4 {
            font-size: 40px;
            line-height: 48px;
        }

        p {
            font-size: 16px;
            line-height: 26px;
        }
    }
`