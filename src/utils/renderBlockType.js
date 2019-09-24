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
import ServicesBlock from 'Components/ServicesBlock'
import ServicesBig from 'Components/ServicesBig'
import Stepper from 'Components/Stepper'
import FiftyFifty from 'Components/FiftyFifty'

import theme from 'utils/theme'

export default (block) => {
  switch (block && block.__typename) {
    case 'DatoCmsHeader': {
      const imageUrl = block.media.image.url
      const videoUrl = block.media.video && block.media.video.url

      return (
        <HeaderBlock
          key={block.id}
          title={block.title}
          body={block.description}
          iconUrl={block.icon && block.icon.url}
          bgColor={block.bgColor && block.bgColor.hex}
          textColor={block.textColor && block.textColor.hex}
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
              workUrl={work.url}
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
          mediaUrl={block.media && block.media.url}
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
          moreToolsButton={block.moreToolsButton}
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
          thumbnailUrl={video ? video.image.url : ''}
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
    case 'DatoCmsStepper':
      return (
        <Stepper
          key={block.id}
          steps={block.steps}
        />
      )
    case 'DatoCmsServicesBlock': {
      return (
        <ServicesBlock
          key={block.id}
          services={block.services}
          buttonLink={block.buttonLink}
          bgColor={block.bgColor && block.bgColor.hex}
        />
      )
    }
    case 'DatoCmsServicesBig': {
      return (
        <ServicesBig
          key={block.id}
          services={block.services}
          toolboxPage={block.toolboxPage}
        />
      )
    }
    default:
      return null
  }
}
