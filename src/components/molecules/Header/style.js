import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContaineCabecalho = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 96px;
    width: 100%;
    padding: 0 24px;
`

export const Logo = styled.img`
    width: 202px;
    height: 27px;
`

export const LinkEstilizado = styled(Link)`
    font-size: 14px;
    font-weight: 400;
    color: #333136;
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid #6D6D6E;
    }
`

export const ContainerLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 42px;

    @media (max-width: 620px) { 
        display: none;
    }
`