import React from 'react'
import Menu from '../components/Menu'
import data from '../data/menuItems.json'
import css from '../components/header.css'

class MenuIcon extends React.Component{
    constructor(){
        super();
        this.state={isOpen: false};
    }

    handleClick = () => { this.setState(prevState =>({isOpen: !prevState.isOpen}))}

    render(){
        if(this.state.isOpen === true){
        return( 
            <div onClick={this.handleClick} className={css.open}>
                <img className={css.menuIcon}src={"../static/bx-x.svg"}/>
                <Menu data={data.data}/>
            </div>
        )
    }else{
        return(
            <div onClick={this.handleClick}>
                 <img className={css.menuIcon}src={"../static/bx-menu.svg"}/>
            </div>
        )
    }
    }
}


export default MenuIcon