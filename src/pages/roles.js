import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const data = graphql`
query {
    allWpRole {
      edges {
        node {
          name
          description
        }
      }
    }
  }
  
`

const Roles = ({data: {allWpRole: {edges}}}) => {

  return (
    <Layout>
      <div>{edges.map((item)=>{
          const player = item.node;
          return <p> {player.name} </p>
      })}</div>
    </Layout>
  )
}

export default Roles
