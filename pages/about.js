import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import Banner from '../components/Banner'
import ParagraphImageRight from '../components/ParagraphImageRight'
import Accordian from '../components/Accordian'
import data from '../data/paragraphimageright.json'
import accordianData from '../data/accordian.json'
import css from '../components/paragraphimageright.css'


const About = () => (
    <div style={{display:'flex',flexDirection:'column'}}>
        <Head>
            <style>{`
                body {
                margin: 0;
                }`
                }
            </style>
            <link href="https://fonts.googleapis.com/css?family=Lato|Oswald&display=swap" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="stylesheet" href="/static/base.css" />
            <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
        </Head>
        <Header/>
        <Banner text={"About Us"}/>
        <ParagraphImageRight data={data} id={0} className={css.firstParagraph}/>
        <ParagraphImageRight data={data} id={1} className={css.secondParagraph}/>
        <Accordian data={accordianData}/>
        <Footer/>
    </div>
)

export default About