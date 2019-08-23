import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'Components/Layout'
import FixedSkewer from 'Blocks/FixedSkewer'
import DownArrow from 'Components/DownArrow'

import { contentPropType } from 'blockTypes/content'
import renderBlockType from 'utils/renderBlockType'
import 'utils/contentQuery'

const WorkPageTemplate = ({ data }) => {
  const {
    page
  } = data.datoCmsWork

  const headerBlock = page.find(item => item.__typename === 'DatoCmsBlockHeader')

  return (
    <Layout>
      {headerBlock && headerBlock.bgColor && (
        <DownArrow color={headerBlock.bgColor.hex} />
      )}
      <FixedSkewer
        angle="large"
        reverse
        height="30px"
        layer={1000}
      />
      {page.map(renderBlockType)}
    </Layout>
  )
}

WorkPageTemplate.propTypes = {
  data: PropTypes.shape({
    datoCmsWork: PropTypes.shape({
      page: contentPropType,
      showSkewer: PropTypes.bool
    })
  })
}

export const query = graphql`
  query($url: String!) {
    datoCmsWork(url: { eq: $url }) {
      ...WorkPageContentFragment
    }
  }
`

export default WorkPageTemplate
