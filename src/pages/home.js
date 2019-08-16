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
import Toolbox from 'Components/Toolbox'
import FixedSkewer from 'Blocks/FixedSkewer'

import theme from 'utils/theme'
import { headerPropType } from 'blockTypes/header'
import { actionblockPropType } from 'blockTypes/actionblock'
import { casegridPropType } from 'blockTypes/casegrid'
import { sloganblockPropType } from 'blockTypes/sloganblock'

const renderBlockType = (block) => {
  switch (block.__typename) {
    case 'DatoCmsBlockHeader':
      return (
        <HeaderBlock
          key={block.id}
          title={block.title}
          body={block.description}
          iconUrl={block.icon.url}
          bgColor={theme.palette.primary.C}
          videoUrl={block.video.url}
          videoThumbUrl={block.videoThumbnail.url}
        />
      )
    case 'DatoCmsBlockCaseGrid':
      return (
        <CaseGrid fadeBottom bgColor={theme.palette.dark} key={block.id}>
          {block.works.map(work => {
            return (
              <CaseThump
                key={work.id}
                name={work.forWho}
                description={work.description}
                bgUrl={work.image.url}
                bgColor={work.color.hex}
                fullWidth={work.fullSize}
              />
            )
          })}
        </CaseGrid>
      )
    case 'DatoCmsBlockSlogan':
      return (
        <SloganBlock bgColor={block.bgColor.hex} content={block.punchline} key={block.id} />
      )
    case 'DatoCmsBlockAction':
      return (
        <ActionBlock
          key={block.id}
          title={block.title}
          body={block.description}
          buttonLabel={block.buttonText}
          buttonType="button"
          images={block.images}
          bgColor={block.bgColor.hex}
          textColor={block.textColor.hex}
          galleryDelay={block.imageDelay}
        />
      )
    case 'DatoCmsBlockToolbox':
      return (
        <Toolbox key={block.id} />
      )
  }
}

const Index = ({ data }) => {
  const {
    content,
    hasSkewer
  } = data.datoCmsHomePageNew

  console.log(content)

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
    datoCmsHomePage: PropTypes.shape({
      content: PropTypes.arrayOf(PropTypes.oneOfType([
        headerPropType,
        casegridPropType,
        actionblockPropType,
        sloganblockPropType
      ])),
      hasSkewer: PropTypes.bool
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
        color: PropTypes.shape({
          hex: PropTypes.string
        }),
        image: PropTypes.shape({
          url: PropTypes.string
        })
      }))
    })
  })
}

export const query = graphql`
  query HomeQuery {
    datoCmsHomePageNew {
      hasSkewer
      content {
        __typename
        ... on DatoCmsBlockHeader {
          id
          title
          icon {
            url
          }
          video {
            url
          }
          videoThumbnail {
            url
          }
          description
        }
        ... on DatoCmsBlockCaseGrid {
          id
          works {
            title
            description
            id
            forWho
            fullSize
            date(formatString: "DD/MM-YY")
            color {
              hex
            }
            image{
              url
            }
          }
        }
        ... on DatoCmsBlockSlogan {
          id
          punchline
          bgColor {
            hex
          }
        }
        ... on DatoCmsBlockToolbox {
          id
        }
        ... on DatoCmsBlockAction {
          id
          title
          description
          buttonText
          images {
            url
          }
          imageDelay
          bgColor {
            hex
          }
          textColor {
            hex
          }
        }
      }
    }
  }
`

export default Index
