/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import arrow from '../../../assets/shared/desktop/icon-right-arrow.svg'


import {
    ContainerCard,
} from './style'

export default function ServiceCard({title, image}) {

    return (
        <ContainerCard
            image={image}
        >
            <div></div>
            <h4>{title}</h4>
            <section>
                <p>View projects</p>
                <img src={arrow} alt='seta para a direita'></img>
            </section>
        </ContainerCard>
    )
}