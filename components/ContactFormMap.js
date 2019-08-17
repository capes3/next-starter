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

    emailChange = (e) => {
        this.setState({email:e.target.value})
    }

    phoneChange = (e) => {
        this.setState({phone:e.target.value})
    }

    messageChange = (e) => {
        this.setState({message:e.target.value})
    }

    submit = (e) => {
        console.log(this.state.name)
        console.log(this.state.email)
        console.log(this.state.phone)
        console.log(this.state.message)

    }

  render () {
    return <div className={css.contactFormWrapper}>
        <div className={css.contactForm}>
        <div className={css.title}>Contact Us</div>
        <form>
      <input type="text" value={this.state.value} onChange={this.nameChange}/>
      <input type="text" value={this.state.value} onChange={this.emailChange}/>
      <input type="text" value={this.state.value} onChange={this.phoneChange}/>
      <input type="text" value={this.state.value} onChange={this.messageChange}/>

      <button onClick={this.submit}>Send</button>
      </form>
      </div>
    </div>
  }
}

export default ContactForm