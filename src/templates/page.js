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
    bgColor,
    url
  } = data.datoCmsPage

  const headerBlock = pageSetup.find(item => item.__typename === 'DatoCmsHeader')

  return (
    <Layout bgColor={bgColor && bgColor.hex} page={data.datoCmsPage}>
      {url !== '/' && <BackArrow />}
      {headerBlock && headerBlock.bgColor && (
        <DownArrow color={headerBlock.bgColor.hex} />
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
    datoCmsPage: PropTypes.shape({
      pageSetup: PropTypes.array,
      title: PropTypes.string,
      url: PropTypes.string,
      bgColor: PropTypes.shape({
        hex: PropTypes.string
      })
    })
  })
}

export const query = graphql`
  query($url: String!) {
    datoCmsPage(url: { eq: $url }) {
      url
      bgColor {
        hex
      }
      pageSetup {
        __typename
        ...HeaderFragment
        ...ActionBlockFragment
        ...SloganFragment
        ...GalleryFragment
        ...MediaFragment
        ...ReferencelogoblockFragment
        ...CaseGridFragment
        ...BlogGridFragment
        ...ToolboxFragment
        ...ToolboxBigFragment
        ...FiftyFifty
        ...PeopleBlockFragment
        ...PerksBlockFragment
        ...ServicesBlockFragment
        ...ServicesBigFragment
        ...AvailablePosition
        ...Stepper
      }
      seoMetaTags {
        tags
      }
    }
  }
`

export default PageTemplate
