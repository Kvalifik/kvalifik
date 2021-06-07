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

  const {
    backButtonText
  } = data.datoCmsGeneral

  const headerBlock = pageSetup.find(item => item.__typename === 'DatoCmsHeader')

  return (
    <Layout bgColor={color && color.hex} page={data.datoCmsBlog}>
      <BackArrow backText={'Back to blog'} />
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
      author: PropTypes.shape({
          name: PropTypes.string,
          jobTitle: PropTypes.string
      }),
      url: PropTypes.string,
      date: PropTypes.string,
      color: PropTypes.shape({
        hex: PropTypes.string
      })
    }),
    datoCmsGeneral: PropTypes.shape({
      backButtonText: PropTypes.string
    })
  })
}

export const query = graphql`
  query($url: String!) {
    datoCmsGeneral {
      backButtonText
    }
    datoCmsBlog(url: { eq: $url }) {
      url
      color {
        hex
      }
      meta {
        publishedAt(formatString: "DD MMMM, YYYY")
      }
      author {
        name
        jobTitle
      }
      pageSetup {
        __typename
        ...HeaderFragment
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
