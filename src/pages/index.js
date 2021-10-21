import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
        <div className="hero-text">
          <h1 className="hero-h1">Robert Aguilar</h1>
          <p className="hero-para">React/Shopify  Developer </p>
        </div>
        <div className="hero-picture"></div>
    </div>
    
    
    <p>
      <Link to="/page-2/">page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
