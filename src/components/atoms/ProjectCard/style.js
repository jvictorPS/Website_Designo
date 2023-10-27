import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const ContainerCard = styled.div`
    width: 327px;
    height: 478px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color: transparent;

    @media (min-width: ${sizes.tablet}) {
        flex-direction: row;
        width: 689px;
        height: 310px;
    }

    @media (min-width: ${sizes.desktop}) {
        flex-direction: column;
        width: 350px;
        height: 478px;
    }
`
export const ContainerImage = styled.img`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border: none;
    width: 100%;
    height: 320px;
    object-fit: cover;

    @media (min-width: ${sizes.tablet}) {
        border-bottom-left-radius: 15px;
        border-top-right-radius: 0;
        height: 100%;
    }

    @media (min-width: ${sizes.desktop}) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        height: 100%;
    }
`

export const ContainerDescription = styled.div`
    background-color: #FDF3F0;
    width: 100%;
    height: 158px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px 32px;
    gap: 16px;

    h4 {
        color: #E7816B;
        font-size: 20px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: 5px;
    }

    p {
        color: #333136;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
    }

    @media (min-width: ${sizes.tablet}) {
        border-top-right-radius: 15px;
        border-bottom-left-radius: 0;
        height: 100%;
    }

    @media (min-width: ${sizes.desktop}) {
        border-top-right-radius: 0;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        height: 100%;
    }
`

