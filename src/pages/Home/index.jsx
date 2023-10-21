import ServiceCard from "../../components/atoms/ServiceCard";

import webService from '../../assets/home/desktop/image-web-design-large.jpg'
import appService from '../../assets/home/desktop/image-app-design.jpg'
import graphicService from '../../assets/home/desktop/image-graphic-design.jpg'

import { 
    ContainerCardsService 
} from "./style";
import AdvantagesSection from "../../components/molecules/AdvantagesSection";




export default function Home() {
    return (
        <>
        
        <h1>Home do site</h1>
        <br />
        <h1>Home do site</h1>

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

        <AdvantagesSection>
            
        </AdvantagesSection>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </>
    )
}