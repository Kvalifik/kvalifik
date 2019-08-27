import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import greenSideArrow from 'graphics/greenSideArrow.svg'

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: ${props => props.theme.hexToRgba(props.theme.palette.primary.D, 0.1)};
  color: ${props => props.theme.hexToRgba(props.theme.palette.primary.D, 1)};
`

const InnerPadding = styled.div`
  padding: ${props => props.theme.spacing(2)};
`

const Arrow = styled.img`
  position: absolute;
  right: ${props => props.theme.spacing(2)};
  bottom: ${props => props.theme.spacing(2)};
  width: ${props => props.theme.spacing(1)};
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img`

`

const Headline = styled.p`

`

const ToolThump = props => {
  const {
    headline,
    description,
    icon,
    image,
    bgColor } = props
    console.log({icon})
  return (
    <Root>
      <InnerPadding>
        <Center>
          <Icon src={icon.url} />
          <Headline>
            {headline}
          </Headline>

        </Center>
        <Arrow src={greenSideArrow} />
      </InnerPadding>
    </Root>
  )
}

ToolThump.propTypes = {
  headline: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.shape({
    url: PropTypes.string
  }),
  image: PropTypes.shape({
    url: PropTypes.string
  }),
  bgColor: PropTypes.shape({
    hex: PropTypes.string
  })

}

export default ToolThump
