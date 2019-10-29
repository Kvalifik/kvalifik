import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { servicePropType } from 'models/service'

const Root = styled.div`
  ${props => props.theme.clearfix()};
  position: relative;
  min-height: calc(
    ${props => props.len} * 64px
      + ${props => props.len - 1}
      * ${props => props.theme.spacing(1)
    }
  );
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
  transition: margin-left 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  margin-left: 0;
  cursor: ${props => props.selected ? 'default' : 'pointer'};
  outline: none;

  & > ${Icon} {
    filter: ${props => props.selected ? 'invert(1)' : 'none'};
  }

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    margin-left: -10px;
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
  width: 65%;
  height: 100%;
  overflow: hidden;

  transform-origin: top center;
  animation: ${grow} 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  position: relative;
  float: right;
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
}) => {
  const canRenderPreview = typeof renderPreview === 'function'

  return (
    <Root len={services.length}>
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
          {selected === index && canRenderPreview && (
            <Preview>
              {renderPreview(service)}
            </Preview>
          )}
        </React.Fragment>
      ))}
    </Root>
  )
}

ServiceList.propTypes = {
  services: PropTypes.arrayOf(servicePropType),
  selected: PropTypes.number,
  onSelect: PropTypes.func,
  renderPreview: PropTypes.func
}

export default ServiceList
