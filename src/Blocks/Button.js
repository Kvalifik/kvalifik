import styled, { css } from 'styled-components'
import targetBlankIcon from 'graphics/target_blank.svg'

export default styled.button`
  padding: ${props => props.theme.spacing(2, 8)};
  background-color: ${props => props.bgColor || props.theme.palette.dark};
  color: ${props => props.color || props.theme.palette.light};
  text-transform: uppercase;
  border: 0;
  ${props => props.theme.typography.header.mixin()}
  font-size: 20px;
  outline: none;
  cursor: pointer;
  transform-origin: center;
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  text-decoration: none;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(0.95);
  }

  @media ${props => props.theme.media.md} {
    width: 100%;
  }

  @media ${props => props.theme.media.sm} {
    padding: ${props => props.theme.spacing(2, 2)};
  }

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
`
