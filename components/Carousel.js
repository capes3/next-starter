import React from 'react'
import css from "../components/carousel.css"
import Link from "next/link"
import Slider from "react-slick"
import data from '../data/cards'
import Card from '../components/Card'


class Carousel extends React.Component {
  

  nextCard = () => {
    document.getElementById("slider").scrollLeft +=200;
  }

  

  prevCard = () => {
    document.getElementById("slider").scrollLeft -=200;
  }

  render () {
    return( 
      <div className={css.carouselWrapper}>
        <h1 className={css.carouselTitle}>Our Services</h1>
          <div className={css.carousel}>
          <button className={css.left}onClick={this.prevCard}>
          <box-icon name="left-arrow" color="black"></box-icon>
          </button>
              <div id="slider"className={css.imageWrapper}>
                {data.cards.map((item => 
                  <Card img={item.img}
                        key={item.index}
                        link={item.href}
                        service={item.service}
                        />
                  ))}
              </div>
              <button className={css.right}onClick={this.nextCard}>
              <box-icon name="right-arrow" color="black"></box-icon>
              </button>
          </div>
          <div className={css.hideScroll}></div>
      </div>
    )}
}


export default Carousel