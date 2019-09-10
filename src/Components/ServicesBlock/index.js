import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ServiceList from './ServiceList'
import ServicePreview from './ServicePreview'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'

const Content = styled.div`
  padding: ${props => props.theme.spacing(2)};
`

class ServicesBlock extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: -1,
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
      services
    } = this.props

    const {
      selected
    } = this.state

    return (
      <Skewer
        bgColor={bgColor}
        layer={1200}
      >
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
          </Content>
        </Container>
      </Skewer>
    )
  }
}

ServicesBlock.propTypes = {
  bgColor: PropTypes.string,
  services: PropTypes.array
}

export default ServicesBlock
