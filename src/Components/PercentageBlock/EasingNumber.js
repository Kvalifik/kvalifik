import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EasingNumber extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: 0,
      beginTime: 0,
      active: false
    }

    this.bindedScrollHandler = this.handleScroll.bind(this)
    this.bindedEaseHandler = this.handleEase.bind(this)
  }

  componentDidMount () {
    if (this.props.awaitViewport) {
      window.addEventListener('scroll', this.bindedScrollHandler)
    } else {
      this.handleEase()
    }
  }

  componentWillUnmount () {
    if (this.props.awaitViewport) {
      window.removeEventListener('scroll', this.bindedScrollHandler)
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (!prevState.active && this.state.active) {
      this.handleEase()
    }
  }

  handleScroll (ev) {
    const el = this.node

    if (el && !this.state.active) {
      const bounding = el.getBoundingClientRect()

      if (
        bounding.top >= (window.innerHeight || document.documentElement.clientHeight) * 0.25 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
      ) {
        this.setState({
          active: true,
          beginTime: Date.now()
        })
        window.removeEventListener('scroll', this.bindedScrollHandler)
      }
    }
  }

  handleEase () {
    const {
      value,
      duration
    } = this.props

    const now = Date.now()

    const a = Math.pow(value, 1 / duration)
    const f = (x) => value - Math.pow(a, duration - x)

    const progress = now - this.state.beginTime
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
  awaitViewport: PropTypes.bool
}

export default EasingNumber
