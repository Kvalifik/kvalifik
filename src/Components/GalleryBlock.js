import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import JustifiedGrid from 'Components/Shared/JustifiedGrid'

const Root = styled.div`
  &::after {
    clear: both;
    display: table;
    content: "";
  }
`

const Title = styled.h2`
  ${props => props.theme.typography.header.mixin()}
  font-size: ${props => props.theme.typography.fontSize.md};
  margin: 0 0 ${props => props.theme.spacing(4)};
  color: white;
`

class ImageBlock extends Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  render () {
    const {
      bgColor,
      gridImages,
      imageGridRows,
      title
    } = this.props

    const mappedGridImages = gridImages && gridImages.map(i => ({
      src: i.url,
      width: Math.round(i.width / 10),
      height: Math.round(i.height / 10)
    }))

    return (
      <Skewer bgColor={bgColor} layer={1200}>
        <Container>
          <Root>
            {title && (
              <Title>{title}</Title>
            )}
            {gridImages && gridImages.length > 0 && (
              <JustifiedGrid
                images={mappedGridImages}
                rows={imageGridRows}
                gutter="16px"
              />
            )}
          </Root>
        </Container>
      </Skewer>
    )
  }
}

ImageBlock.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
  gridImages: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  })),
  imageGridRows: PropTypes.number
}

export default ImageBlock
