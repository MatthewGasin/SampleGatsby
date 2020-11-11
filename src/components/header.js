import React from "react"
import headerStyles from "../styles/header.module.css"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image";

const Header = () => {

    // Query for both header color content and quick retrieval of rocket image asset
    const data = useStaticQuery(graphql`
    query {
        allContentfulAsset(filter: {contentful_id: {eq: "1ab2Baqeq15oNLTRgCd8GY"}}) {
            nodes {
                fluid {
                ...GatsbyContentfulFluid
                }
            }
        }
        allContentfulHeaderColor {
            nodes {
                color
            }
        }
    }`);

    const iconData = data.allContentfulAsset.nodes[0];
    const headerData = data.allContentfulHeaderColor.nodes;

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.imageSeparator}>
                <div className={[headerStyles.icon, headerStyles.headerEntry].join(" ")}>
                    {iconData && (<Img fluid={iconData.fluid}/>)}
                </div>
                <div className={headerStyles.headerEntry}>
                    <ul className={headerStyles.colorsList}>
                        {headerData.map(node => {
                            return (
                                <li className={headerStyles.colorHeader} key={node.color}>
                                    {node.color}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
