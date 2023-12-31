import { Link } from "react-router-dom";
import styled from "styled-components";
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 96px;
    width: 100%;
    padding: 0 24px;
    background-color: #fff;

    @media (min-width: ${sizes.tablet}) {
        height: 155px;
        padding: 0 42px;
        /* width: 689px;
        margin: 0 auto; */
    }
/* 
    @media (min-width: ${sizes.desktop}) {
        width: 1111px;
        margin: 0 auto;
    } */
`

export const Logo = styled.img`
    width: 202px;
    height: 27px;
`

export const StyledLink = styled(Link)`
    font-size: 14px;
    font-weight: 400;
    color: #333136;
    text-decoration: none;
/* 
    &:hover {
        border-bottom: 1px solid #6D6D6E;
    } */
`

export const ContainerLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 42px;

    @media (max-width: 620px) { 
        display: none;
    }
`

export const ContainerMenuIcon = styled.section`
    display: none;

    @media (max-width: 620px) { 
        display: initial;
    }
`