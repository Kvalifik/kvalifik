import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Gallery from 'Blocks/Gallery'
import Button from 'Blocks/Button'

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

const Description = styled.p`
  margin: ${props => props.theme.spacing(4)} 0;
  line-height: 1.25;
  color: ${props => props.color};
`

const Title = styled.h1`
  ${props => props.theme.typography.header.mixin()}
  font-size: ${props => props.theme.typography.fontSize.md};
  margin: ${props => props.theme.spacing(4)} 0;
  color: ${props => props.color};
`

const ActionBlock = ({
  title,
  body,
  images,
  buttonType = 'button',
  buttonProps,
  buttonLabel,
  bgColor,
  textColor,
  galleryDelay
}) => {
  const imageUrls = images.map(image => image.url)

  return (
    <Skewer bgColor={bgColor} noPadding>
      <Container noContentWrapper>
        <LeftContainer>
          <Title color={textColor}>{title}</Title>
          <Description color={textColor} dangerouslySetInnerHTML={{ __html: body }} />
          <Button
            type="button"
            alt={buttonLabel}
            bgColor={textColor}
            color={bgColor}
          >
            {buttonLabel}
          </Button>
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
  textColor: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string
  })),
  galleryDelay: PropTypes.number
}

export default ActionBlock
