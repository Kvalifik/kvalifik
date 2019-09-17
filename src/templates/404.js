import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'Components/Layout'

import { pagePropType } from 'models/page'
import renderBlockType from 'utils/renderBlockType'
import 'utils/pageQuery'

const PageTemplate = ({ data }) => {
  const {
    pageSetup,
    title,
    url
  } = data.datoCmsPage

  return (
    <Layout hideFooter isGlitch page={data.datoCmsPage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={`https://kvalifik.dk${url}`} />
      </Helmet>
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
