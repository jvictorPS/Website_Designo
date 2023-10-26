import styled from "styled-components";
import oval from '../../../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg'


export const ContainerForm = styled.div`
    width: 100%;
    height: 764px;
    background: #E7816B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 72px 24px;
    gap: 48px;
    background-image: url(${oval});
    background-position: 15% top ;
    background-repeat: no-repeat;
`

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    height: 320px;
    width: 100%;
    background-color: transparent;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 24px;

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

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
`

export const ContainerInput = styled.div`
    width: 100%;
    position: relative;
`

export const ErrorMessage = styled.span`
    color: #FFF;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: 26px;
    position: absolute;
    display: inline-block;
    height: 26px;
    right: 0;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
`


export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    background: #E7816B;
    border: none;
    border-bottom: 1px solid #fff;
    color: #FFF;
    font-size: 15px;
    font-weight: 500;
    line-height: 26px;
    padding-left: 13px;

    &:focus {
        outline: none;
        border-bottom: 3px solid #fff;
    }

    &:hover {
        cursor: pointer;
    }

    &::placeholder {
        color: #FFF;
        font-size: 15px;
        font-weight: 500;
        line-height: 26px;
        opacity: 0.5;
    }
`

export const StyledTextArea = styled.textarea`
    width: 100%;
    height: 75px;
    background: #E7816B;
    border: none;
    border-bottom: 1px solid #fff;
    color: #FFF;
    font-size: 15px;
    font-weight: 500;
    line-height: 26px;
    padding-left: 13px;
    resize: none;

    &:focus {
        outline: none;
        border-bottom: 3px solid #fff;
    }

    &:hover {
        cursor: pointer;
    }

    &::placeholder {
        color: #FFF;
        font-size: 15px;
        font-weight: 500;
        line-height: 26px;
        opacity: 0.5;
    }
`