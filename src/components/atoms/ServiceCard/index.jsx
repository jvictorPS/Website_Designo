/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import arrow from '../../../assets/shared/desktop/icon-right-arrow.svg'


import {
    StyledLink
} from './style'
import ScrollToTop from '../../../utils/ScrollToTop'

export default function ServiceCard({to, title, image}) {

    return (

        <StyledLink image={image} onClick={ScrollToTop} to={to}>
                <div></div>
                <h4>{title}</h4>
                <section>
                    <p>View projects</p>
                    <img src={arrow} alt='seta para a direita'></img>
                </section>
            </StyledLink>

    )
}