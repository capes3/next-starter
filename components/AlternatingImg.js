import React from 'react'
import css from '../components/alternatingImg.css'

//probably map the data into a child component, then use that child component to determine
//which side of the page the image is rendered on.  On smaller screens just remove 
//the image from the flow altogether.  

class AlternatingImg extends React.Component {
    constructor(props){
        super(props)
        this.state={selected:0}
    }

    render () {
        const titleArray = this.props.data.title
      return <div className={css.wrapper}>
        {titleArray.map((object, i) => 
        <div className={css.alternateItems}>
            <AlternatingItem title={object} index={i}/>
        </div>
        )}
        </div>
    }
  }


  class AlternatingItem extends React.Component {

//tomorrow pick up here. You just need to access props and render respective elements
//depending on whether the key is odd or even.  
    render () {
        if(this.props.index%2 === 0){
        return <div>
            <div className={css.odds}>
            <h2>{this.props.title.title}</h2>
            <p>{this.props.title.content}</p>
            </div>
            <img src={this.props.title.image}/> 
        </div>
        }else{
            return <div>
                <div className={css.evens}>
                <h2>{this.props.title.title}</h2>
                <p>{this.props.title.content}</p>
                </div>
                <img src={this.props.title.image}/>
            </div>
        }
    }
}

export default AlternatingImg