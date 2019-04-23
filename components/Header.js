import Link from "next/link"
import Hamburger from "../components/Hamburger"
import Head from "next/head"
import css from "../components/header.css"
import MenuIcon from "../components/MenuIcon"


//put in state here that controls whether the menu is open and which menu icon displays with a boolean then probably pass state down to a
//menu component that conditionally renders the menu based on what that boolean is.  
//think through how an abstract nested menu needs to be built.  

const Header = () => (
    <div className={css.headerWrapper}>
        <div className={css.logo}>
            Logo
        </div>
        {/* This div will be hidden on mobile */}
        <div className={css.linkWrapper}>
            <Link>
                <a href="/">Home</a>
            </Link>
            <Link>
                <a href="/about">About</a>
            </Link>
            <Link>
                <a href="/contact">Contact</a>
            </Link>
            <Link>
                <a href="/services">Services</a>
            </Link>
        </div>
        <div className={css.hamburgerContainer}>
            <MenuIcon/>
        </div>
    </div>
)

export default Header 