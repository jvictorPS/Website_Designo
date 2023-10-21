import styled, {css} from "styled-components"
import { Link } from "react-router-dom"


export const ContainerMenuMobile = styled.section`
    position: absolute;
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

    nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    
}

${({ isVisible }) => isVisible && css`
opacity: 1;
pointer-events: auto;
transform: translateY(96px);

    nav {
        transform: scale(1);
    }`
}
`

export const BlockForMenu = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);

    background: rgb(29,28,30);
    z-index: 5;

    top: 96px;
    right: 0;
    opacity: 0.5
`

export const StyledLink = styled(Link)`
    font-size: 24px;
    font-weight: 400;
    color: #FFF;
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid #6D6D6E;
    }
`