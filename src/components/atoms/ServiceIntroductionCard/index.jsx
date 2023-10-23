/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling


import { ContainerCard } from "./style";


export default function ServiceIntroductionCard({title , description}) {
    return (
        <ContainerCard>
            <h4>{title}</h4>
            <p>{description}</p>
        </ContainerCard>
    )
}