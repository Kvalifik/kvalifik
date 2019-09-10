import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { servicePropType } from 'models/service'

const Root = styled.div`
  min-height: 80vh;
  position: relative;
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
  height: 64px;
  width: 35%;

  position: absolute;
  top: ${props => `calc(${props.index} * (64px + ${props.theme.spacing(1)}))`};

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

  @media ${props => props.theme.media.md} {
    position: static;
    width: 100%;
    margin-bottom: ${props => props.theme.spacing(1)};
  }

  @media ${props => props.theme.media.lg} {
    font-size: 0.8em;
  }
`

const grow = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Preview = styled.div`
  float: right;
  width: 65%;
  overflow: hidden;

  transform-origin: top center;
  animation: ${grow} 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  position: absolute;
  top: 0;
  right: 0;
  bottom: initial;
  padding-left: ${props => props.theme.spacing(2)};

  @media ${props => props.theme.media.md} {
    position: static;
    top: initial;
    right: initial;
    bottom: initial;
    width: 100%;
    margin: ${props => props.theme.spacing(0, 0, 3)};
    padding-left: 0;
  }
`

const ServiceList = ({
  services,
  selected,
  onSelect,
  renderPreview
}) => (
  <Root>
    {services.map((service, index) => (
      <React.Fragment key={index}>
        <ListItem
          selected={selected === index}
          onClick={(ev) => onSelect(ev, index)}
          index={index}
        >
          <Icon src={service.icon && service.icon.url} />
          {service.label}
        </ListItem>
        {selected === index && (
          <Preview>
            {renderPreview(service)}
          </Preview>
        )}
      </React.Fragment>
    ))}
  </Root>
)

ServiceList.propTypes = {
  services: PropTypes.arrayOf(servicePropType),
  selected: PropTypes.number,
  onSelect: PropTypes.func,
  renderPreview: PropTypes.func
}

export default ServiceList
