import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withScrollInfoView from 'utils/withScrollInfoView'

class EasingNumber extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  componentDidUpdate (prevProps) {
    if (!prevProps.isIntoView && this.props.isIntoView) {
      this.bindedEaseHandler = this.handleEase.bind(this, Date.now())
      this.bindedEaseHandler()
    }
  }

  handleEase (beginTime) {
    const {
      value,
      duration
    } = this.props

    const now = Date.now()

    const a = Math.pow(value, 1 / duration)
    const f = (x) => value - Math.pow(a, duration - x)

    const progress = now - beginTime
    let nextValue = f(progress)

    if (Math.round(nextValue) < value) {
      requestAnimationFrame(this.bindedEaseHandler)
    } else {
      nextValue = value
    }

    this.setState({
      value: nextValue
    })
  }

  render () {
    const { render } = this.props
    const { value } = this.state

    return (
      <div ref={el => { this.node = el }}>
        {render(Math.round(value))}
      </div>
    )
  }
}

EasingNumber.propTypes = {
  render: PropTypes.func,
  duration: PropTypes.number,
  value: PropTypes.number,
  isIntoView: PropTypes.bool
}

export default withScrollInfoView(EasingNumber)
