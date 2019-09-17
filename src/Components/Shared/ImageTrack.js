import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import rightArrow from 'graphics/rightArrow.svg'
import leftArrow from 'graphics/leftArrow.svg'

const ImageItem = styled.img`
  height: ${props => props.height || '400px'};
`

const Track = styled.div`
  left: ${props => props.offset || 0}px;
  top: 0;
  position: absolute;
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  display: flex;
  flex-wrap: nowrap;
`

const OverlayBase = styled.button`
  border: 0;
  outline: none;
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  width: 20%;
  height: 100%;
  top: 0;
  position: absolute;
  opacity: 0;
  cursor: pointer;
`

const OverlayRight = styled(OverlayBase)`
  background:
    linear-gradient(
      to right, transparent,
      rgba(0, 0, 0, 0.5)
    ), url(${rightArrow});
  background-position: top left, 80% 50%;
  background-size: 100% 100%, 40px 40px;
  background-repeat: no-repeat;
  right: 0;
`

const OverlayLeft = styled(OverlayBase)`
  background:
    linear-gradient(
      to left, transparent,
      rgba(0, 0, 0, 0.5)
    ), url(${leftArrow});
  background-position: top left, 20% 50%;
  background-size: 100% 100%, 40px 40px;
  background-repeat: no-repeat;
  left: 0;
`

const Root = styled.div`
  position: relative;
  height: ${props => props.height || '400px'};
  width: 100%;
  overflow: hidden;

  &:hover > ${OverlayBase} {
    opacity: 1;
  }
`

class ImageTrack extends Component {
  constructor (props) {
    super(props)

    this.state = {
      trackSize: -1,
      imageSizes: [],
      position: 0,
      offset: 0,
      canScrollRight: false,
      canScrollLeft: false
    }
    this.trackRef = React.createRef()
    this.rootRef = React.createRef()

    const images = props.images || []

    this.imageRefs = new Array(images.length)
      .fill(0)
      .map(() => React.createRef())

    this._updateTrackSize = this.updateTrackSize.bind(this)
  }

  componentDidMount () {
    this.updateTrackSize()

    window.addEventListener('resize', this._updateTrackSize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._updateTrackSize)
  }

  updateTrackSize () {
    const _root = this.rootRef.current
    const track = this.trackRef.current

    if (_root && track) {
      const width = track.clientWidth
      const maxWidth = _root.clientWidth

      const imageSizes = this.imageRefs.map(ref => {
        if (ref.current) {
          return ref.current.clientWidth
        }
        return 0
      })

      this.setState({
        trackSpace: width - maxWidth,
        canScrollRight: maxWidth < width,
        imageSizes
      })
    }
  }

  handleScroll (increment) {
    const {
      canScrollLeft,
      canScrollRight,
      position,
      imageSizes,
      trackSpace,
      offset: prevOffset
    } = this.state

    // Are we allowed to scroll?
    if (
      (!canScrollLeft && increment < 0) ||
      (!canScrollRight && increment > 0)
    ) {
      return
    }

    // Make sure 0 < nextPosition < imageSizes.length
    let nextPosition = position + increment
    if (nextPosition < 0) {
      nextPosition = 0
    } else if (nextPosition >= imageSizes.length) {
      nextPosition = imageSizes.length - 1
    }

    // Calculate offset from position
    let offset = imageSizes
      .slice(0, nextPosition)
      .reduce((sum, val) => sum + val, 0)

    // If we didn't move, but there's extra track space, go to the end
    if (
      nextPosition === position &&
      offset < trackSpace &&
      increment > 0
    ) {
      offset = trackSpace
    }

    // Make sure the offset never exceeds the track space
    if (offset > trackSpace) {
      offset = trackSpace
    }

    // Show controls if we moved and hide them if there's no more space
    if (prevOffset !== offset) {
      if (increment < 0) {
        this.setState({
          canScrollRight: true
        })
        if (offset === 0) {
          this.setState({
            canScrollLeft: false
          })
        }
      } else if (increment > 0) {
        this.setState({
          canScrollLeft: true
        })
        if (offset === trackSpace) {
          this.setState({
            canScrollRight: false
          })
        }
      }
    }

    // Update the track position and offset
    this.setState({
      offset,
      position: nextPosition
    })
  }

  render () {
    const {
      images = [],
      height
    } = this.props
    const {
      offset,
      canScrollLeft,
      canScrollRight
    } = this.state

    return (
      <Root height={height} ref={this.rootRef}>
        <Track ref={this.trackRef} offset={-offset}>
          {images.map((src, index) => src
            ? (
              <ImageItem
                height={height}
                src={src}
                key={index}
                ref={this.imageRefs[index]}
                onLoad={this.updateTrackSize.bind(this)}
              />
            )
            : null
          )}
        </Track>
        {canScrollLeft && (
          <OverlayLeft onClick={() => this.handleScroll(-1)} />
        )}
        {canScrollRight && (
          <OverlayRight onClick={() => this.handleScroll(1)} />
        )}
      </Root>
    )
  }
}

ImageTrack.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.string
}

export default ImageTrack
