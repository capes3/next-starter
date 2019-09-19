import css from "../components/carousel.css"
import Link from "next/link"


function Card ({ img,key,link,service }) {

    return (
        <div>
        <div className={css.image}>
            <img src={ img }/>
            <Link>
            <a href={ link }>
                <h2>
                    {service}
                </h2>
            </a>
            </Link>
        </div>
        </div>
    )
  }

export default Card