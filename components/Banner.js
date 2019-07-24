import React from 'react'
import css from '../components/banner.css'

class Banner extends React.Component{
    render(){
        return(
            <div className={css.bannerWrapper}>
                <img className={css.image} src={'../static/image-one.jpg'}/>
                <div className={css.title}>{this.props.text}</div>
            </div>
        )
    }
}

export default Banner

