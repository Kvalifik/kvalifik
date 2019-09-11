import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { servicePropType } from 'models/service'

const Root = styled.div`
  position: sticky;
  top: ${props => props.theme.spacing(2)};
`

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: ${props => props.theme.spacing(2)};
`

const ListItem = styled.a`
  background-color:
    ${props => !props.selected
    ? props.theme.palette.dark
    : props.theme.palette.light};
  color:
    ${props => !props.selected
    ? props.theme.palette.light
    : props.theme.palette.dark};

  padding: ${props => props.theme.spacing(1.5)};
  margin-bottom: ${props => props.theme.spacing(1)};

  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  font-weight: bold;
  transform-origin: center;
  transition: transform 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  transform: ${props => props.selected ? 'none !important' : 'none'};
  cursor: ${props => props.selected ? 'default' : 'pointer'};
  outline: none;

  & > ${Icon} {
    filter: ${props => !props.selected ? 'invert(1)' : 'none'};
  }

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    :nth-child(3n) {
      transform: translate3d(-10px, 0, 0);
    }

    :nth-child(3n + 1) {
      transform: translate3d(-13px, 0, 0);
    }

    :nth-child(3n + 2) {
      transform: translate3d(-7px, 0, 0);
    }
  }

  @media ${props => props.theme.media.md} {
    position: static;
    width: 100%;
    margin-bottom: ${props => props.theme.spacing(1)};
  }

  @media ${props => props.theme.media.lg} {
    font-size: 0.8em;
  }
`

const Sidebar = ({
  services,
  selected,
  onSelect,
  createId
}) => (
  <Root>
    {services.map((service, index) => (
      <ListItem
        selected={selected === index}
        href={`#${createId(service.label)}`}
        onClick={(ev) => onSelect(ev, index, createId(service.label))}
        index={index}
        key={index}
      >
        <Icon src={service.icon && service.icon.url} />
        {service.label}
      </ListItem>
    ))}
  </Root>
)

Sidebar.propTypes = {
  services: PropTypes.arrayOf(servicePropType),
  selected: PropTypes.number,
  onSelect: PropTypes.func,
  createId: PropTypes.func
}

export default Sidebar
