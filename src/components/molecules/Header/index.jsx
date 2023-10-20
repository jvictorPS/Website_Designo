import  logo from '../../../assets/logo-dark.png'
import MenuMobile from '../../atoms/MenuMobile'
import { useState } from "react";
import { CgMenu } from 'react-icons/cg'

import { 
  ContainerCabecalho, 
  ContainerLinks, 
  LinkEstilizado, 
  Logo,
  ContainerIconeMenu
} from './style'


export default function Header() {

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function menuMobile() {
    setMenuIsVisible(!menuIsVisible)
    console.log('clicou')
  }

    return (
        <ContainerCabecalho>
            <LinkEstilizado onClick={() => setMenuIsVisible(false)} to='/'><Logo src={logo} alt="Logo do site" /></LinkEstilizado>

            <ContainerLinks>
              <LinkEstilizado to='/About'>OUR COMPANY</LinkEstilizado>
              <LinkEstilizado to='/Locations'>LOCATIONS</LinkEstilizado>
              <LinkEstilizado to='/Contact'>CONTACT</LinkEstilizado>
            </ContainerLinks>

            <ContainerIconeMenu>
              <div onClick={menuMobile}><CgMenu size={30} /></div>
            </ContainerIconeMenu>

            {/* {menuIsVisible ? (
              
              ): null} */}

              <MenuMobile 
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
              />
        </ContainerCabecalho>

    )
}