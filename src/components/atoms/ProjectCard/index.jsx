/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { ContainerCard, ContainerDescription, ContainerImage } from "./style";


export default function ProjectCard({image , title , description}) {
    return (
        <ContainerCard>
            <ContainerImage src={image} />

            <ContainerDescription>
                <h4>{title}</h4>
                <p>{description}</p>
            </ContainerDescription>
        </ContainerCard>
    )
}