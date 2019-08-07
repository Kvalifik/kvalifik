import 'normalize.css'
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Main from 'Components/Main'
import ActionBlock from 'Components/ActionBlock'

const Index = ({ data }) => {
  const {
    contactTitle,
    contactButtonText,
    contactDescription,
    contactImages
  } = data.datoCmsHomePage

  return (
    <Main>
      <ActionBlock
        title={contactTitle}
        body={contactDescription}
        buttonLabel={contactButtonText}
        buttonType="button"
        images={contactImages}
      />
    </Main>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    datoCmsHomePage: PropTypes.shape({
      contactTitle: PropTypes.string,
      contactButtonText: PropTypes.string,
      contactDescription: PropTypes.string,
      contactImages: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string
      }))
    })
  })
}

export const query = graphql`
  query HomeQuery {
    datoCmsHomePage {
      contactTitle
      contactDescription
      contactButtonText
      contactImages {
        url
      }
    }
  }
`

export default Index
