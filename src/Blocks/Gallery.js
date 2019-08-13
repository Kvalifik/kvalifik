import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Img = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  width: 100%;
  height: 100%;

  transition: background-image .5s linear;
`

class Gallery extends Component {
  constructor (props) {
    super(props)

    this.state = {
      step: 0
    }
  }

  componentDidMount () {
    const { delay = 2000 } = this.props
    this.interval = setInterval(this.handleNextStep.bind(this), delay)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  handleNextStep () {
    const { images } = this.props
    const { step } = this.state
    if (step + 1 < images.length) {
      this.setState({ step: step + 1 })
    } else {
      this.setState({ step: 0 })
    }
  }

  render () {
    const {
      images
    } = this.props
    const { step } = this.state

    return (
      <Img src={images[step]} />
    )
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  delay: PropTypes.number
}

export default Gallery
