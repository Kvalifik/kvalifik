import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withScrollInfoView from 'utils/withScrollInfoView'
import dateformat from 'dateformat'

const Root = styled.div`
  font-family: Semplice, monospace, sans-serif;
  font-size: 12px;
  color: ${props => props.theme.palette.primary.D};
  margin: ${props => props.theme.spacing(4, 2)};
  line-height: 1.4em;

  min-height: calc(12px * 3 * 1.4);
`

class Console extends Component {
  constructor (props) {
    super(props)

    this.state = {
      step: 0,
      text: this.getText()
    }
  }

  componentDidUpdate (prevProps) {
    if (!prevProps.isIntoView && this.props.isIntoView) {
      this.nextStep()
    }
  }

  nextStep () {
    const { step } = this.state
    setTimeout(() => {
      this.setState({
        step: step + 1
      })

      this.nextStep()
    }, Math.floor(Math.random() * 25 + 10))
  }

  getText () {
    const dateString = dateformat(new Date(), 'dddd, mmmm dS, yyyy, h:MM:ss TT')

    return [
      'Session starting: ' + dateString,
      window.location.origin + ':~ visiterName$ _',
      'Authorizing ......'
    ].join('|')
  }

  render () {
    const { step, text } = this.state
    const { color } = this.props

    const showText = text.substring(0, step)

    return (
      <Root color={color}>
        {showText.split('|').map((snippet, i) => (
          <div key={i}>{snippet}</div>
        ))}
      </Root>
    )
  }
}

Console.propTypes = {
  isIntoView: PropTypes.bool,
  color: PropTypes.string
}

export default withScrollInfoView(Console)