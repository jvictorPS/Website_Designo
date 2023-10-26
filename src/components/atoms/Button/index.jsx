/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { StyledButton } from "./style";


export default function Button({text , theme, type}) {
    return (
            <StyledButton type={type} theme={theme}>{text}</StyledButton>
    )
}