import styled from "styled-components";

import circulo from "../../../assets/contact/desktop/bg-pattern-hero-desktop.svg"

export const ContainerAdvantagesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
`

export const CardAdvantage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    color: #333136;
`

export const Text = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;

    h4 {
        font-size: 20px;
        font-weight: 500;
    }

    p {
        text-align: center;
        font-size: 16px;
        font-weight: 400;
    }
`

export const Image = styled.img`
    width: 188px;
`

export const Circle = styled.div`
    width: 202px;
    height: 202px;
    background-image: url(${circulo});
    background-size: cover;
    background-position: center;
`