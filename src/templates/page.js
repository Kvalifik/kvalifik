import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'Components/Layout'
import FixedSkewer from 'Blocks/FixedSkewer'
import DownArrow from 'Blocks/DownArrow'

import { contentPropType } from 'blockTypes/content'
import renderBlockType from 'utils/renderBlockType'
import 'utils/contentQuery'

const PageTemplate = ({ data }) => {
  const {
    showSkewer,
    showDownArrow,
    downArrowColor: {
      hex: downArrowColor
    },
    content
  } = data.datoCmsPage

  return (
    <Layout>
      {showDownArrow && (
        <DownArrow color={downArrowColor} />
      )}
      {showSkewer && (
        <FixedSkewer
          angle="large"
          reverse
          height="30px"
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
      ...ContentFragment
    }
  }
`

export default PageTemplate
