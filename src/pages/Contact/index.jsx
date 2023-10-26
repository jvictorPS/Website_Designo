import Header from '../../components/organism/Header'
import Footer from '../../components/organism/Footer'
import CountrieSection from '../../components/molecules/CountriesSection'
import ContactForm from '../../components/molecules/ContactForm'


export default function Contact() {
    return (
        <>
            <Header />
                <ContactForm />
                <CountrieSection />
            <Footer />
        </>
    )
}