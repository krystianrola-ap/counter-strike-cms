import * as React from "react"
import { graphql } from "gatsby"

export const data = graphql`
    query ($slug: String) {
        wpPlayer(slug: {eq: $slug}) {
            playersMeta {
                firstname
                lastname
                playertag
            }
        }
    }
`

const Roles = ({data: {wpPlayer: {playersMeta}}}) => {
  return (
    <p>
        {playersMeta.firstname}
    </p>
  )
}

export default Roles
