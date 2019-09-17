import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import targetBlankIcon from 'graphics/target_blank.svg'
import Svg from 'react-inlinesvg'

const ButtonWrapper = styled.div`
  border: 0;
  font-size: 20px;
  transform-origin: center;
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  display: inline-block;
  padding: 0;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  &:hover {
    transform: scale(0.95);
  }

  @media ${props => props.theme.media.md} {
    width: 100%;
  }

  & > button {
    outline: none;
    color: ${props => props.color || props.theme.palette.light};
    padding: 0;
    border: none;
    width: 100%;
  }

  & > a {
    ${props => props.theme.typography.header.mixin()}
    text-decoration: none;
    color: ${props => props.color || props.theme.palette.light};
    padding: 0;
    width: 100%;
  }
`

const ButtonContent = styled.div`
  padding: ${props => props.theme.spacing(2, 8)};
  text-transform: uppercase;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor || props.theme.palette.dark};
  cursor: pointer;
  color: ${props => props.color || props.theme.palette.light};
  ${props => props.theme.typography.header.mixin()}

  > svg {
    margin-left: 10px;

    g {
      path {
        fill: ${props => props.color || props.theme.palette.light};
      }
    }
  }

  @media ${props => props.theme.media.md} {
    padding: ${props => props.theme.spacing(2, 2)};
  }
`

class Button extends Component {
  renderContent () {
    const {
      children,
      color,
      bgColor,
      isExternal
    } = this.props

    return (
      <ButtonContent color={color} bgColor={bgColor} isExternal={isExternal}>
        {children}
        {isExternal && (
          <Svg src={targetBlankIcon} />
        )}
      </ButtonContent>
    )
  }

  render () {
    const {
      to,
      type = 'button',
      isExternal,
      bgColor,
      color,
      onClick,
      fullWidth,
      children,
      ...others
    } = this.props

    return (
      <ButtonWrapper color={color} fullWidth={fullWidth}>
        {type === 'button' && (
          <button onClick={onClick} {...others}>
            {this.renderContent()}
          </button>
        )}
        {type === 'link' && isExternal && (
          <a href={to} target="_blank" rel="noopener noreferrer" {...others}>
            {this.renderContent()}
          </a>
        )}
        {type === 'link' && !isExternal && (
          <Link to={to} {...others}>
            {this.renderContent()}
          </Link>
        )}
      </ButtonWrapper>
    )
  }
}
Button.propTypes = {
  fullWidth: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(['button', 'link']),
  isExternal: PropTypes.bool,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any
}

export default Button
