import React from 'react'
import css from "../components/carousel.css"
import Link from "next/link"
import Slider from "react-slick"
import data from '../data/cards'
import Card from '../components/Card'


class Carousel extends React.Component {
  constructor(){
    super()
    this.state = {
      cards : data.cards,
      active: data.cards[0]
    }
  }

  nextCard = () => {
    let newIndex = this.state.active.index
    this.setState({active: data.cards[newIndex+1]})
  }

  currentState = () => {console.log(this.state.active)}
  

  prevCard = () => {
    let newIndex = this.state.active.index
    this.setState({active: data.cards[newIndex-1]})
  }

  render () {
    return( 
      <div className='message-box'>
        <button onClick={this.prevCard} disabled={this.state.active.index === 0}>
          Previous
        </button>
          <Card data={this.state.active}/>
        <button onClick={this.nextCard} disabled={this.state.active.index === data.cards.length-1}>
          Next
        </button>
      </div>
    )}
}


export default Carousel