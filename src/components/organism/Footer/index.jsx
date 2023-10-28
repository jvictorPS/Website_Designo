/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import LogoDark  from "../../../assets/logo-light.png"
import Button from "../../atoms/Button"
import ScrollToTop from "../../../utils/ScrollToTop"
import { Link } from "react-router-dom"

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
    ContainerContactInvitation,
    ContainerLogoLinks,
    Location,
    Container,
    FacebookIcon,
    YoutubeIcon,
    TwitterIcon,
    PinterestIcon,
    InstagramIcon
} from "./style";



export default function Footer({notContact}) {

    return (

        <ContainerFooter
            notContact={notContact}
        >

            {!notContact ? 
                <ContainerContactInvitation>
                    <div>
                        <h4>Let’s talk about your project</h4>
                        <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                    </div>
                    
                    <Link onClick={ScrollToTop} to='/Contact'>
                        <Button
                            text={'Get in touch'}
                            theme={'dark'}
                        />
                    
                    </Link>
                </ContainerContactInvitation>
            :
                null
            }

        <Container>
            <Line />

            <ContainerLogoLinks>
                <Logo src={LogoDark} alt="Logo do site"></Logo>

                <ContainerLinks>
                    <StyledLink onClick={ScrollToTop} to='/About'>OUR COMPANY</StyledLink>
                    <StyledLink onClick={ScrollToTop} to='/Locations'>LOCATIONS</StyledLink>
                    <StyledLink onClick={ScrollToTop} to='/Contact'>CONTACT</StyledLink>
                </ContainerLinks>
            </ContainerLogoLinks>

            <ContainerContactInformation>
                <ContainsLocation>
                    <Location>
                        <Title>Designo Central Office</Title>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </Location>

                    <Location>
                        <Title>Contact Us (Central Office)</Title>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </Location>
                </ContainsLocation>

                <ContainsSocialMedia>
                    <FacebookIcon size={25} />
                    <YoutubeIcon size={25} />
                    <TwitterIcon size={25} />
                    <PinterestIcon size={25} />
                    <InstagramIcon size={25} />
                </ContainsSocialMedia>


            </ContainerContactInformation>
        </Container>
        </ContainerFooter>
    )
}