import styled from "styled-components";


export const ContainerCard = styled.div`
    width: 100%;
    height: 478px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    margin: 10px;
`
export const ContainerImage = styled.img`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border: none;
    width: 100%;
    height: 320px;
    object-fit: cover;
`

export const ContainerDescription = styled.div`
    background-color: #FDF3F0;
    width: 100%;
    height: 158px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px 32px;
    gap: 16px;

    h4 {
        color: #E7816B;
        font-size: 20px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: 5px;
    }

    p {
        color: #333136;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
    }
`

