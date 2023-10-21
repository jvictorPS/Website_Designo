/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { LinkEstilizado } from './style'
import { useEffect, useRef } from 'react'



import { ContainerMenuMobile } from './style'

export default function MenuMobile({ menuIsVisible , setMenuIsVisible }) {

    const menuRef = useRef()

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuIsVisible(!menuIsVisible)
            }
        }

        document.body.style.overflow = menuIsVisible ? 'hidden' : 'auto'

        if (menuIsVisible) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuIsVisible])

    return (
        <ContainerMenuMobile isVisible={menuIsVisible} ref={menuRef}>
            <nav>
                <LinkEstilizado onClick={() => setMenuIsVisible(false)} to='/About'>OUR COMPANY</LinkEstilizado>
                <LinkEstilizado onClick={() => setMenuIsVisible(false)} to='/Locations'>LOCATIONS</LinkEstilizado>
                <LinkEstilizado onClick={() => setMenuIsVisible(false)} to='/Contact'>CONTACT</LinkEstilizado>
            </nav>
        </ContainerMenuMobile>
    )
}