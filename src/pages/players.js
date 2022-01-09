import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

export const data = graphql`
    query {
        allWpPlayer {
            edges {
              node {
                slug
                playersMeta {
                    firstname
                    lastname
                    playertag
                    description
                    profileImage {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED)
                            }
                        }
                    }
                    primaryWeapon
                }
                roles {
                    nodes {
                        name
                    }
                }
              }
            }
        }
    }
`;


const Roles = ({data: {allWpPlayer: {edges}}}) => { 
    return (
        <Layout>
            {
                edges.map((item)=>{
                    return  <GatsbyImage image={getImage(item.node.playersMeta.profileImage.localFile)} alt={item.node.playersMeta.playertag} />
                })
            }
        </Layout>
    )
}

export default Roles;