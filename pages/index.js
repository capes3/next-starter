import Header from '../components/Header'
import Head from 'next/head'
import Banner from '../components/Banner'
import ParagraphImageRight from '../components/ParagraphImageRight'
import Carousel from '../components/Carousel'
import ContactFormMap from '../components/ContactFormMap'
import Footer from '../components/Footer'
import data from '../data/paragraphimageright.json'


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
        </Head>
        <Header/>
        <Banner/>
        <ParagraphImageRight data={data}/>
        <Carousel/>
        <ContactFormMap/>
        <Footer/> 

    </div>
)

export default Index 