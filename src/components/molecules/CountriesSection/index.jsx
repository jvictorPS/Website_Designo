import { Link } from "react-router-dom";
import { ContainerCountries, Countrie, CountrieName } from "./style";
import Button from '../../atoms/Button'
import ScrollToTop from '../../../utils/ScrollToTop'
import CircularImage from "../../atoms/CircularImage";

import CountriesData from "./data";


export default function CountriesSection() {
    return (
        <ContainerCountries>
            {CountriesData.map(countrie => (
                <Countrie key={countrie.id}>
                    <CircularImage 
                        image={countrie.image}
                    />

                    <CountrieName>
                        {countrie.name}
                    </CountrieName>

                    <Link onClick={ScrollToTop} to={countrie.router}>
                        <Button
                            text={'SEE LOCATION'}
                            theme={'light'}
                        />
                    </Link>
                </Countrie>
            ))}
        </ContainerCountries>
    )
}