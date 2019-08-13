import 'normalize.css'
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Main from 'Components/Main'
import CaseGrid from 'Blocks/CaseGrid'
import CaseThump from 'Blocks/CaseThump'
import ActionBlock from 'Components/ActionBlock'
import HeaderBlock from 'Components/HeaderBlock'
import FixedSkewer from 'Blocks/FixedSkewer'

import theme from 'utils/theme'

/* Import from cms */
import bg from 'graphics/test.jpeg'
import bg2 from 'graphics/test2.jpeg'
import bg3 from 'graphics/test3.jpeg'

const Index = ({ data }) => {
  const {
    headerTitle,
    headerDescription,
    headerIcon,
    headerMedia,
    contactTitle,
    contactButtonText,
    contactDescription,
    contactImages,
    contactImageDelay
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
      <FixedSkewer
        angle="large"
        reverse
        height="30px"
      />
      <CaseGrid fadeBottom bgColor={'#1d1d1d'}>
        <CaseThump
          name="Have A Look"
          description="el preben hmm"
          bgUrl={bg}
          bgColor="rgb(163, 241, 255)"
        />
        <CaseThump
          name="Andet"
          bgUrl={bg2}
        />
        <CaseThump
          fullWidth
          name="Andet"
          description="don trippa shu"
          bgUrl={bg3}
        />
        <CaseThump
          name="Have A Look"
          description="el preben hmm"
          bgUrl={bg2}
          bgColor="rgb(163, 241, 255)"
        />
        <CaseThump
          name="Have A Look"
          description="el preben hmm"
          bgUrl={bg}
          bgColor="rgb(163, 241, 255)"
        />
        <CaseThump
          fullWidth
          name="Have A Look"
          description="el preben hmm"
          bgUrl={bg3}
          bgColor="rgb(163, 241, 255)"
        />
      </CaseGrid>
      <ActionBlock
        title={contactTitle}
        body={contactDescription}
        buttonLabel={contactButtonText}
        buttonType="button"
        images={contactImages}
        bgColor={theme.palette.primary.B}
        galleryDelay={contactImageDelay}
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
      })),
      contactImageDelay: PropTypes.number
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
      contactImageDelay
    }
  }
`

export default Index
