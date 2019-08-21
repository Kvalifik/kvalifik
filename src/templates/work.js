import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'Components/Layout'

import { contentPropType } from 'blockTypes/content'
import renderBlockType from 'utils/renderBlockType'
import 'utils/contentQuery'

const WorkPageTemplate = ({ data }) => {
  const {
    page
  } = data.datoCmsWork

  return (
    <Layout>
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
