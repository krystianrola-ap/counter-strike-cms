import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/layout"
import {playerDiv, imageStyle, title, roleNames, 
    roleName, playerInfo, playerExtraInfo, playerInfoItem} from "./playerSlug.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const data = graphql`
query ($slug: String) {
    wpPlayer(slug: {eq: $slug}) {
        slug
        playersMeta {
            firstname
            lastname
            playertag
            description
            primaryWeapon
            rating
            team
            role {
                name
            }
            profileImage {
                localFile {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
            }
        }
    }
  }
`

const Roles = ({data: {wpPlayer: {playersMeta}}}) => {
  return (
    <Layout pageTitle={playersMeta.playertag}>
        <div className={playerDiv}>
            <div className={playerInfo}>
                <h1 className={title}> {playersMeta.firstname} {playersMeta.lastname} </h1>
                <p className={roleNames}>
                    {
                        playersMeta.role.map( item => {
                            return <p className={roleName}> {item.name} </p>
                        })
                    }
                </p>

                <p className={playerExtraInfo}>
                    <p className={playerInfoItem}> <span>Primary weapon: </span> {playersMeta.primaryWeapon} </p>
                    <p className={playerInfoItem}> <span>Rating: </span> {playersMeta.rating} </p>
                    <p className={playerInfoItem}> <span>Team: </span> {playersMeta.team} </p>
                </p>
            </div>
            
            <GatsbyImage 
                image={getImage(playersMeta.profileImage.localFile)} 
                alt={playersMeta.playertag} 
                className={imageStyle}                
            />
            
        </div>
    </Layout>
  )
}

export default Roles
