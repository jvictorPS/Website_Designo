import ServiceCard from "../../components/atoms/ServiceCard";

import webService from '../../assets/home/desktop/image-web-design-large.jpg'
import appService from '../../assets/home/desktop/image-app-design.jpg'
import graphicService from '../../assets/home/desktop/image-graphic-design.jpg'

import { 
    ContainerCardsService,
    SummaryAboutSection,
    ContainerHome
} from "./style";

import AdvantagesSection from "../../components/molecules/AdvantagesSection";
import Button from "../../components/atoms/Button";




export default function Home() {
    return (

        <ContainerHome>
            <SummaryAboutSection>

                <h4>Award-winning custom designs and digital branding solutions</h4>

                <p>
                With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                </p>
                <Button 
                    text={'Learn More'}
                    theme={'dark'}
                />
            </SummaryAboutSection>

            <ContainerCardsService>

                <ServiceCard 
                    title={'Web design'}
                    image={webService}
                />
                <ServiceCard 
                    title={'App design'}
                    image={appService}
                />

                <ServiceCard 
                    title={'Graphic Design'}
                    image={graphicService}
                />
            </ContainerCardsService>

            <AdvantagesSection />
        </ContainerHome>

    )
}