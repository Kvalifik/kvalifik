import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ListItem from './ListItem'
import Icon from './Icon'

import { servicePropType } from 'models/service'

const Root = styled.div`
  position: sticky;
  top: ${props => props.theme.spacing(2)};

  @media ${props => props.theme.media.lg} {
    display: none;
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
