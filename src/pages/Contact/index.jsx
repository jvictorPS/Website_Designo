import Header from '../../components/organism/Header'
import Footer from '../../components/organism/Footer'
import CountrieSection from '../../components/molecules/CountriesSection'
import ContactForm from '../../components/molecules/ContactForm'
import PageOrganizer from '../../components/atoms/PageOrganizer'


export default function Contact() {
    return (
        <>
            <Header />
                <PageOrganizer>
                    <ContactForm />
                    <CountrieSection />
                </PageOrganizer>
            <Footer />
        </>
    )
}