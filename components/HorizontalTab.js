import React from 'react'
import css from './horizontalTab.css'


class HorizontalTab extends React.Component {
    constructor(props){
        super(props)
        this.state={selected:0}
    }

    render () {
        const titleArray = this.props.data.title
      return <div className={css.wrapper}>
        <div className={css.tabWrapper}>
        <h3>Other Services</h3>
        {titleArray.map((object, i) => 
        <div className={css.tab} onClick={()=>{this.setState({selected:i})}}>
        {object.title}
        </div>
        )}
        </div>
        <div className={css.tabContent}>
          <h2 className={css.title}>{titleArray[this.state.selected].title}</h2>
        <img src={titleArray[this.state.selected].image}/>
        <div>
            {titleArray[this.state.selected].content}
        </div>
        </div>
      </div>
    }
  }



export default HorizontalTab