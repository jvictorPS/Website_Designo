import ServiceCard from "../../components/atoms/ServiceCard";

import webService from '../../assets/home/desktop/image-web-design-large.jpg'
import appService from '../../assets/home/desktop/image-app-design.jpg'
import graphicService from '../../assets/home/desktop/image-graphic-design.jpg'


import AdvantagesSection from "../../components/molecules/AdvantagesSection";
import Button from "../../components/atoms/Button";
import { Link } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";

import { 
    ContainerCardsService,
    SummaryAboutSection,
    ContainerHome,
} from "./style";

export default function Home() {
    return (

        <ContainerHome>
            <SummaryAboutSection>

                <h4>Award-winning custom designs and digital branding solutions</h4>

                <p>
                With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                </p>
                <Link onClick={ScrollToTop} to='/About'>
                    <Button 
                        text={'Learn More'}
                        theme={'dark'}
                    />              
                </Link>
            </SummaryAboutSection>

            <ContainerCardsService>
                    <ServiceCard 
                        to={'/webdesign'}
                        title={'Web design'}
                        image={webService}
                    />

                    <ServiceCard
                        to={'/AppDesign'}
                        title={'App design'}
                        image={appService}
                    />

                    <ServiceCard 
                        to={'/GraphicDesign'}
                        title={'Graphic Design'}
                        image={graphicService}
                    />
            </ContainerCardsService>

            <AdvantagesSection />
        </ContainerHome>

    )
}