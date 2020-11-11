import React from "react"
import Card from "./card";
import cardListStyles from "../styles/card-list.module.css"
import {useStaticQuery, graphql} from "gatsby"

const CardList = () => {
    // Query for the three Color Card content items
    const cardData = useStaticQuery(graphql`
    query {
        allContentfulColorCard(limit: 3) {
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
        // Loop through the content to create 3 list items (confirmed length from GraphQL query)
        <ul className={cardListStyles.cardList}>
            {cardData.allContentfulColorCard.nodes.map(node => {
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
