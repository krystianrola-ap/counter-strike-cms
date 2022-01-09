import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <main>
    <Layout>
    <StaticImage
      alt="cs logo"
      src="../images/CS.jpg"
    />
  </Layout>
  </main>
)

export default IndexPage
