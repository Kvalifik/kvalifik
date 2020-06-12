import React from 'react'

import CaseGrid from 'Components/CaseGrid'
import ActionBlock from 'Components/ActionBlock'
import HeaderBlock from 'Components/HeaderBlock'
import SloganBlock from 'Components/SloganBlock'
import GalleryBlock from 'Components/GalleryBlock'
import MediaBlock from 'Components/MediaBlock'
import Toolbox from 'Components/Toolbox'
import ToolboxBig from 'Components/ToolboxBig'
import OverlayBlock from 'Components/OverlayBlock'
import CaseInfoBlock from 'Components/CaseInfo'
import ProcessBlockSolo from 'Components/ProcessBlockSolo'
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
      const imageUrl = block.media.image && block.media.image.url

      return (
        <HeaderBlock
          key={block.id}
          title={block.title}
          body={block.description}
          iconUrl={block.icon && block.icon.url}
          bgColor={block.bgColor && block.bgColor.hex}
          textColor={block.textColor && block.textColor.hex}
          video={block.media.video}
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
          moreWorkLabel={block.moreWorkLabel}
          cases={block.cases}
          sideText={block.sideText}
        />
      )
    case 'DatoCmsSlogan':
      return (
        <SloganBlock
          bgColor={block.bgColor && block.bgColor.hex}
          content={block.punchline}
          key={block.id}
        />
      )
      case 'DatoCmsImageBlock':
        return (
          <GalleryBlock
            key={block.id}
            title={block.title}
            bgColor={block.bgColor && block.bgColor.hex}
            gridImages={block.gridImages}
            imageGridRows={block.imageGridRows}
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
          consoleText={block.consoleText}
          bgColor={block.bgColor && block.bgColor.hex}
          moreToolsButton={block.moreToolsButton}
          sideText={block.sideText}
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
      case 'DatoCmsProcessBlock': {
        return (
          <ProcessBlockSolo
            key={block.id}
            bgColor={block.bgColor && block.bgColor.hex}
            color={block.accentColor && block.accentColor.hex}
            labelOne={block.labelOne}
            titleOne={block.titleOne}
            descriptionOne={block.descriptionOne}
            labelTwo={block.labelTwo}
            titleTwo={block.titleTwo}
            descriptionTwo={block.descriptionTwo}
            labelThree={block.labelThree}
            titleThree={block.titleThree}
            descriptionThree={block.descriptionThree}
            buttonLink={block.buttonLink}
          />
        )
      }
      case 'DatoCmsMediaBlock': {
        return (
          <MediaBlock
            key={block.id}
            title={block.title}
            media={block.media}
            bgColor={block.bgColor}
          />
        )
      }
    case 'DatoCmsCaseInfo': {
      const {
        id,
        bgColor,
        accentColor,
        ...others
      } = block
      return (
        <CaseInfoBlock
          key={block.id}
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
          unit={block.unit}
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
          sideText={block.sideText}
          toolboxPage={block.toolboxPage}
        />
      )
    }
    case 'DatoCmsServicesBig': {
      return (
        <ServicesBig
          key={block.id}
          services={block.services}
          toolboxPage={block.toolboxPage}
          sideText={block.sideText}
        />
      )
    }
    default:
      return null
  }
}
