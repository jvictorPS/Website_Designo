import Header from '../../components/organism/Header'
import Footer from '../../components/organism/Footer'
import CountrieSection from '../../components/molecules/CountriesSection'
import ContactForm from '../../components/molecules/ContactForm'
import { Organizer } from './style'


export default function Contact() {
    return (
        <>
            <Header />
                <Organizer>
                    <ContactForm />
                    <CountrieSection />
                </Organizer>
            <Footer notContact={true}/>
        </>
    )
}