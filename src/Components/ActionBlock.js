import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Gallery from 'Blocks/Gallery'

const LeftContainer = styled.div`
  grid-column: 2 / 3;
  padding-right: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(10)};
  align-self: center;
`

const RightContainer = styled.div`
  grid-column: 3 / -1;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 850px;
`

const ActionBlock = ({
  title,
  body,
  images,
  buttonType = 'button',
  buttonProps,
  buttonLabel,
  bgColor,
  galleryDelay
}) => {
  const imageUrls = images.map(image => image.url)

  return (
    <Skewer bgColor={bgColor} noPadding>
      <Container noContentWrapper>
        <LeftContainer>
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: body }} />
          <button type="button" alt={buttonLabel}>{buttonLabel}</button>
        </LeftContainer>
        <RightContainer>
          <ImageWrapper>
            <Gallery
              images={imageUrls}
              delay={galleryDelay}
            />
          </ImageWrapper>
        </RightContainer>
      </Container>
    </Skewer>
  )
}

ActionBlock.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonType: PropTypes.oneOf(['button', 'link']),
  buttonProps: PropTypes.object,
  bgColor: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string
  })),
  galleryDelay: PropTypes.number
}

export default ActionBlock
