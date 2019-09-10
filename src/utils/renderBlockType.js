import React from 'react'
import CaseGrid from 'Components/CaseGrid'
import CaseThump from 'Components/CaseThump'
import ActionBlock from 'Components/ActionBlock'
import HeaderBlock from 'Components/HeaderBlock'
import SloganBlock from 'Components/SloganBlock'
import Toolbox from 'Components/Toolbox'
import ToolboxBig from 'Components/ToolboxBig'
import OverlayBlock from 'Components/OverlayBlock'
import CaseInfoBlock from 'Components/CaseInfo'
import PercentageBlock from 'Components/PercentageBlock'
import QuoteBlock from 'Components/QuoteBlock'
import People from 'Components/People'
import NotFound from 'Components/NotFound'
import theme from 'utils/theme'
import FiftyFifty from 'Components/FiftyFifty'

export default (block) => {
  switch (block.__typename) {
    case 'DatoCmsHeader': {
      const mediaType = block.media ? block.media.__typename : null
      let imageUrl = null
      let videoUrl = null

      switch (mediaType) {
        case 'DatoCmsImage':
          imageUrl = block.media.image.url
          break
        case 'DatoCmsVideo':
          imageUrl = block.media.thumbnail.url
          videoUrl = block.media.video.url
          break
        default:
          imageUrl = null
          videoUrl = null
      }

      return (
        <HeaderBlock
          key={block.id}
          title={block.title}
          body={block.description}
          iconUrl={block.icon && block.icon.url}
          bgColor={block.bgColor.hex}
          videoUrl={videoUrl}
          imageUrl={imageUrl}
        />
      )
    }
    case 'DatoCmsCaseGrid':
      return (
        <CaseGrid
          key={block.id}
          hasMoreWork={!!block.moreWorkPage}
          bgColor={theme.palette.dark}
          moreWorkUrl={block.moreWorkPage && block.moreWorkPage.url}
        >
          {block.cases.map(work => (
            <CaseThump
              key={work.id}
              name={work.forWho}
              description={work.description}
              bgUrl={work.image.url}
              bgColor={work.color.hex}
              fullWidth={work.fullSize}
              workUrl={work.page && work.page.url}
            />
          ))}
        </CaseGrid>
      )
    case 'DatoCmsSlogan':
      return (
        <SloganBlock
          bgColor={block.bgColor && block.bgColor.hex}
          content={block.punchline}
          key={block.id}
        />
      )
    case 'DatoCmsFiftyFifty':
      return (
        <FiftyFifty
          key={block.id}
          bgColor={block.bgColor && block.bgColor.hex}
          description={block.description}
          flip={block.flip}
          header={block.header}
          mediaUrl={block.media.url}
        />
      )
    case 'DatoCmsAction':
      return (
        <ActionBlock
          key={block.id}
          title={block.title}
          body={block.description}
          button={block.buttonLink}
          images={block.images}
          bgColor={block.bgColor.hex}
          textColor={block.textColor.hex}
          buttonBgColor={block.buttonBgColor.hex}
          buttonTextColor={block.buttonTextColor.hex}
          galleryDelay={block.imageDelay}
        />
      )
    case 'DatoCmsToolbox':
      return (
        <Toolbox
          key={block.id}
          tools={block.tools}
          bgColor={block.bgColor && block.bgColor.hex}
        />
      )
    case 'DatoCmsToolboxBig':
      return (
        <ToolboxBig
          key={block.id}
          sideText={block.sideText}
          tools={block.tools}
          backgroundColor={block.backgroundColor && block.backgroundColor.hex}
          toolFilters={block.toolFilters}
          smallDescription={block.smallDescription}
        />
      )
    case 'DatoCmsOverlay':
      return (
        <OverlayBlock
          key={block.id}
          title={block.title}
          description={block.description}
          bgColor={block.bgColor.hex}
          imageUrl={block.image.url}
        />
      )
    case 'DatoCmsCaseInfo': {
      const {
        buttonLink,
        id,
        bgColor,
        video,
        accentColor,
        ...others
      } = block
      return (
        <CaseInfoBlock
          key={block.id}
          button={block.buttonLink}
          thumbnailUrl={video ? video.thumbnail.url : ''}
          videoUrl={video ? video.video.url : ''}
          bgColor={bgColor.hex}
          accentColor={accentColor.hex}
          {...others}
        />
      )
    }
    case 'DatoCmsPercentage':
      return (
        <PercentageBlock
          key={block.id}
          duration={block.duration}
          bgColor={block.bgColor && block.bgColor.hex}
          description={block.description}
          number={block.number}
        />
      )
    case 'DatoCmsQuote':
      return (
        <QuoteBlock
          key={block.id}
          author={block.author}
          quote={block.quote}
          bgColor={block.bgColor.hex}
          imageUrl={block.image.url}
        />
      )
    case 'DatoCmsPeopleBlock':
      return (
        <People
          key={block.id}
          title={block.title}
          description={block.description}
          word={block.word}
          pronounce={block.pronounce}
          employees={block.employees}
        />
      )
    case 'DatoCms404':
      return (
        <NotFound
          key={block.id}
          button={block.buttonLink}
          logoUrl={block.logo && block.logo.url}
          description={block.description}
          title={block.title}
          imageUrl={block.image && block.image.url}
        />
      )
    default:
      return null
  }
}
