import styled from "styled-components";
import { sizes } from "../../styles/ScreenSizes/ScreenSizes";
import phone from "../../assets/home/desktop/image-hero-phone.png"
import circle from "../../assets/home/desktop/bg-pattern-hero-home.svg"

export const ContainerHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;

    @media (min-width: ${sizes.tablet}) {
        margin: 0 40px;
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

    @media (min-width: ${sizes.tablet}) {
        width: 689px;
        border-radius: 15px;
        padding: 0 58px;
        background-size: cover, 640px;
        background-position: center 250px, left center;

        h4 {
            font-size: 48px;
            line-height: 48px;
            margin-top: 60px;
        }

        p {
            font-size: 16px;
            line-height: 26px;
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
    height: 640px;
    width: 1111px;
    }
`

export const MergedRow = styled.div`
    @media (min-width: 1440px) {
    grid-row: span 2;
    }
`