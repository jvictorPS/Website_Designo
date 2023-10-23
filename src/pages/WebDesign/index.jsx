import ProjectCard from "../../components/atoms/ProjectCard";
import ServiceIntroductionCard from "../../components/atoms/ServiceIntroductionCard";

import test from '../../assets/web-design/desktop/image-express.jpg'

export default function WebDesign() {
    return (
        <>
            <ServiceIntroductionCard 
                title={'Web Design'}
                description={'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'}
            />

            <ProjectCard 
                image={test}
                title={'EXPRESS'}
                description={'A multi-carrier shipping website for ecommerce businesses'}
            />
        
        </>
    )
}