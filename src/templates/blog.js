import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'Components/Layout'
import FixedSkewer from 'Components/Shared/FixedSkewer'
import DownArrow from 'Components/DownArrow'

import renderBlockType from 'utils/renderBlockType'
import 'utils/blockQuery'
import BackArrow from '../Components/Shared/BackArrow'

const PageTemplate = ({ data }) => {
  const {
    pageSetup,
    color
  } = data.datoCmsBlog

  const headerBlock = pageSetup.find(item => item.__typename === 'DatoCmsHeader')

  return (
    <Layout bgColor={color && color.hex} page={data.datoCmsBlog}>
      <BackArrow backText="Back to blog" />
      {headerBlock && headerBlock.bgColor && (
        <DownArrow color={color && color.hex} />
      )}
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
    datoCmsBlog: PropTypes.shape({
      pageSetup: PropTypes.array,
      title: PropTypes.string,
      url: PropTypes.string,
      date: PropTypes.string,
      color: PropTypes.shape({
        hex: PropTypes.string
      })
    })
  })
}

export const query = graphql`
  query($url: String!) {
    datoCmsBlog(url: { eq: $url }) {
      url
      color {
        hex
      }
      meta {
        publishedAt(formatString: "DD MMMM, YYYY")
      }
      pageSetup {
        __typename
        ...BlogHeaderFragment
        ...ActionBlockFragment
        ...SloganFragment
        ...RichtextFragment
        ...GalleryFragment
        ...MediaFragment
        ...PercentageBlockFragment
        ...QuoteBlockFragment
      }
      seoMetaTags {
        tags
      }
    }
  }
`

export default PageTemplate
