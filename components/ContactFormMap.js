import React from 'react'
import ReactDOM from 'react-dom'
import css from './contactFormMap.css'


class ContactForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            phone:'',
            message:''
        }
    }

    nameChange = (e) => {
        this.setState({name:e.target.value})
    }

    emailChange = () => {
        this.setState({email:e.target.value})
    }

    phoneChange = () => {
        this.setState({phone:e.target.value})
    }

    messageChange = () => {
        this.setState({message:e.target.value})
    }

    submit = () => {
        console.log(this.state.name)
    }

  render () {
    return <div className={css.contactForm}>
        <div className={css.title}>Contact Us</div>
        <form>
      <input type="text" value={this.state.value} onChange={this.nameChange}/>
      <input type="text" value={this.state.value} onChange={this.emailChange}/>
      <input type="text" value={this.state.value} onChange={this.phoneChange}/>
      <input type="text" value={this.state.value} onChange={this.messageChange}/>

      <button onClick={this.submit}>Submit</button>
      </form>
    </div>
  }
}

export default ContactForm