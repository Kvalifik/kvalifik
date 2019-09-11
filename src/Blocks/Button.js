import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import targetBlankIcon from 'graphics/target_blank.svg'

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

  ${props => props.isExternal && css`
    &::after {
      content: "";
      background: url('${targetBlankIcon}');
      background-repeat: no-repeat;
      background-position: center;
      margin-left: 10px;
      height: 20px;
      width: 20px;
    }
  `}

  @media ${props => props.theme.media.md} {
    padding: ${props => props.theme.spacing(2, 2)};
  }
`

const Button = ({
  to,
  type = 'button',
  isExternal,
  bgColor,
  color,
  onClick,
  fullWidth,
  children,
  ...others
}) => (
  <ButtonWrapper color={color} fullWidth={fullWidth}>
    {type === 'button' && (
      <button onClick={onClick} {...others}>
        <ButtonContent color={color} bgColor={bgColor} isExternal={isExternal}>
          {children}
        </ButtonContent>
      </button>
    )}
    {type === 'link' && isExternal && (
      <a href={to} target="_blank" {...others}>
        <ButtonContent color={color} bgColor={bgColor} isExternal={isExternal}>
          {children}
        </ButtonContent>
      </a>
    )}
    {type === 'link' && !isExternal && (
      <Link to={to} {...others}>
        <ButtonContent color={color} bgColor={bgColor} isExternal={isExternal}>
          {children}
        </ButtonContent>
      </Link>
    )}
  </ButtonWrapper>
)

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
