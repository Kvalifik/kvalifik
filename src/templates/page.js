import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'Components/Layout'
import FixedSkewer from 'Blocks/FixedSkewer'
import DownArrow from 'Components/DownArrow'

import { contentPropType } from 'blockTypes/content'
import renderBlockType from 'utils/renderBlockType'
import 'utils/contentQuery'

const PageTemplate = ({ data }) => {
  const {
    showSkewer,
    showDownArrow,
    downArrowColor,
    content
  } = data.datoCmsPage

  return (
    <Layout>
      {showDownArrow && (
        <DownArrow color={downArrowColor.hex} />
      )}
      {showSkewer && (
        <FixedSkewer
          angle="large"
          reverse
          height="5vw"
          layer={1000}
        />
      )}
      {showSkewer && (
        <FixedSkewer
          angle="large"
          reverse
          height="20vw"
          layer={500}
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
      showSkewer: PropTypes.bool,
      downArrowColor: PropTypes.shape({
        hex: PropTypes.string
      }),
      showDownArrow: PropTypes.bool
    })
  })
}

export const query = graphql`
  query($url: String!) {
    datoCmsPage(url: { eq: $url }) {
      showSkewer
      showDownArrow
      downArrowColor {
        hex
      }
      ...PageContentFragment
    }
  }
`

export default PageTemplate
