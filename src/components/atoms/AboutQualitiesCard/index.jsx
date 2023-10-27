/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { ContainerCard, ContainerDescription, ContainerImage } from "./style";


export default function AboutQualitiesCard({
    image, 
    title, 
    p1, 
    p2,
}) {
        
    return (
        <ContainerCard>
            <ContainerImage
                image={image}
            />

            <ContainerDescription>
                <h4>{title}</h4>
                <p>{p1}</p>
                <p>{p2}</p>
            </ContainerDescription>
        </ContainerCard>
    )
}