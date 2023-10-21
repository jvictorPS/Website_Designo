import styled from "styled-components";


export const ContainerCard = styled.div`
    width: 100%;
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
        z-index: 4;
        cursor: pointer;
    }

    div {
        width: 100%;
        height: 250px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        border-radius: 15px;
        opacity: 0.6;
        cursor: pointer;

        &:active {
            background-color: #E7816B;
        }
    }
`