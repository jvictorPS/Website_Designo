import ServiceIntroductionCard from "../../components/atoms/ServiceIntroductionCard";
import ProjectsSection from "../../components/molecules/ProjectsSection";
import appService from '../../assets/home/desktop/image-app-design.jpg'
import graphicService from '../../assets/home/desktop/image-graphic-design.jpg'
import projects from '../../data/projects.js'
import ServiceCard from "../../components/atoms/ServiceCard";
import ServicesCardsOrganizer from "../../components/atoms/ServicesCardsOrganizer";


export default function WebDesign() {
    return (
        <>
            <ServiceIntroductionCard 
                title={'Web Design'}
                description={'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'}
            />

            <ProjectsSection projects={projects.web}/>
        
            <ServicesCardsOrganizer>
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
            </ServicesCardsOrganizer>
        </>
    )
}