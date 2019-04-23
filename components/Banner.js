import React from 'react'
import css from '../components/banner.css'

class Banner extends React.Component{

    render(){
        return(
            <div>
                <img className={css.image} src={'../static/image-one.jpg'}/>
            </div>
        )
    }
}

export default Banner

