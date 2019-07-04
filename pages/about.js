import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import Banner from '../components/Banner'
import ParagraphImageRight from '../components/ParagraphImageRight'
import Accordian from '../components/Accordian'
import data from '../data/paragraphimageright.json'
import accordianData from '../data/accordian.json'


const About = () => (
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
        <ParagraphImageRight data={data} id={0}/>
        <ParagraphImageRight data={data} id={1}/>
        <Accordian data={accordianData}/>
        <Footer/>
    </div>
)

export default About