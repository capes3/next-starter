import React from 'react'
import css from '../components/accordian.css'


class Accordian extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        const titleArray = this.props.data.title
      return <div className={css.wrapper}>
          <div className={css.title}>FAQ</div>
        {titleArray.map((object, i) => 
        <div className={css.item}>
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
        return <div className={css.itemWrapper}>
            <div className={css.itemTitle}onClick={this.toggleContent}>{this.props.title.title}</div>
            <div>{this.props.title.content}</div>
        </div>
        }else{
            return <div className={css.itemTitle}onClick={this.toggleContent}>{this.props.title.title}</div>
        }
    }
}

export default Accordian