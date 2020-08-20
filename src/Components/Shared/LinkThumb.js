import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import arrow from 'graphics/rightArrow.svg'
import { Link } from 'gatsby'
import LazyImage from 'Components/Shared/LazyImage'
import Svg from 'react-inlinesvg'

const Root = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.hexToRgba(props.color, 0.1)};
  transition: transform 0.2s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  :hover {
    transform: scale(1.03);
  }

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  @media ${props => props.theme.media.sm} {
    padding: ${props => props.theme.spacing(2)};

    &::after {
      padding-bottom: 0;
    }
  }
`

const Arrow = styled(Svg)`
  position: absolute;
  right: ${props => props.theme.spacing(2)};
  bottom: ${props => props.theme.spacing(2)};
  width: ${props => props.theme.spacing(1)};

  path {
    fill: ${props => props.color};
  }

  @media ${props => props.theme.media.sm} {
    right: ${props => props.theme.spacing(2)};
    top: 50%;

    transform: translateY(-50%);
  }
`

const Center = styled.div`
  &,
  & > a {
    color: ${props => props.color};
    text-decoration: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    @media ${props => props.theme.media.sm} {
      display: grid;
      grid-template-columns: 40px 1fr;
      position: static;
      flex-direction: row;
      justify-content: start;
    }
  }
`

const Icon = styled(LazyImage)`
  display: ${props => props.src ? 'block' : 'none'};
  width: ${props => props.logo ? '55%' : '25%'};
  background-size:contain;

  @media ${props => props.theme.media.sm} {
    width: 40px;
    margin: ${props => props.theme.spacing(0, 2, 0, 0)};
  }
`

const Headline = styled.p`
  display: ${props => props.keepText ? 'inline' : 'none'};
  text-align: center;
  margin: ${props => props.theme.spacing(1)};
  font-size: 14px;
  min-width: 100px;
  
  ${props => props.bold && css`
    font-weight: bold;
    font-size: 14px;
  `}

  @media ${props => props.theme.media.sm} {
    display: inline;
    margin: ${props => props.theme.spacing(2)};
    text-align: left;
  }
`

export default class ToolThumb extends Component {
  static propTypes = {
    id: PropTypes.number,
    onClick: PropTypes.any,
    to: PropTypes.string,
    headline: PropTypes.string,
    iconUrl: PropTypes.string,
    color: PropTypes.string,
    bold: PropTypes.bool,
    logo: PropTypes.bool,
    keepText: PropTypes.bool
  }

  render () {
    const {
      headline,
      iconUrl,
      color,
      onClick,
      to,
      id,
      bold,
      logo,
      keepText
    } = this.props

    return (
      <Root onClick={(ev) => onClick && onClick(ev, id)} color={color}>
        {!!to && (
          <Center color={color}>
            <Link to={to}>
              <Icon src={iconUrl} logo={!!logo} />
              <Headline bold={!!bold} keepText={!!keepText}>{headline}</Headline>
              <Arrow color={color} src={arrow} />
            </Link>
          </Center>
        )}
        {!to && (
          <Center color={color}>
            <Icon src={iconUrl} logo={!!logo} />
            <Headline bold={!!bold} keepText={!!keepText}>{headline}</Headline>
            <Arrow color={color} src={arrow} />
          </Center>
        )}
      </Root>
    )
  }
}
