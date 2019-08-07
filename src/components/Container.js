import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Variables from '../BaseStyle/Variables'


const Root = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: ${props => props.sideText ? '60px 1fr' : '0 1fr'};

  @media (min-width: ${Variables.sm}px) {
    grid-template-columns: 1fr 420px 1fr !important;
  }

  @media (min-width: ${Variables.md}px) {
    grid-template-columns: 1fr 630px 1fr !important;
  }

  @media (min-width: ${Variables.lg}px) {
    grid-template-columns: 1fr 870px 1fr !important;
  }
    
  @media (min-width: ${Variables.xl}px) {
    grid-template-columns: 1fr 1050px 1fr !important;
  }
`

const SideText = styled.div`
    color: white;
    text-transform: uppercase;
    justify-self: flex-end;
    font-size: 40px;
    font-weight: 700;
    grid-column: 1 / 2;
    
    /* .rotation{
        @media (max-width: calc(#{$sm} + 80px)) { // magic number :/ (whatever)
            padding: 0px $sm-padding 0px 0px;
        }
        padding: 0px $sm-padding $sm-padding 0;
        position: absolute;
        transform-origin: 0% 0%;
        transform: rotate(90deg) scale(-1) translate(-100%, -100%);
    } */
`

const Container = ({ sideText, children }) => {
  return (
    <Root>
      <SideText>
        <div className="rotation">
          {sideText}
        </div>
      </SideText>
      <div id="content">
        {children}
      </div>
    </Root>
  )
}

Container.propTypes = {
  sideText: PropTypes.string,
  children: PropTypes.any
}

export default Container
