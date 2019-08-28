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

  @media ${props => props.theme.media.lg} {
    grid-column: 2 / 4;
    grid-row: 2;

    padding: 30vw 0;
  }

  @media ${props => props.theme.media.md} {
    padding: 30vw ${props => props.theme.spacing(2)};
  }
`

const RightContainer = styled.div`
  grid-column: 3 / -1;

  @media ${props => props.theme.media.lg} {
    grid-column: 1 / -1;
    grid-row: 1;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 60vw;

  @media ${props => props.theme.media.lg} {
    height: 130vw;
    width: 100vw;
  }
`

const Description = styled.div`
  margin: ${props => props.theme.spacing(4)} 0;
  line-height: 1.25;
  color: ${props => props.color};
`

const Title = styled.h1`
  ${props => props.theme.typography.header.mixin()}
  font-size: ${props => props.theme.typography.fontSize.md};
  margin: 0 0 ${props => props.theme.spacing(4)};
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
  buttonTextColor,
  buttonBgColor,
  galleryDelay
}) => {
  const imageUrls = images.map(image => image.url)

  return (
    <Skewer bgColor={bgColor} noPadding layer={1200}>
      <Container noContentWrapper>
        <LeftContainer>
          <Title color={textColor}>{title}</Title>
          <Description color={textColor} dangerouslySetInnerHTML={{ __html: body }} />
          <Button
            type="button"
            alt={buttonLabel}
            bgColor={buttonBgColor}
            color={buttonTextColor}
          >
            {buttonLabel}
          </Button>
        </LeftContainer>
        <RightContainer>
          <Skewer noPadding>
            <ImageWrapper>
              <Gallery
                images={imageUrls}
                delay={galleryDelay}
              />
            </ImageWrapper>
          </Skewer>
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
  buttonBgColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string
  })),
  galleryDelay: PropTypes.number
}

export default ActionBlock
