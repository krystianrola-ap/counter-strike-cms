import * as React from 'react';
import Layout from '../components/layout/layout';
import { graphql } from "gatsby"
import Player from '../components/player/player';
import {playersContainer} from "./players.module.css"

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


const Players = ({data: {allWpPlayer: {edges}}}) => { 
    return (
        <Layout pageTitle={"Players"}>
            <div className={playersContainer}>
            {
                edges.map((item)=>{
                    return  <Player player={item}/>
                })
            }
            </div>
        </Layout>
    )
}

export default Players;