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

  @media ${props => props.theme.media.lg} {
    display: block;
  }
`

const ServiceContainer = styled.div`
  padding-left: ${props => props.theme.spacing(4)};
  margin-top: -10px;

  @media ${props => props.theme.media.lg} {
    padding-left: 0;
  }
`

const SidebarWrapper = styled.div``

const idFromLabel = (label) =>
  label.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

class ServicesBlock extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: 0,
      scrolling: false
    }

    this._handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this._handleScroll)

    if (window && window.location && window.location.hash) {
      this.props.services.find((service, index) => {
        if ('#' + idFromLabel(service.label) === window.location.hash) {
          this.handleSelect(null, index, idFromLabel(service.label), true)
          return true
        }
        return false
      })
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this._handleScroll)
  }

  handleScroll () {
    if (this.state.scrolling) return

    const { services } = this.props

    let serviceId = 0

    for (let i = 0; i < services.length; i++) {
      const s = services[i]
      const el = document.getElementById(idFromLabel(s.label))

      if (el) {
        const y = window.scrollY + el.getBoundingClientRect().top + window.innerHeight / 5

        if (y > window.scrollY + window.innerHeight) {
          break
        }
      }

      serviceId = i
    }

    if (this.state.selected !== serviceId) {
      this.setState({
        selected: serviceId
      })
    }
  }

  handleSelect (ev, next, id, quick) {
    if (ev) {
      ev.preventDefault()
    }

    this.setState({
      selected: next
    })

    const el = document.getElementById(id)

    if (el) {
      this.setState({
        scrolling: true
      })

      smoothScrollTo(
        window.scrollY + el.getBoundingClientRect().top,
        {
          quick
        },
        () => {
          this.setState({
            scrolling: false
          })

          window.location.hash = id
        })
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
