import React from 'react'
import css from '../components/paragraphimageright.css'



class ParagraphImageRight extends React.Component{
constructor(props){
    super(props)
}



    render(props){
        const index = this.props
        return(
            <div className={this.props.className}>
                <h1>{this.props.data.data[this.props.id].title}</h1>
                <p>{this.props.data.data[this.props.id].content}</p>
                <img className={css.image} src={this.props.data.data[0].image}/>
            </div>
        )
    }
}

export default ParagraphImageRight