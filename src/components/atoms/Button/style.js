import styled, { css } from 'styled-components';


export const StyledButton = styled.button`
    width: 152px;
    height: 56px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;

    background-color: ${props => (props.theme === 'dark' ? '#FFF' : '#E7816B')};
    color: ${props => (props.theme === 'dark' ? '#333136' : '#FFF')};

    /* ${props =>
    props.theme.dark &&
    css`
        background-color: #FFF;
        color: #333136;
    `}

    ${props =>
    props.theme.light &&
    css`
        background-color: #E7816B;
        color: #FFF;
    `} */

    &:hover {
        background-color: #FFAD9B;
        color: #FFF;
    }
`
