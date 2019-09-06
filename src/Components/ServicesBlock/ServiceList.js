import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Root = styled.div`
  ${props => props.theme.grid.all([
    'display: grid',
    'grid-template-columns: 2fr 3fr'
  ])}

  min-height: 100vh;
`

const ListWrapper = styled.div`
  ${props => props.theme.grid('grid-column: 1')}

  margin-right: ${props => props.theme.spacing(5)};
`

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: ${props => props.theme.spacing(2)};
`

const ListItem = styled.div`
  background-color:
    ${props => props.selected
    ? props.theme.palette.dark
    : props.theme.palette.light};
  color:
    ${props => props.selected
    ? props.theme.palette.light
    : props.theme.palette.dark};

  padding: ${props => props.theme.spacing(1.5)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing(1.5)};
  transform-origin: center;
  transition: transform 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  transform: ${props => props.selected ? 'none !important' : 'none'};
  cursor: ${props => props.selected ? 'default' : 'pointer'};

  & > ${Icon} {
    filter: ${props => props.selected ? 'invert(1)' : 'none'};
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
`

const ServiceList = ({
  services,
  selected,
  onSelect
}) => console.log(services.length) || (
  <Root>
    <ListWrapper>
      {services.map((service, index) => (
        <ListItem selected={selected === index} onClick={() => onSelect(index)}>
          <Icon src={service.icon && service.icon.url} />
          {service.label}
        </ListItem>
      ))}
    </ListWrapper>
  </Root>
)

ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    })
  })),
  selected: PropTypes.number
}

export default ServiceList
