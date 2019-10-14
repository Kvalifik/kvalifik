import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import backArrow from 'graphics/back-arrow.svg'

const Root = styled.div`
  color: white;
  cursor: pointer;
  top: ${props => props.theme.spacing(2)};
  left: ${props => props.theme.spacing(2)};
  position: fixed;
  z-index: 1000000;
  background: rgba(0,0,0,0.6);
  
  @media ${props => props.theme.media.lg} {
    right: calc(${props => props.theme.spacing(10)});
    left: auto;
  }
  @media ${props => props.theme.media.sm} {
    top: calc(1px + ${props => props.theme.spacing(8)});
    padding: ${props => props.theme.spacing(2, 0)};
  }
`

const Wrapper = styled.div`
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing(0, 3)};
  :hover{
    padding: ${props => props.theme.spacing(0, 4)};
  }
`

const Img = styled.img`
  
`

const Text = styled.p`
  display: inline;
  margin-left: ${props => props.theme.spacing(2)};
  @media ${props => props.theme.media.sm} {
    display: none;
  }
`

const goBack = () => {
  window.history.back()
}

const BackArrow = (props) =>
  <Root onClick={goBack}>
    <Wrapper>
      <Img src={backArrow} />
      <Text>
        {props.backText}
      </Text>
    </Wrapper>
  </Root>

BackArrow.propTypes = {
  backText: PropTypes.string
}

export default BackArrow
