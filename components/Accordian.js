import React from 'react'


class Accordian extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        const titleArray = this.props.data.title
      return <div className='message-box'>
        {titleArray.map((object, i) => 
        <div>
        <AccordianItem title={object} key={i}/>
        </div>
        )}

      </div>
    }
  }


class AccordianItem extends React.Component {
    constructor(props){
        super(props)
        this.state={isOpen:false}
    }

    toggleContent = () => {
        this.setState(prevState => ({isOpen:!prevState.isOpen}))
    }

    render () {
        if(this.state.isOpen === true){
        return <div>
            <div onClick={this.toggleContent}>{this.props.title.title}</div>
            <div>{this.props.title.content}</div>
        </div>
        }else{
            return <div onClick={this.toggleContent}>{this.props.title.title}</div>
        }
    }
}

export default Accordian