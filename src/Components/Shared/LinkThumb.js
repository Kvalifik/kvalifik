import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import greenSideArrow from 'graphics/greenRightArrow.svg'
import { Link } from 'gatsby'
import LazyImage from 'Components/Shared/LazyImage'

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

const Arrow = styled(LazyImage)`
  position: absolute;
  right: ${props => props.theme.spacing(2)};
  bottom: ${props => props.theme.spacing(2)};
  width: ${props => props.theme.spacing(1)};

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
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    @media ${props => props.theme.media.sm} {
      position: static;
      flex-direction: row;
      justify-content: start;
    }
  }
`

const Icon = styled(LazyImage)`
  display: ${props => props.src ? 'block' : 'none'};
  width: 25%;

  @media ${props => props.theme.media.sm} {
    width: 40px;
    margin: ${props => props.theme.spacing(0, 2, 0, 0)};
  }
`

const Headline = styled.p`
  font-size: 14px;
  margin: ${props => props.theme.spacing(2, 0, 0)};

  @media ${props => props.theme.media.sm} {
    margin: ${props => props.theme.spacing(0)};
  }
`

export default class ToolThumb extends Component {
  static propTypes = {
    id: PropTypes.number,
    onClick: PropTypes.any,
    to: PropTypes.string,
    headline: PropTypes.string,
    iconUrl: PropTypes.string,
    color: PropTypes.string
  }

  render () {
    const {
      headline,
      iconUrl,
      color,
      onClick,
      to,
      id
    } = this.props

    return (
      <Root onClick={(ev) => onClick && onClick(ev, id)} color={color}>
        {!!to && (
          <Center color={color}>
            <Link to={to}>
              <Icon src={iconUrl} />
              <Headline>{headline}</Headline>
              <Arrow src={greenSideArrow} />
            </Link>
          </Center>
        )}
        {!to && (
          <Center color={color}>
            <Icon src={iconUrl} />
            <Headline>{headline}</Headline>
            <Arrow src={greenSideArrow} />
          </Center>
        )}
      </Root>
    )
  }
}
