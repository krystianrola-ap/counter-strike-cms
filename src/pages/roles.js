import * as React from "react";
import Layout from "../components/layout/layout";
import { graphql } from "gatsby";
import Role from "../components/roles/role";

export const data = graphql`
query {
    allWpRole {
      edges {
        node {
          name
          description
          slug
        }
      }
    }
  }
`;

const Roles = ({data: {allWpRole: {edges}}}) => {

  return (
    <Layout pageTitle={"Roles"}>
      <div>{edges.map((item)=>{
          const role = item.node;
          return <Role role={role} key={role.slug}/> 
      })}</div>
    </Layout>
  )
}

export default Roles
