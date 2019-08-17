import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import Banner from '../components/Banner'
import ParagraphImageRight from '../components/ParagraphImageRight'
import HorizontalTab from '../components/HorizontalTab'
import AlternatingImg from '../components/AlternatingImg'
import data from '../data/alternating.json'
import tabData from '../data/horizontaltab.json'
import ContactForm from '../components/ContactFormMap'


const Projects = () => (
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
        </Head>
        <Header/>
        <Banner text={"Completed Projects"}/>
        <AlternatingImg data={data}/>
        <Footer/>
    </div>
)

export default Projects