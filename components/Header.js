import Link from "next/link"
import Hamburger from "../components/Hamburger"
import Head from "next/head"
import css from "../components/header.css"
import MenuIcon from "../components/MenuIcon"


//put in state here that controls whether the menu is open and which menu icon displays with a boolean then probably pass state down to a
//menu component that conditionally renders the menu based on what that boolean is.  
//think through how an abstract nested menu needs to be built.  

const Header = () => (
    <div>
    <div className={css.contactBar}>
        <div className={css.phone}>
            (435)257-7333
        </div>
        <div className={css.social}>
            follow us on:
        </div>
    </div>
    <div className={css.headerWrapper}>
        <div className={css.logoWrapper}>
            <img className={css.logo} src={"../static/RuppsLogo-WhiteBorder.png"}/>
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
                <a href="/services">Services</a>
            </Link>
            <Link>
                <a href="/projects">Projects</a>
            </Link>
            <Link>
                <a className={css.contactButton}href="/contact">Contact</a>
            </Link>
        </div>
        <div className={css.hamburgerContainer}>
            <MenuIcon/>
        </div>
    </div>
    </div>
)

export default Header 