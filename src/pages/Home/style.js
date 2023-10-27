import styled from "styled-components";
import { sizes } from "../../styles/ScreenSizes/ScreenSizes";
import phone from "../../assets/home/desktop/image-hero-phone.png"
import circle from "../../assets/home/desktop/bg-pattern-hero-home.svg"
import ovalHome from "../../assets/shared/desktop/bg-pattern-leaf.svg"

export const ContainerHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;
    padding-bottom: 311px;


    @media (min-width: ${sizes.tablet}) {
        margin: 0 40px;
        padding-bottom: 400px;
    }

    @media (min-width: ${sizes.desktop}) {
        margin: 0;
        background-image:
            url(${ovalHome}),
            url(${ovalHome});
        background-size: auto, auto;
        background-repeat: no-repeat;
        background-position: left 340px, right 1640px;
        padding-bottom: 400px;
    }
`

export const SummaryAboutSection = styled.section`
    background: #E7816B;
    width: 100%;
    height: 843px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    padding: 80px 24px;
    background-image: 
        url(${phone}),
        url(${circle});
    background-size: cover, 640px;

    background-position: center 340px, left center;
    background-repeat: no-repeat;
    gap: 24px;

    h4 {
        font-size: 32px;
        font-weight: 500;
        line-height: 36px;
        text-align: center;
    }

    p {
        text-align: center;
        font-size: 15px;
        font-weight: 300;
        line-height: 25px;
    }

    @media (min-width: ${sizes.tablet}) {
        width: 689px;
        border-radius: 15px;
        padding: 60px 58px;
        background-size: auto, 640px;
        background-position: center 290px, left center;

        h4 {
            font-size: 48px;
            line-height: 48px;
        }

        p {
            font-size: 16px;
            line-height: 26px;
        }
    }

    @media (min-width: ${sizes.desktop}) {
        width: 1111px;
        height: 640px;
        background-size: auto, 640px;
        background-position: 555px -30px, right top;
        align-items: flex-start;
        padding: 145px 95px;
        gap: 40px;

        h4 {
            width: 540px;
            height: 165px;
            text-align: start;
        }
    
        p {
            width: 445px;
            height: 75px;
            text-align: start;
        }
    }
    
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 24px;

    @media (min-width: ${sizes.tablet}) {
        width: 689px;
        height: 648px;
    }

    @media (min-width: ${sizes.desktop}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    width: 1111px;
    height: 640px;
    }
`

export const MergedRow = styled.div`
    @media (min-width: 1440px) {
    grid-row: span 2;
    }
`