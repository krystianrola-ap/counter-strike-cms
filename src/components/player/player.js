import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { playerDiv, imageStyle,title } from "./player.module.css"

const Player = ({  player }) => {

    const image = getImage(player.node.playersMeta.profileImage.localFile);

  return (
    <Link to={player.node.slug}>
        <div className={playerDiv}>
        <GatsbyImage 
            image={image} 
            alt={player.node.playersMeta.playertag} 
            className={imageStyle}                
        />
        <p className={title}> { player.node.playersMeta.playertag } </p>
    </div>
    </Link>
    
  )
}

export default Player 