import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ src }) => (
  <video>
    <source src={src} type="video/mp4" />
  </video>
)

Video.propTypes = {
  src: PropTypes.string
}

export default Video
