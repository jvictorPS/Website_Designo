import ServiceIntroductionCard from "../../components/atoms/ServiceIntroductionCard";
import ProjectsSection from "../../components/molecules/ProjectsSection";
import webService from '../../assets/home/desktop/image-web-design-large.jpg'
import appService from '../../assets/home/desktop/image-app-design.jpg'
import projects from '../../data/projects.js'
import ServiceCard from "../../components/atoms/ServiceCard";
import ServicesCardsOrganizer from "../../components/atoms/ServicesCardsOrganizer";
import PageOrganizer from "../../components/atoms/PageOrganizer";



export default function GraphicDesign() {
    return (
        <PageOrganizer>
            <ServiceIntroductionCard 
                title={'Graphic Design'}
                description={'We deliver eye-catching branding materials that are tailored to meet your business objectives.'}
            />

            <ProjectsSection projects={projects.graphic}/>

            <ServicesCardsOrganizer>
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
            </ServicesCardsOrganizer>
        </PageOrganizer>
    )
}