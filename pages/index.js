import Header from '../components/Header'
import Head from 'next/head'
import Banner from '../components/Banner'
import ParagraphImageRight from '../components/ParagraphImageRight'
import Carousel from '../components/Carousel'
import ContactFormMap from '../components/ContactFormMap'
import Footer from '../components/Footer'
import data from '../data/paragraphimageright.json'
import Slick from '../components/Slick'
import css from '../components/paragraphimageright.css'



const Index = () => (
    <div>
        <Head>
            <style>{`
                body {
                margin: 0;
                }`
                }
            </style>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Header/>
        <Banner text={"Rupps Trucking & Excavation"} button={"Contact Us"} h2={"LoremIpsum"} />
        <ParagraphImageRight className={css.home} data={data} id={0}/>
        <Carousel/>
        <ContactFormMap/>
        <Footer/> 

    </div>
)

export default Index 