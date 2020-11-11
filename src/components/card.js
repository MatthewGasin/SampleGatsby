import React from "react"
import cardStyles from "../styles/card.module.css"
import Img from "gatsby-image";

// Component for a single Color Card, with data passed from Card List
const Card = (props) => {
    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.image}>
                {props.image && ( <Img fluid={props.image.fluid}/> )}
            </div>
            <div>
                <p className={cardStyles.cardTitle}>{props.title}</p>
            </div>
            <div>
                <p className={cardStyles.cardText}>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;
