import React from 'react'
import css from '../components/paragraphimageright.css'



class ParagraphImageRight extends React.Component{

    render(props){
        return(
            <div className={css.wrapper}>
            <div className={this.props.className}>
                <div>
                <h1>{this.props.data.data[this.props.id].title}</h1>
                <p>{this.props.data.data[this.props.id].content}</p>
                </div>
                <img className={css.image} src={this.props.data.data[0].image}/>
            </div>
            </div>
        )
    }
}



export default ParagraphImageRight