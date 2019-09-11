import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import greenSideArrow from 'graphics/greenSideArrow.svg'
import { Link } from 'gatsby'

const Root = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color:
    ${props => props.theme.hexToRgba(
    props.theme.palette.light,
    0.1
  )};
  color: ${props => props.theme.hexToRgba(props.theme.palette.light, 1)};
  transition: transform 0.2s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  :hover {
    transform: scale(1.03);
  }

  a {
    color: ${props => props.theme.palette.light};
    text-decoration: none;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Arrow = styled.img`
  position: absolute;
  right: ${props => props.theme.spacing(2)};
  bottom: ${props => props.theme.spacing(2)};
  width: ${props => props.theme.spacing(1)};
`

const Headline = styled.p`
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: ${props => props.theme.palette.light};
  text-decoration: none;
`

export default class ToolThumb extends Component {
  static propTypes = {
    headline: PropTypes.string,
    to: PropTypes.string
  }

  render () {
    const {
      headline,
      to
    } = this.props

    return (
      <Root>
        <Link to={to}>
          <Headline>
            {headline}
          </Headline>
          <Arrow src={greenSideArrow} />
        </Link>
      </Root>
    )
  }
}
