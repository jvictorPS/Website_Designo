import passionate from '../../../assets/home/desktop/illustration-passionate.svg';
import resourceful from '../../../assets/home/desktop/illustration-resourceful.svg';
import friendly from '../../../assets/home/desktop/illustration-friendly.svg';

import { 
    CardAdvantage, 
    ContainerAdvantagesSection, 
    Text } from "./style";
import CircularImage from '../../atoms/CircularImage';

export default function AdvantagesSection() {
    return (
        <ContainerAdvantagesSection>
            <CardAdvantage>
                
                <CircularImage 
                    image={passionate}
                />

                <Text>
                    <h4>PASSIONATE</h4>
                    <p>
                    Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                    </p>
                </Text>
            </CardAdvantage>

            <CardAdvantage>
                
                <CircularImage 
                    image={resourceful}
                />

                <Text>
                    <h4>RESOURCEFUL</h4>
                    <p>
                    Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.                    </p>
                </Text>
            </CardAdvantage>

            <CardAdvantage>
                
                <CircularImage 
                    image={friendly}
                />

                <Text>
                    <h4>FRIENDLY</h4>
                    <p>
                    We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.                    </p>
                </Text>
            </CardAdvantage>
        </ContainerAdvantagesSection>
    )
}