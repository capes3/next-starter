import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import Banner from '../components/Banner'
import ParagraphImageRight from '../components/ParagraphImageRight'
import HorizontalTab from '../components/HorizontalTab'
import data from '../data/paragraphimageright.json'
import tabData from '../data/horizontaltab.json'
import ContactForm from '../components/ContactFormMap'


const Contact = () => (
    <div>
        <Head>
            <style>{`
                body {
                margin: 0;
                }`
                }
            </style>
            <link href="https://fonts.googleapis.com/css?family=Lato|Oswald&display=swap" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
        </Head>
        <Header/>
        <Banner text={"Contact Us"}/>
        <ContactForm/>
        <Footer/>
    </div>
)

export default Contact