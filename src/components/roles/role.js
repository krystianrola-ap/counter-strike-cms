import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { imageDiv, imageStyle, descriptionStyle } from "./role.module.css"

const Role = ({  role }) => {

// Het stukje code met switch hoort bij de StaticImage die niet wil werken.
// Ik wil er later (na de examen) nog aan werken daarom wil ik het niet verwijderen.

//   let image;
//   switch (role.slug) {
//     case "awper":
//       image = "../src/images/awper.png"
//       break;
//     case "lurk":
//       image = `../../images/lurk.png`
//       break;
//     case "support":
//       image = `../../images/support.png`
//       break;
//     case "entry-fragger":
//       image = `../../images/entry-fragger.png`
//       break;
//     case "in-game-leader":
//       image = `../../images/in-game-leader.png`
//       break;

//     default:
//       image = ""
//       break;
//   }

  return (
    <div>
      <div className={imageDiv}>
        <div className={imageStyle}>
            {/* <StaticImage src={image} alt="role logo"  /> */}
            {role.name}
        </div>
      </div>
      <p className={descriptionStyle}> {role.description} </p>
    </div>
  )
}

export default Role
