import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ServiceList from './ServiceList'
import ServicePreview from './ServicePreview'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Padder from 'Blocks/Padder'

import theme from 'utils/theme'

const Content = styled.div`
  padding: ${props => props.theme.spacing(2)};
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
      services
    } = this.props

    const {
      selected
    } = this.state

    return (
      <Skewer
        bgColor={theme.palette.dark}
        layer={1200}
      >
        <Padder padding={theme.spacing(10)}>
          <Container sideText="Services" fluid>
            <Content>
              <ServiceList
                services={services}
                selected={selected}
                onSelect={this.handleSelect.bind(this)}
                renderPreview={(service) => (
                  <ServicePreview service={service} />
                )}
              />
            </Content>
          </Container>
        </Padder>
      </Skewer>
    )
  }
}

ServicesBlock.propTypes = {
  services: PropTypes.array
}

export default ServicesBlock
