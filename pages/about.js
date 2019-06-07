import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import Banner from '../components/Banner'
import ParagraphImageRight from '../components/ParagraphImageRight'
import data from '../data/paragraphimageright.json'


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
        <ParagraphImageRight data={data}/>
        {/* We're going to have to pass props to the above component.  So we'll import data into this component and pass it to ParagraphImageRight */}
        <Footer/>
    </div>
)

export default About