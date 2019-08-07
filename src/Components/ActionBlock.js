import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Gallery from 'Blocks/Gallery'

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

const LeftContainer = styled.div`
  grid-column: 1 / 2;
  padding: 35% ${props => props.theme.spacing(10)} 0 0;
`

const RightContainer = styled.div`
  grid-column: 2 / 3;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 650px;
`

const ActionBlock = ({
  title,
  body,
  images,
  buttonType = 'button',
  buttonProps,
  buttonLabel,
  bgColor = 'lightblue'
}) => {
  const imageUrls = images.map(image => image.url)

  return (
    <Skewer bgColor={bgColor} angle={4} reverse noPadding>
      <Container>
        <Content>
          <LeftContainer>
            <h1>{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: body }} />
            <button type="button" alt={buttonLabel}>{buttonLabel}</button>
          </LeftContainer>
          <RightContainer>
            <Gallery
              images={imageUrls}
              WrapperComponent={ImageWrapper}
              delay={5000}
            />
          </RightContainer>
        </Content>
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
  }))
}

export default ActionBlock
