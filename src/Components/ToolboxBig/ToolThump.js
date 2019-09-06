import React, { Component } from 'react'
import PropTypes, { bool } from 'prop-types'
import styled from 'styled-components'
import greenSideArrow from 'graphics/greenSideArrow.svg'
import ReactDOM from "react-dom";

const Root = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: ${props => props.theme.hexToRgba(props.theme.palette.primary.D, props.secondarySearch ? 0.03 : 0.1)};
  color: ${props => props.theme.hexToRgba(props.theme.palette.primary.D, 1)};
  transition: transform 0.2s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  :hover {
    transform: scale(1.03);
  }
`

const InnerPadding = styled.div`
  padding: ${props => props.theme.spacing(2)};
`

const Arrow = styled.img`
  position: absolute;
  right: ${props => props.theme.spacing(2)};
  bottom: ${props => props.theme.spacing(2)};
  width: ${props => props.theme.spacing(1)};
`

const Center = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 6fr 4fr;
`

const IconWrapper = styled.div`
  width: 100%;
  display: inline-grid;
  height: 0;
  padding-bottom: 50%;
  position: relative;
`

const Icon = styled.img`
  width: 25%;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  /* bottom: ${props => props.theme.spacing(2)}; */
`

const Headline = styled.p`
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(1)};
  text-align: center;
  margin: 0;
  font-size: 14px;
  margin-top: -2px;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
`

export default class ToolThump extends Component {

  componentDidMount () {
    // this.updateDimension()
    // window.addEventListener("resize", () => this.updateDimension());
  }

  updateDimension () {
    console.log(ReactDOM.findDOMNode(this).getBoundingClientRect())
    return ReactDOM.findDOMNode(this).getBoundingClientRect()
  }


  static propTypes = {
    i: PropTypes.any,
    openTool: PropTypes.any,
    secondarySearch: PropTypes.bool,
    headline: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    }),
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    bgColor: PropTypes.shape({
      hex: PropTypes.string
    })
  }


  render() {
    const {
      headline,
      description,
      i,
      icon,
      image,
      bgColor } = this.props

    return (
      <Root onClick={() => this.props.openTool(i, this.updateDimension())}>
        <Center>
          <IconWrapper>
            <Icon src={icon.url} />
          </IconWrapper>
          <Headline>
            {headline}
          </Headline>
        </Center>
        <Arrow src={greenSideArrow} />
      </Root>
    )
  }
}
