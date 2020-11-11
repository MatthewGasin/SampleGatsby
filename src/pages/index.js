import React from "react"

import Layout from "../components/layout"
import CardList from "../components/card-list"


const IndexPage = () => (
    <Layout>
        <h1>I ♥ Color</h1>
        <p>Color really isn't that difficult to get right, if you know where to start.<br/>
        Learn by doing and you'll be a master in no time.</p>
        <button>Over to you</button>
        <CardList></CardList>
    </Layout>
)

export default IndexPage
