import LocationCard from "../../components/molecules/LocationCard/index.jsx";
import { ContainerCards } from "./style.js";

export default function Locations() {

    return (
        <ContainerCards>
            <LocationCard
                latitude={43.64375922818151}
                longitude={-79.39446698836224}
                officeName={'Designo Central Office'}
                countrie={'Canada'}
                adress={'3886 Wellington Street'}
                city={'Toronto, Ontario M9C 3J5'}
                phone={'+1 253-863-8967'}
                email={'M : contact@designo.co'}
            />

            <LocationCard
                latitude={-30.329333626331973}
                longitude={149.78823989841186}
                officeName={'Designo AU Office'}
                countrie={'Australia'}
                adress={'19 Balonne Street'}
                city={'New South Wales 2443'}
                phone={'P : (02) 6720 9092'}
                email={'M : contact@designo.au'}
            />

            <LocationCard
                latitude={53.71036734517833}
                longitude={-1.3417171075888683}
                officeName={'Designo UK Office'}
                countrie={'United Kingdom'}
                adress={'13  Colorado Way'}
                city={'Rhyd-y-fro SA8 9GA'}
                phone={'P : 078 3115 1400'}
                email={'M : contact@designo.uk'}
            />
        </ContainerCards>
    )
}