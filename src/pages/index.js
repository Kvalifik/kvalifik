import 'normalize.css'
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'Components/Layout'
import CaseGrid from 'Components/CaseGrid'
import CaseThump from 'Components/CaseThump'
import ActionBlock from 'Components/ActionBlock'
import HeaderBlock from 'Components/HeaderBlock'
import SloganBlock from 'Components/SloganBlock'
import FixedSkewer from 'Blocks/FixedSkewer'

import theme from 'utils/theme'

/* Import from cms */
import bg from 'graphics/test.jpeg'
import bg2 from 'graphics/test2.jpeg'
import bg3 from 'graphics/test3.jpeg'

const navigationItems = [
  {
    name: 'Work',
    link: '/work'
  },
  {
    name: 'Services',
    link: '/services'
  },
  {
    name: 'Toolbox',
    link: '/toolbox'
  },
  {
    name: 'Contact',
    link: '/contact'
  }
]

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
    contactImageDelay,
    punchline
  } = data.datoCmsHomePage

  const works = data.allDatoCmsWork.nodes

  return (
    <Layout>
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
        {works.map(work => {
          return (<CaseThump
            name="Have A Look"
            description="el preben hmm"
            bgUrl={bg}
            bgColor="rgb(163, 241, 255)"
            fullWidth={}
          />)
        })}

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
      <SloganBlock bgColor={theme.palette.primary.E} content={punchline} />
      <ActionBlock
        title={contactTitle}
        body={contactDescription}
        buttonLabel={contactButtonText}
        buttonType="button"
        images={contactImages}
        bgColor={theme.palette.primary.B}
        textColor={theme.palette.dark}
        galleryDelay={contactImageDelay}
      />
      <ActionBlock
        title={contactTitle}
        body={contactDescription}
        buttonLabel={contactButtonText}
        buttonType="button"
        images={contactImages}
        bgColor={theme.palette.primary.F}
        textColor={theme.palette.primary.C}
        galleryDelay={contactImageDelay}
      />
    </Layout>
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
      punchline: PropTypes.string,
      contactImageDelay: PropTypes.number
    }),
    allDatoCmsWork: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({
        headerTitle: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.string,
        forWho: PropTypes.string,
        fullSize: PropTypes.bool,
        date: PropTypes.string,
        color: PropTypes.string
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
      contactImageDelay,
      punchline
    }
    allDatoCmsWork {
      nodes {
        title
        description
        id
        forWho
        fullSize
        date(formatString: "DD/MM-YY")
        color {
          red
          green
          blue
          alpha
          rgb
          hex
        }
      }
    }
  }
`

export default Index
