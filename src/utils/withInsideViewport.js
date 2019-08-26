import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const withInsideViewport = Wrapped => class ScrollInfoView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isInsideViewport: false
    }

    this.bindedScrollHandler = this.handleScroll.bind(this)
    this.ref = React.createRef()
  }

  componentDidMount () {
    window.addEventListener('scroll', this.bindedScrollHandler)

    this.node = ReactDOM.findDOMNode(this.ref.current)
    this.bindedScrollHandler()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.bindedScrollHandler)
  }

  handleScroll (ev) {
    const el = this.node

    if (el && !this.state.isInsideViewport) {
      const bounding = el.getBoundingClientRect()

      if (
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
      ) {
        this.setState({
          isInsideViewport: true
        })
        window.removeEventListener('scroll', this.bindedScrollHandler)
      }
    }
  }

  render () {
    const { isInsideViewport } = this.state

    return (
      <Wrapped {...this.props} ref={this.ref} isInsideViewport={isInsideViewport} />
    )
  }
}

export default withInsideViewport
