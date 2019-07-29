import React from 'react'
import css from './horizontalTab.css'


class HorizontalTab extends React.Component {
    constructor(props){
        super(props)
        this.state={selected:2}
    }

    render () {
        const titleArray = this.props.data.title
      return <div className={css.wrapper}>
        <div className={css.tabWrapper}>
        {titleArray.map((object, i) => 
        <div className={css.tab} onClick={()=>{this.setState({selected:i})}}>
        {object.title}
        </div>
        )}
        </div>
        <div className={css.tabContent}>
        <img src={titleArray[this.state.selected].image}/>
        <div>
            {titleArray[this.state.selected].content}
        </div>
        </div>
      </div>
    }
  }



export default HorizontalTab