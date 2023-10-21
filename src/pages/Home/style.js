import styled from "styled-components";

import phone from "../../assets/home/desktop/image-hero-phone.png"
import circle from "../../assets/home/desktop/bg-pattern-hero-home.svg"

export const ContainerHome = styled.section`
    display: flex;
    flex-direction: column;
    gap: 120px;
`

export const ContainerCardsService = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
`

export const SummaryAboutSection = styled.section`
    background: #E7816B;
    width: 100%;
    height: 843px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    padding: 0 24px;
    background-image: 
        url(${phone}),
        url(${circle});
    background-size: cover, 640px;

    background-position: center 340px, left center;
    background-repeat: no-repeat;

    h4 {
        font-size: 32px;
        font-weight: 500;
        line-height: 36px;
        text-align: center;
        margin-top: 80px;
    }

    p {
        text-align: center;
        font-size: 15px;
        font-weight: 300;
        line-height: 25px;
        margin: 25px 0;
    }
`