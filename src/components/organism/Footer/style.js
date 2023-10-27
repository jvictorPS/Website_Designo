import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundMobile from "../../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";
import { GrFacebook } from 'react-icons/gr'
import { BsYoutube } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'


export const FacebookIcon = styled(GrFacebook)`
    cursor: pointer;
    color: #E7816B;

    &:hover {
        color: #FFAD9B;
    }
`

export const YoutubeIcon = styled(BsYoutube)`
    cursor: pointer;
    color: #E7816B;

    &:hover {
        color: #FFAD9B;
    }
`

export const TwitterIcon = styled(BsTwitter)`
    cursor: pointer;
    color: #E7816B;

    &:hover {
        color: #FFAD9B;
    }
`

export const PinterestIcon = styled(BsPinterest)`
    cursor: pointer;
    color: #E7816B;

    &:hover {
        color: #FFAD9B;
    }
`

export const InstagramIcon = styled(BsInstagram)`
    cursor: pointer;
    color: #E7816B;

    &:hover {
        color: #FFAD9B;
    }
`

export const ContainerFooter = styled.footer`
    width: 100%;
    height: ${props => (props.notContact ? '626px;' : '815px')};
    background: #1D1C1E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 64px 24px;
    position: relative;

    @media (min-width: ${sizes.tablet}) {
        padding: 60px 20px;
        height: ${props => (props.notContact ? '337px' : '423px')};
    }

    @media (min-width: ${sizes.desktop}) {
        padding: 80px 40px;
        height: ${props => (props.notContact ? '321px' : '393px')};
        margin-top: 0;
    }
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
    left: 50%;
    transform: translateX(-50%);

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

    @media (min-width: ${sizes.tablet}) {
        width: 92%;
        height: 350px;
        top: -265px;
        padding: 0 58px;


        h4 {
            font-size: 40px;
            line-height: 40px;
            width: 335px;
            height: 98px;
        }

        p {
            font-size: 16px;
            line-height: 26px;
            width: 573px;
        }
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
    width: 100%;
    
    @media (min-width: ${sizes.tablet}) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        gap: 50px;
    }
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

    @media (min-width: ${sizes.tablet}) {
        flex-direction: row;
        gap: 42px;
    }
`

export const ContainsLocation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (min-width: ${sizes.tablet}) {
        flex-direction: row;
    }

    @media (min-width: ${sizes.desktop}) {
        gap: 150px;
    }
`

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    font-size: 16px;
    opacity: 0.5;
    font-weight: 200;

    @media (min-width: ${sizes.tablet}) {
        align-items: flex-start;
    }
`

export const Title = styled.h4`
    font-weight: 600;
`

export const ContainsSocialMedia = styled.div`
    display: flex;
    gap: 15px;
`

export const ContainerLogoLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 65px;
    margin-bottom: 40px;
    
    
    @media (min-width: ${sizes.tablet}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 72px;
    }
`

export const Line = styled.hr`
    width: 100%;
    opacity: 0.1;
    position: absolute;
    top: 60px;

    @media (min-width: ${sizes.tablet}) {
        top: 60px;
    }

    @media (min-width: ${sizes.desktop}) {
        top: 60px;
        left: 10
    }
`
export const Container = styled.div`
    position: relative;
    width: 90%;

    @media (min-width: ${sizes.tablet}) {
        width: 690px;
    }

    @media (min-width: ${sizes.desktop}) {
        width: 1111px
    }
`