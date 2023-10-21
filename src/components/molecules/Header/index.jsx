import  logo from '../../../assets/logo-dark.png'
import MenuMobile from '../../atoms/MenuMobile'
import { useState } from "react";
import { CgMenu } from 'react-icons/cg'
import { IoCloseSharp } from 'react-icons/io5'

import { 
  ContainerHeader, 
  ContainerLinks, 
  StyledLink, 
  Logo,
  ContainerMenuIcon
} from './style'
import { BlockForMenu } from '../../atoms/MenuMobile/style';
import { Link } from 'react-router-dom';


export default function Header() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  function menuMobile() {
    setMenuIsVisible(!menuIsVisible)
  }

    return (
        <ContainerHeader>
            <Link onClick={() => setMenuIsVisible(false)} to='/'><Logo src={logo} alt="Logo do site" /></Link>

            <ContainerLinks>
              <StyledLink to='/About'>OUR COMPANY</StyledLink>
              <StyledLink to='/Locations'>LOCATIONS</StyledLink>
              <StyledLink to='/Contact'>CONTACT</StyledLink>
            </ContainerLinks>

            <ContainerMenuIcon>
              {!menuIsVisible ?
                <div onClick={menuMobile}><CgMenu size={30} /></div>
              :
                <div onClick={menuMobile}><IoCloseSharp size={30} /></div>
              }
            </ContainerMenuIcon>

            {menuIsVisible ? (
                <BlockForMenu />
              ): null}

              <MenuMobile 
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
              />
        </ContainerHeader>

    )
}