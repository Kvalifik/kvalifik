import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const Index = ({ data }) => {
  const {
    headerTitle: title,
    headerDescription: desc,
    headerIcon: {
      url: iconUrl
    }
  } = data.datoCmsHomePage

  return (
    <div>
      <img src={iconUrl} alt="header icon" />
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    datoCmsHomePage: PropTypes.shape({
      headerTitle: PropTypes.string,
      headerDescription: PropTypes.string,
      headerIcon: PropTypes.shape({
        url: PropTypes.string,
        id: PropTypes.string
      })
    })
  })
}

export const query = graphql`
  query HomeQuery {
    datoCmsHomePage {
      headerIcon {
        id
        url
      }
      headerTitle
      headerDescription
    }
  }
`

export default Index
