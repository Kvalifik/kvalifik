import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const Index = ({ data }) => {
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

Index.propTypes = {
  data: PropTypes.shape({
    datoCmsHomePage: PropTypes.shape({
      landingHeader: PropTypes.string,
      landingSubheader: PropTypes.string
    })
  })
}

export const query = graphql`
  query HomeQuery {
    datoCmsHomePage {
      landingHeader
      landingSubheader
    }
  }
`

export default Index
