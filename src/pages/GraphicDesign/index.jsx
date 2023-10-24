import ServiceIntroductionCard from "../../components/atoms/ServiceIntroductionCard";
import ProjectsSection from "../../components/molecules/ProjectsSection";

import projects from '../../data/projects.js'



export default function GraphicDesign() {
    return (

        <>
            <ServiceIntroductionCard 
                title={'Graphic Design'}
                description={'We deliver eye-catching branding materials that are tailored to meet your business objectives.'}
            />

            <ProjectsSection projects={projects.graphic}/>
        
        
        </>
    )
}