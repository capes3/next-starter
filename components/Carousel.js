import React from 'react'
import css from "../components/carousel.css"
import Link from "next/link"
import Slider from "react-slick"
import data from '../data/cards'
import Card from '../components/Card'


class Carousel extends React.Component {
  

  nextCard = () => {
    
  }

  

  prevCard = () => {
    
  }

  render () {
    return( 
      <div className={css.carouselWrapper}>
        <h1 className={css.carouselTitle}>Our Services</h1>
          <div className={css.carousel}>
              <div className={css.imageWrapper}>
                {data.cards.map((item => 
                  <Card img={item.img}
                        key={item.index}
                        link={item.href}
                        />
                  ))}
              </div>
          </div>
          <div className={css.hideScroll}></div>
      </div>
    )}
}


export default Carousel