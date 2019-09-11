import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import Service from './Service'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Padder from 'Blocks/Padder'

import theme from 'utils/theme'
import { smoothScrollTo } from 'utils/scroll'

const Content = styled.div`
  padding: ${props => props.theme.spacing(2)};

  ${props => props.theme.grid.all([
    'display: grid',
    'grid-template-columns: 380px 1fr'
  ])}
`

const ServiceContainer = styled.div`
  padding-left: ${props => props.theme.spacing(4)};
`

const SidebarWrapper = styled.div``

const idFromLabel = (label) =>
  label.toLowerCase().replace(/\s*/g, '-').replace(/[^\w-]/g, '')

class ServicesBlock extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: 0
    }
  }

  handleSelect (next, id) {
    this.setState({
      selected: next
    })

    const el = document.getElementById(id)

    if (el) {
      smoothScrollTo(window.scrollY + el.getBoundingClientRect().top - 10)
    }
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
              <SidebarWrapper>
                <Sidebar
                  services={services}
                  selected={selected}
                  createId={idFromLabel}
                  onSelect={this.handleSelect.bind(this)}
                />
              </SidebarWrapper>
              <ServiceContainer>
                {services && services.map((service, index) => (
                  <Service
                    key={index}
                    service={service}
                    id={idFromLabel(service.label)}
                  />
                ))}
              </ServiceContainer>
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
