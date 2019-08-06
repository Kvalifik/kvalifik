import React from "react"
import { graphql } from 'gatsby'

export default ({ data }) => {
  const {
    landingHeader: header,
    landingSubheader: subheader
  } = data.datoCmsHomePage

  return (
    <div>
      <h1>{header}</h1>
      <p>{subheader}</p>
    </div>
  )
}

export const query = graphql`
  query HomeQuery {
    datoCmsHomePage {
      landingHeader
      landingSubheader
    }
  }
`
