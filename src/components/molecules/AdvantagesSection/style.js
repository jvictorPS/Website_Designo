import styled from "styled-components";


export const ContainerAdvantagesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    padding: 0 24px;
`

export const CardAdvantage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    color: #333136;
`

export const Text = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;

    h4 {
        font-size: 20px;
        font-weight: 500;
    }

    p {
        text-align: center;
        font-size: 16px;
        font-weight: 400;
    }
`