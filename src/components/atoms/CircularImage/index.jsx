/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { Circle, Image } from "./style";


export default function CircularImage({image}) {
    return (
        <Circle>
            <Image src={image} />
        </Circle>
    )
}