import React from 'react'
import Head from 'next/head'
import style from '../components/home-banner.css'
import css from '../components/banner.css'

class Banner extends React.Component{
    render(props){
        if(this.props.button){
            return <div className={style.bannerWrapper}>
                <img className={css.image} src={'../static/image-one.jpg'}/>
                <div className={style.textWrapper}>
                <div className={style.title}>{this.props.text}</div>
                <h3>{this.props.h2}</h3>
            <button>{this.props.button}</button>
            </div>
        </div>
        }else{
        return(
            <div className={css.bannerWrapper}>
                <img className={css.image} src={'../static/image-one.jpg'}/>
                <div className={css.title}>{this.props.text}</div>
            </div>
        )
    }}
}

export default Banner

