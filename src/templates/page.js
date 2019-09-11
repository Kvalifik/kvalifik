import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'Components/Layout'
import FixedSkewer from 'Blocks/FixedSkewer'
import DownArrow from 'Components/DownArrow'

import { pagePropType } from 'models/page'
import renderBlockType from 'utils/renderBlockType'
import 'utils/pageQuery'

const PageTemplate = ({ data }) => {
  const {
    pageSetup,
    title,
    url,
    bgColor
  } = data.datoCmsPage

  const headerBlock = pageSetup.find(item => item.__typename === 'DatoCmsHeader')

  return (
    <Layout bgColor={bgColor && bgColor.hex}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={`https://kvalifik.dk${url}`} />
      </Helmet>
      {headerBlock && headerBlock.bgColor && (
        <DownArrow color={headerBlock.bgColor.hex} />
      )}
      <FixedSkewer
        angle="large"
        reverse
        height="5vh"
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
    datoCmsPage: pagePropType
  })
}

export const query = graphql`
  query($url: String!) {
    datoCmsPage(url: { eq: $url }) {
      ...PageFragment
    }
  }
`

export default PageTemplate
