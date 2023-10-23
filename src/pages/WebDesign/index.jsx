import ServiceIntroductionCard from "../../components/atoms/ServiceIntroductionCard";
import ProjectsSection from "../../components/molecules/ProjectsSection";

import projects from '../../data/projects.js'


export default function WebDesign() {
    return (
        <>
            <ServiceIntroductionCard 
                title={'Web Design'}
                description={'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'}
            />

            <ProjectsSection projects={projects.web}/>
        
        </>
    )
}