import 'normalize.css'
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'Components/Layout'
import FixedSkewer from 'Blocks/FixedSkewer'

import { contentPropType } from 'blockTypes/content'
import renderBlockType from 'utils/renderBlockType'
import 'utils/contentQuery'

const Index = ({ data }) => {
  const {
    content,
    hasSkewer
  } = data.datoCmsHomePageNew

  return (
    <Layout>
      {hasSkewer && (
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

Index.propTypes = {
  data: PropTypes.shape({
    datoCmsHomePageNew: PropTypes.shape({
      content: contentPropType,
      hasSkewer: PropTypes.bool
    })
  })
}

export const query = graphql`
  query HomeQuery {
    datoCmsHomePageNew {
      hasSkewer
      ...ContentFragment
    }
  }
`

export default Index
