import 'normalize.css'
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Main from 'Components/Main'
import ActionBlock from 'Components/ActionBlock'
import HeaderBlock from 'Components/HeaderBlock'

import theme from 'utils/theme'

const Index = ({ data }) => {
  const {
    headerTitle,
    headerDescription,
    headerIcon,
    headerMedia,
    contactTitle,
    contactButtonText,
    contactDescription,
    contactImages
  } = data.datoCmsHomePage

  return (
    <Main>
      <HeaderBlock
        title={headerTitle}
        body={headerDescription}
        iconUrl={headerIcon.url}
        bgColor={theme.palette.primary.C}
        videoUrl={headerMedia.url}
      />
      <ActionBlock
        title={contactTitle}
        body={contactDescription}
        buttonLabel={contactButtonText}
        buttonType="button"
        images={contactImages}
        bgColor={theme.palette.primary.B}
      />
    </Main>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    datoCmsHomePage: PropTypes.shape({
      headerTitle: PropTypes.string,
      headerDescription: PropTypes.string,
      headerMedia: PropTypes.shape({
        url: PropTypes.string
      }),
      headerIcon: PropTypes.shape({
        url: PropTypes.string
      }),
      contactTitle: PropTypes.string,
      contactButtonText: PropTypes.string,
      contactDescription: PropTypes.string,
      contactImages: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string
      }))
    })
  })
}

export const query = graphql`
  query HomeQuery {
    datoCmsHomePage {
      headerTitle
      headerDescription
      headerMedia {
        url
      }
      headerIcon {
        url
      }
      contactTitle
      contactDescription
      contactButtonText
      contactImages {
        url
      }
    }
  }
`

export default Index
