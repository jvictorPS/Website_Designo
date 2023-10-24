/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { ContainerCard, ContainerDescription, ContainerImage } from "./style";


export default function AboutHistoryCard({title , description}) {
    return (
        <ContainerCard>
            <ContainerImage/>

            <ContainerDescription>
                <h4>{title}</h4>
                <p>{description}</p>
            </ContainerDescription>
        </ContainerCard>
    )
}