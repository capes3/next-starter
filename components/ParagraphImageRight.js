import React from 'react'
import css from '../components/paragraphimageright.css'


class ParagraphImageRight extends React.Component{

    render(){
        console.log(this.props.data.data[0].content)
        return(
            <div className={css.paragraphWrapper}>
                <h1>About Us</h1>
                <p>{this.props.data.data[0].content}</p>
                <img className={css.image} src={this.props.data.data[0].image}/>
            </div>
        )
    }
}

export default ParagraphImageRight