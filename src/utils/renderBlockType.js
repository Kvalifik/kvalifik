import React from 'react'
import CaseGrid from 'Components/CaseGrid'
import CaseThump from 'Components/CaseThump'
import ActionBlock from 'Components/ActionBlock'
import HeaderBlock from 'Components/HeaderBlock'
import SloganBlock from 'Components/SloganBlock'
import Toolbox from 'Components/Toolbox'
import OverlayBlock from 'Components/OverlayBlock'
import CaseInfoBlock from 'Components/CaseInfo'
import theme from 'utils/theme'

export default (block) => {
  switch (block.__typename) {
    case 'DatoCmsBlockHeader':
      return (
        <HeaderBlock
          key={block.id}
          title={block.title}
          body={block.description}
          iconUrl={block.icon.url}
          bgColor={block.bgColor.hex}
          videoUrl={block.video ? block.video.url : null}
          videoThumbUrl={block.videoThumbnail.url}
        />
      )
    case 'DatoCmsBlockCaseGrid':
      return (
        <CaseGrid
          key={block.id}
          hasMoreWork={block.hasMoreWork}
          bgColor={theme.palette.dark}
          moreWorkUrl={block.moreWorkPage && block.moreWorkPage.url}
        >
          {block.works.map(work => {
            return (
              <CaseThump
                key={work.id}
                name={work.forWho}
                description={work.description}
                bgUrl={work.image.url}
                bgColor={work.color.hex}
                fullWidth={work.fullSize}
                workUrl={work.url}
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
    case 'DatoCmsBlockOverlay':
      return (
        <OverlayBlock
          key={block.id}
          title={block.title}
          description={block.description}
          bgColor={block.bgColor.hex}
          imageUrl={block.image.url}
        />
      )
    case 'DatoCmsBlockCaseInfo': {
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
          videoUrl={video ? video.url : ''}
          bgColor={bgColor.hex}
          accentColor={accentColor.hex}
          {...others}
        />
      )
    }
  }
}
