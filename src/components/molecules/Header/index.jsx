import  logo from '../../../assets/logo-dark.png'
import { ContaineCabecalho, ContainerLinks, LinkEstilizado, Logo } from './style'


export default function Header() {

    return (
        <ContaineCabecalho>
            <LinkEstilizado to='/'><Logo src={logo} alt="Logo do site" /></LinkEstilizado>

            <ContainerLinks>
              <LinkEstilizado to='/About'>OUR COMPANY</LinkEstilizado>
              <LinkEstilizado to='/Locations'>LOCATIONS</LinkEstilizado>
              <LinkEstilizado to='/Contact'>CONTACT</LinkEstilizado>
            </ContainerLinks>

        </ContaineCabecalho>

    )
}