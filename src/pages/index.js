import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import {homeImageDiv,homeImage, descriptionStyle, featuredTitle, title,titleContainer,featuredPlayers,featuredPlayer} from "./home.module.css";
import Player from '../components/player/player';
import Layout from "../components/layout/layout"

export const data = graphql`
  query {
    wpPage (slug: {eq: "home"}) {
      homePage {
        description
        featuredPlayers {
          player {
            ... on WpPlayer {
              id
              playersMeta {
                playertag
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
        }
      }
    }
  }

`

const IndexPage = ({ data :{wpPage : { homePage }} }) => (
  <main>
    <Layout pageTitle={"Home"}>
      <div className={homeImageDiv}>
        <p className={descriptionStyle}>
          {homePage.description}
        </p>
        <StaticImage
          alt="cs logo"
          src="../images/CS.jpg"
          className={homeImage}
        />
      </div>
      <div className={titleContainer}>
        <div className={featuredTitle}>
          <div className={title}> Featured Players  </div>
        </div>
      </div>
      <div className={featuredPlayers}>
        {
          homePage.featuredPlayers.player.map( item => {
            return (
              <div className={featuredPlayer}> 
                  {/* <GatsbyImage 
                      image={getImage(item.playersMeta.profileImage.localFile)} 
                      alt={item.playersMeta.playertag}           
                  /> */}
              </div>
            )
          })
        }
      </div>
  </Layout>
  </main>
)

export default IndexPage
