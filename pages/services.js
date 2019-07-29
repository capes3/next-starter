import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import Banner from '../components/Banner'
import ParagraphImageRight from '../components/ParagraphImageRight'
import HorizontalTab from '../components/HorizontalTab'
import data from '../data/paragraphimageright.json'
import tabData from '../data/horizontaltab.json'
import ContactForm from '../components/ContactFormMap'


const Services = () => (
    <div>
        <Head>
            <style>{`
                body {
                margin: 0;
                }`
                }
            </style>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <Header/>
        <Banner text={"Our Services"}/>
        <HorizontalTab data={tabData}/>
        <ContactForm/>
        <Footer/>
    </div>
)

export default Services