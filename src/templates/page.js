import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'Components/Layout'
import FixedSkewer from 'Blocks/FixedSkewer'

import { contentPropType } from 'blockTypes/content'
import renderBlockType from 'utils/renderBlockType'
import 'utils/contentQuery'

const PageTemplate = ({ data }) => {
  const {
    showSkewer,
    content
  } = data.datoCmsPage

  return (
    <Layout>
      {showSkewer && (
        <FixedSkewer
          angle="large"
          reverse
          height="30px"
        />
      )}
      {content.map(renderBlockType)}
    </Layout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    datoCmsPage: PropTypes.shape({
      content: contentPropType,
      showSkewer: PropTypes.bool
    })
  })
}

export const query = graphql`
  query($url: String!) {
    datoCmsPage(url: { eq: $url }) {
      showSkewer
      ...ContentFragment
    }
  }
`

export default PageTemplate
