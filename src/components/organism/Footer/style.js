import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundMobile from "../../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"


export const ContainerFooter = styled.footer`
    width: 100%;
    height: 815px;
    background: #1D1C1E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 64px 24px;
    position: relative;
`

export const ContainerContactInvitation = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 379px;
    background: #E7816B;
    border-radius: 15px;
    position: absolute;
    top: -190px;
    background-image: url(${BackgroundMobile});
    background-size: 270%;
    background-position: 80% -5%;
    background-repeat: no-repeat;
    color: #FFF;
    padding: 0 24px;

    h4 {
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        line-height: 36px;
    }

    p {
        text-align: center;
        margin-top: 15px;
        margin-bottom: 32px;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
    }
`

export const Logo = styled.img`
    width: 202px;
    height: 27px;
`

export const ContainerContactInformation = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

export const StyledLink = styled(Link)`
    font-size: 14px;
    font-weight: 400;
    color: #FFF;
    text-decoration: none;
`

export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`

export const ContainsLocation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    font-size: 16px;
    opacity: 0.5;
    font-weight: 200;
`

export const Title = styled.h4`
    font-weight: 600;
`

export const ContainsSocialMedia = styled.div`
    display: flex;
    gap: 20px;
`

export const Line = styled.hr`
    width: 100%;
    margin: 32px 0;
    opacity: 0.1
`