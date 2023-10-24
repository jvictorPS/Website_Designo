import ServiceIntroductionCard from "../../components/atoms/ServiceIntroductionCard";
import ProjectsSection from "../../components/molecules/ProjectsSection";

import projects from '../../data/projects.js'



export default function AppDesign() {
    return (
        <>
            <ServiceIntroductionCard 
                title={'App Design'}
                description={'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'}
            />

            <ProjectsSection projects={projects.app}/>
        
        </>
    )
}