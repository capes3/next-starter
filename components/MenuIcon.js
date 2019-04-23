import React from 'react'
import Menu from '../components/Menu'
import data from '../data/menuItems.json'

class MenuIcon extends React.Component{
    constructor(){
        super();
        this.state={isOpen: false};
    }

    handleClick = () => { this.setState(prevState =>({isOpen: !prevState.isOpen}))}

    render(){
        if(this.state.isOpen === true){
        return( 
            <div onClick={this.handleClick}>
                Open
                <Menu data={data.data}/>
            </div>
        )
    }else{
        return(
            <div onClick={this.handleClick}>
                Closed
            </div>
        )
    }
    }
}


export default MenuIcon