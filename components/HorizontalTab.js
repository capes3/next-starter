import React from 'react'


class HorizontalTab extends React.Component {
    constructor(props){
        super(props)
        this.state={selected:2}
    }

    render () {
        const titleArray = this.props.data.title
      return <div className='message-box'>
        {titleArray.map((object, i) => 
        <div onClick={()=>{this.setState({selected:i})}}>
        {object.title}
        </div>
        )}
        <div>
            {titleArray[this.state.selected].content}
        </div>
        <img src={titleArray[this.state.selected].image}/>
      </div>
    }
  }



export default HorizontalTab