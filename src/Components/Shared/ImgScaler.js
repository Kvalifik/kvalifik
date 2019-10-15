import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const Root = styled.img`

`

const ImgScaler = (props) => {
  let {
    src
  } = props

  const {
    h = 1920,
    w = 1080
  } = props

  src += `?h=${h}&w=${w}`

  return (
    <Root className={props.className} src={src} />
  )
}

ImgScaler.propTypes = {
  h: PropTypes.any,
  w: PropTypes.any,
  src: PropTypes.string
}

export default ImgScaler
