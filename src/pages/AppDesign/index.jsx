import ServiceIntroductionCard from "../../components/atoms/ServiceIntroductionCard";
import ProjectsSection from "../../components/molecules/ProjectsSection";
import webService from '../../assets/home/desktop/image-web-design-large.jpg'
import graphicService from '../../assets/home/desktop/image-graphic-design.jpg'
import projects from '../../data/projects.js'
import ServiceCard from "../../components/atoms/ServiceCard";
import ServicesCardsOrganizer from "../../components/atoms/ServicesCardsOrganizer";
import PageOrganizer from "../../components/atoms/PageOrganizer";



export default function AppDesign() {
    return (
        <PageOrganizer>
            <ServiceIntroductionCard 
                title={'App Design'}
                description={'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'}
            />

            <ProjectsSection projects={projects.app}/>

            <ServicesCardsOrganizer>
                <ServiceCard 
                    to={'/webdesign'}
                    title={'Web design'}
                    image={webService}
                />
                <ServiceCard 
                    to={'/GraphicDesign'}
                    title={'Graphic Design'}
                    image={graphicService}
                />
            </ServicesCardsOrganizer>
        </PageOrganizer>
    )
}