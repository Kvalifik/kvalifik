import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const withScrollInfoView = Wrapped => class ScrollInfoView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isIntoView: false
    }

    this.bindedScrollHandler = this.handleScroll.bind(this)
    this.ref = React.createRef()
  }

  componentDidMount () {
    window.addEventListener('scroll', this.bindedScrollHandler)

    this.node = ReactDOM.findDOMNode(this.ref.current)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.bindedScrollHandler)
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
          isIntoView: true
        })
        window.removeEventListener('scroll', this.bindedScrollHandler)
      }
    }
  }

  render () {
    const { isIntoView } = this.state

    return (
      <Wrapped {...this.props} ref={this.ref} isIntoView={isIntoView} />
    )
  }
}

export default withScrollInfoView
