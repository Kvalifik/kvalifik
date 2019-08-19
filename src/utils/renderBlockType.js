import React from 'react'
import CaseGrid from 'Components/CaseGrid'
import CaseThump from 'Components/CaseThump'
import ActionBlock from 'Components/ActionBlock'
import HeaderBlock from 'Components/HeaderBlock'
import SloganBlock from 'Components/SloganBlock'
import Toolbox from 'Components/Toolbox'
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
