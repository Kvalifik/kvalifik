import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import Gallery from 'Components/Shared/Gallery'
import Button from 'Components/Shared/Button'
import Padder from 'Components/Shared/Padder'

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

const Description = styled.div`
  margin: ${props => props.theme.spacing(4)} 0;
  line-height: 1.25;
  color: ${props => props.color};
`

const Title = styled.h2`
  ${props => props.theme.typography.header.mixin()}
  font-size: ${props => props.theme.typography.fontSize.md};
  margin: 0 0 ${props => props.theme.spacing(4)};
  color: ${props => props.color};
`

const ActionBlock = ({
  title,
  body,
  images,
  button,
  bgColor,
  textColor,
  buttonTextColor,
  buttonBgColor,
  galleryDelay
}) => {
  const imageUrls = images.map(image => image.url)
  return (
    <Skewer bgColor={bgColor} noPadding={images.length > 0} layer={1200}>
      <Padder innerPadding={images.length > 0 ? 0 : '50px'}>
        <Container noContentWrapper>
          <LeftContainer>
            <Title color={textColor}>{title}</Title>
            <Description color={textColor} dangerouslySetInnerHTML={{ __html: body }} />
            <Button
              alt={button.name}
              bgColor={buttonBgColor}
              color={buttonTextColor}
              to={button.path}
              type="link"
              isExternal={button.isExternal}
            >
              {button.name}
            </Button>
          </LeftContainer>
          {images.length > 0 && (
            <RightContainer>
              <Skewer
                height="60vw"
                renderBgImage={() => (
                  <Gallery
                    images={imageUrls}
                    delay={galleryDelay}
                  />
                )}
              />
            </RightContainer>
          )}
        </Container>
      </Padder>
    </Skewer>
  )
}

ActionBlock.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  button: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
    isExternal: PropTypes.bool
  }),
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
