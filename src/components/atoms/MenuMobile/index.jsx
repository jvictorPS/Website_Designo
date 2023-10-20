/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { LinkEstilizado } from './style'


import { ContainerMenuMobile } from './style';

export default function MenuMobile({ menuIsVisible , setMenuIsVisible }) {

    return (
        <ContainerMenuMobile isVisible={menuIsVisible}>
            <nav>
                <LinkEstilizado onClick={() => setMenuIsVisible(false)} to='/About'>OUR COMPANY</LinkEstilizado>
                <LinkEstilizado onClick={() => setMenuIsVisible(false)} to='/Locations'>LOCATIONS</LinkEstilizado>
                <LinkEstilizado onClick={() => setMenuIsVisible(false)} to='/Contact'>CONTACT</LinkEstilizado>
            </nav>
        </ContainerMenuMobile>
    )
}