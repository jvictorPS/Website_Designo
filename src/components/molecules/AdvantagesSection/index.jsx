import passionate from '../../../assets/home/desktop/illustration-passionate.svg';
import resourceful from '../../../assets/home/desktop/illustration-resourceful.svg';
import friendly from '../../../assets/home/desktop/illustration-friendly.svg';

import { 
    CardAdvantage, 
    Circle, 
    ContainerAdvantagesSection, 
    Image, 
    Text } from "./style";

export default function AdvantagesSection() {
    return (
        <ContainerAdvantagesSection>
            <CardAdvantage>
                
                <Circle>
                    <Image src={passionate} />
                </Circle>

                <Text>
                    <h4>PASSIONATE</h4>
                    <p>
                    Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                    </p>
                </Text>
            </CardAdvantage>

            <CardAdvantage>
                
                <Circle>
                    <Image src={resourceful} />
                </Circle>

                <Text>
                    <h4>RESOURCEFUL</h4>
                    <p>
                    Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.                    </p>
                </Text>
            </CardAdvantage>

            <CardAdvantage>
                
                <Circle>
                    <Image src={friendly} />
                </Circle>

                <Text>
                    <h4>FRIENDLY</h4>
                    <p>
                    We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.                    </p>
                </Text>
            </CardAdvantage>
        </ContainerAdvantagesSection>
    )
}