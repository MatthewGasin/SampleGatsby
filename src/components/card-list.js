import React from "react"
import Card from "./card";
import cardListStyles from "../styles/card-list.module.css"
import {useStaticQuery, graphql} from "gatsby"

const CardList = () => {
    // Query for the three Color Card items
    const cardData = useStaticQuery(graphql`
    query {
        allContentfulColorCard {
            nodes {
                title
                    image {
                        fluid(maxWidth: 300) {
                            ...GatsbyContentfulFluid
                        }
                    }
            description {
                    description
                }
            }
        }
    }`)

    return (
        <ul className={cardListStyles.cardList}>
            { cardData.allContentfulColorCard.nodes.map(node => {
                return (
                    <li className={cardListStyles.cardItem} key={node.title}>
                        <Card image={node.image} title={node.title} description={node.description.description}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default CardList;
