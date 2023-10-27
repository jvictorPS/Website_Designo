import AboutHistoryCard from "../../components/atoms/AboutHistoryCard";
import Meeting from "../../assets/about/mobile/image-about-hero.jpg"
import AboutQualitiesCard from "../../components/atoms/AboutQualitiesCard";

import worldMobile from "../../assets/about/mobile/image-world-class-talent.jpg"
import worldTablet from "../../assets/about/tablet/image-world-class-talent.jpg"
import worldDesktop from "../../assets/about/desktop/image-world-class-talent.jpg"

import dealMobile from "../../assets/about/mobile/image-real-deal.jpg"
import dealTablet from "../../assets/about/tablet/image-real-deal.jpg"
import dealDesktop from "../../assets/about/desktop/image-real-deal.jpg"
import CountriesSection from "../../components/molecules/CountriesSection";
import PageOrganizer from "../../components/atoms/PageOrganizer"
import { Container } from "./style";

const imagens1 = {
    mobile: worldMobile,
    tablet: worldTablet,
    desktop: worldDesktop
}

const imagens2 = {
    mobile: dealMobile,
    tablet: dealTablet,
    desktop: dealDesktop
}


export default function About() {
    return (
        <PageOrganizer>
            <Container>
                <AboutHistoryCard 
                    image={Meeting}
                    title={'About Us'}
                    description={'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.'}
                />

                <AboutQualitiesCard
                    image={imagens1}
                    title={'World-class talent'}
                    p1={'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.'}
                    p2={'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'}
                />
            </Container>

            <CountriesSection />

            <AboutQualitiesCard
                image={imagens2}
                title={'The real deal'}
                p1={'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.'}
                p2={'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'}
            />
        </PageOrganizer>
    )
}