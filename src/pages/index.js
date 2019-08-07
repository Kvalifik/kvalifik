import 'normalize.css'
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import ActionBlock from 'Components/ActionBlock'

const Index = ({ data }) => {
  const {
    contactTitle,
    contactButtonText,
    contactDescription
  } = data.datoCmsHomePage

  return (
    <div>
      <ActionBlock
        title={contactTitle}
        body={contactDescription}
        buttonLabel={contactButtonText}
        buttonType="button"
      />
    </div>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    datoCmsHomePage: PropTypes.shape({
      contactTitle: PropTypes.string,
      contactButtonText: PropTypes.string,
      contactDescription: PropTypes.string
    })
  })
}

export const query = graphql`
  query HomeQuery {
    datoCmsHomePage {
      contactTitle
      contactDescription
      contactButtonText
    }
  }
`

export default Index
