import React from 'react'
import css from "../components/menu.css"
import Link from "next/link"


class Item extends React.Component {
	render() {
      return <Link>
      <a href={this.props.href}>
          { this.props.name }
      </a>    
    </Link>
  }
}

class Menu extends React.Component {
	constructor() {
  	super();
  }
  
  list(data) {
  	const children = (items) => {
    	if (items) {
      	return <ul>{ this.list(items) }</ul>
      }
    }

    return data.map((link, index) => {
      return <Item key={ link.id } name={ link.name } href={link.href}>
        { children(link.items) }
      </Item>
    })
  }
  
  render() {
  	return <ul className={css.menuList}>
    	{ this.list(this.props.data) }
    </ul>
  }
}

export default Menu

//map through the array and render each element