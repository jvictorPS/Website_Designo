import LogoDark  from "../../../assets/logo-light.png"
import facebook from "../../../assets/icon-facebook.svg"
import youtube from "../../../assets/icon-youtube.svg"
import twitter from "../../../assets/icon-twitter.svg"
import pinterest from "../../../assets/icon-pinterest.svg"
import instagram from "../../../assets/icon-instagram.svg"

import { 
    ContainerContactInformation, 
    ContainerFooter, 
    ContainerLinks, 
    Logo,
    StyledLink,
    ContainsLocation,
    Title,
    ContainsSocialMedia,
    Line,
    ContainerContactInvitation
} from "./style";


import Button from "../../atoms/Button"
import ScrollToTop from "../../../utils/ScrollToTop"
import { Link } from "react-router-dom"

export default function Footer() {

    return (

        <ContainerFooter>

            <ContainerContactInvitation>
                <h4>Let’s talk about your project</h4>
                <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                <Link onClick={ScrollToTop} to='/Contact'>
                    <Button
                        text={'Get in touch'}
                        theme={'dark'}
                    />
                
                </Link>
            </ContainerContactInvitation>

            <Logo src={LogoDark} alt="Logo do site"></Logo>

            <Line />

            <ContainerContactInformation>
                <ContainerLinks>
                    <StyledLink onClick={ScrollToTop} to='/About'>OUR COMPANY</StyledLink>
                    <StyledLink onClick={ScrollToTop} to='/Locations'>LOCATIONS</StyledLink>
                    <StyledLink onClick={ScrollToTop} to='/Contact'>CONTACT</StyledLink>
                </ContainerLinks>

                <ContainsLocation>
                    <Title>Designo Central Office</Title>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </ContainsLocation>

                <ContainsLocation>
                    <Title>Contact Us (Central Office)</Title>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </ContainsLocation>

                <ContainsSocialMedia>
                    <img src={facebook} alt="icone facebook" />
                    <img src={youtube} alt="icone youtube" />
                    <img src={twitter} alt="icone twitter" />
                    <img src={pinterest} alt="icone pinterest" />
                    <img src={instagram} alt="icone instagram" />
                </ContainsSocialMedia>

            </ContainerContactInformation>
        </ContainerFooter>
    )
}