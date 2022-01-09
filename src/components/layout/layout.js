import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header/header"
import "./layout.css"
import Footer from "../footer/footer"

const Layout = ({ pageTitle,  children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layoutDiv">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div className="titleDiv">
          <div className="title"> {pageTitle} </div>
      </div>

      <div className="mainDiv" >
        <main>{children}</main>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout;
