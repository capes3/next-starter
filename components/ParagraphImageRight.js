import React from 'react'
import css from '../components/paragraphimageright.css'
import json from '../data/paragraphimageright.json'


class ParagraphImageRight extends React.Component{


    render(){
        return(
            <div className={css.paragraphWrapper}>
                <h1>About Us</h1>
                <p>{json.data[0].content}</p>
                <img className={css.image} src={'../static/image-two.jpg'}/>
            </div>
        )
    }
}

export default ParagraphImageRight