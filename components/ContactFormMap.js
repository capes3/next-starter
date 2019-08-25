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
        <img src={"../static/NorthernUtahGray.png"} className={css.map}></img>
        <div className={css.contactForm}>
        <div className={css.title}>Contact Us</div>
        <form>
      <input type="text" placeholder="NAME" onChange={this.nameChange}/>
      <input type="text" placeholder="EMAIL" onChange={this.emailChange}/>
      <input type="text" placeholder="PHONE" onChange={this.phoneChange}/>
      <textarea className={css.message} type="text" placeholder="MESSAGE" onChange={this.messageChange}/>

      <button onClick={this.submit}>Send</button>
      </form>
      </div>
    </div>
  }
}

export default ContactForm