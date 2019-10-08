import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'Components/Layout'
import FixedSkewer from 'Components/Shared/FixedSkewer'
import DownArrow from 'Components/DownArrow'

import renderBlockType from 'utils/renderBlockType'
import 'utils/blockQuery'

const PageTemplate = ({ data }) => {
  const {
    pageSetup,
    color
  } = data.datoCmsWork

  const headerBlock = pageSetup.find(item => item.__typename === 'DatoCmsHeader')

  return (
    <Layout bgColor={color && color.hex} page={data.datoCmsWork}>
      {headerBlock && headerBlock.bgColor && (
        <DownArrow color={headerBlock.bgColor.hex} />
      )}
      <FixedSkewer
        angle="large"
        reverse
        height="1vh"
        layer={1000}
      />
      <FixedSkewer
        angle="large"
        reverse
        height="20vh"
        layer={500}
      />
      {pageSetup.map(renderBlockType)}
    </Layout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    datoCmsWork: PropTypes.shape({
      pageSetup: PropTypes.array,
      title: PropTypes.string,
      url: PropTypes.string,
      color: PropTypes.shape({
        hex: PropTypes.string
      })
    })
  })
}

export const query = graphql`
  query($url: String!) {
    datoCmsWork(url: { eq: $url }) {
      url
      color {
        hex
      }
      pageSetup {
        __typename
        ...HeaderFragment
        ...ActionBlockFragment
        ...SloganFragment
        ...PercentageBlockFragment
        ...CaseInfoFragment
        ...OverlayBlockFragment
        ...QuoteBlockFragment
      }
      seoMetaTags {
        tags
      }
    }
  }
`

export default PageTemplate
