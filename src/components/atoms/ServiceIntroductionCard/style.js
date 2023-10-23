import styled from "styled-components";
import image from '../../../assets/app-design/desktop/bg-pattern-intro-app.svg'

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    height: 320px;
    width: 100%;
    background-color: #E7816B;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 24px;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: 876px;
    background-position: right top;

    p {
        line-height: 25px;
        font-size: 15px;
        font-weight: 400;
    }

    h4 {
        font-size: 32px;
        font-weight: 500;
        line-height: 36px;
    }
`