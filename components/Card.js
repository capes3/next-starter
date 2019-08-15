import css from "../components/carousel.css"


function Card ({ img,key,link }) {

    return (
        <div className={css.image}>
            <img src={ img }/>
        </div>
    )
  }

export default Card