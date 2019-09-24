import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ServiceList from './ServiceList'
import ServicePreview from './ServicePreview'

import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import Button from 'Components/Shared/Button'
import Padder from 'Components/Shared/Padder'

import theme from 'utils/theme'

const Content = styled.div`
  padding: ${props => props.theme.spacing(2)};
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: ${props => props.theme.spacing(5)};
`

class ServicesBlock extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: 0,
      selectedEl: null
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.selected !== this.state.selected) {
      const topY = this.state.selectedEl.getBoundingClientRect().top
      const scrollY = window.scrollY

      if (topY < 0) {
        window.scrollTo(0, scrollY + topY - 16)
      }
    }
  }

  handleSelect (ev, next) {
    this.setState({
      selected: next,
      selectedEl: ev.currentTarget
    })
  }

  render () {
    const {
      bgColor,
      services,
      buttonLink
    } = this.props

    const {
      selected
    } = this.state

    return (
      <Skewer
        bgColor={bgColor || 'transparent'}
        layer={1200}
      >
        <Padder padding={theme.spacing(10)}>
          <Container sideText="Services">
            <Content>
              <ServiceList
                services={services}
                selected={selected}
                onSelect={this.handleSelect.bind(this)}
                renderPreview={(service) => (
                  <ServicePreview service={service} />
                )}
              />
              {buttonLink && (
                <ButtonWrapper>
                  <Button
                    to={buttonLink.path}
                    type="link"
                    isExternal={buttonLink.isExternal}
                    bgColor={theme.hexToRgba(theme.palette.light, 0.2)}
                    color={theme.palette.light}
                  >
                    {buttonLink.name}
                  </Button>
                </ButtonWrapper>
              )}
            </Content>
          </Container>
        </Padder>
      </Skewer>
    )
  }
}

ServicesBlock.propTypes = {
  bgColor: PropTypes.string,
  services: PropTypes.array,
  buttonLink: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
    isExternal: PropTypes.bool
  })
}

export default ServicesBlock
