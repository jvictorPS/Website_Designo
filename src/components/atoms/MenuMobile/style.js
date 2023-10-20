import styled, {css} from "styled-components";
import { Link } from "react-router-dom";


export const ContainerMenuMobile = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 235px;
    top: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(17, 18, 17, 0.95);
    background: #1D1C1E;

    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);

    transition: .5s;

    nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
    
}


${({ isVisible }) => isVisible && css`
opacity: 1;
pointer-events: auto;
transform: translateY(96px);

nav {
    transform: scale(1);
}
`}

`

export const LinkEstilizado = styled(Link)`
    font-size: 24px;
    font-weight: 400;
    color: #FFF;
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid #6D6D6E;
    }
`