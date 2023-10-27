import styled from "styled-components";
import {Link} from 'react-router-dom'
import { sizes } from "../../../styles/ScreenSizes/ScreenSizes";


export const StyledLink = styled(Link)`
    text-decoration: none;
    width: 327px;
    height: 250px;
    border-radius: 15px;
    background: #000;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    color: #FFF;
    position: relative;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;

        
    h4 {
        font-size: 28px;
        font-weight: 500;
        letter-spacing: 1.4px;
        margin-bottom: 12px;
        z-index: 4;
        cursor: pointer;
    }

    p {
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 5px;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        z-index: 6;
        cursor: pointer;
    }

    div {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        border-radius: 15px;
        opacity: 0.6;
        cursor: pointer;
    }

    @media (min-width: ${sizes.tablet}) {
        width: 689px;
        height: 200px;

        h4 {
            font-size: 40px;
            line-height: 48px;
            letter-spacing: 2px;
        }
    }

    @media (min-width: ${sizes.desktop}) {
        width: 100%;
        height: 100%;

        div {
            &:hover {
                background-color: #E7816B;
            }
        }
    }
`