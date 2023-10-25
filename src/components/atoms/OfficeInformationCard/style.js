import styled from "styled-components";
import oval from '../../../assets/shared/desktop/bg-pattern-two-circles.svg'

export const Containercard = styled.div`
    width: 100%;
    height: 394px;
    background-color: #FDF3F0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 24px;
    line-height: 25px;
    background-image: url(${oval});
    background-repeat: no-repeat;

    h3 {
        color: #E7816B;
        font-size: 32px;
        font-weight: 500;
        line-height: 36px;
    }

    div {
        color: #333136;
        font-size: 15px;
        font-weight: 700;
    }

    p {
        font-weight: 400;
    }
`