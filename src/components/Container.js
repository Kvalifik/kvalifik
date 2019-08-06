import React from 'react'
import styled from 'styled-components';



const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: ${props => props.sideText ? '60px 1fr' : '0 1fr'};
    
    @media (min-width: $sm) {
		grid-template-columns: 1fr 420px 1fr !important;
	}

	@media (min-width: $md) {
        grid-template-columns: 1fr 630px 1fr !important;
	}

	@media (min-width: $lg) {
        grid-template-columns: 1fr 870px 1fr !important;
    }
    
	@media (min-width: $xl) {
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

export default ({ sideLine, children }) => {
    return (
        <Container>
            <SideText>
                <div className="rotation">
                    {sideLine}
                </div>
            </SideText>
            <div id="content">
                {children}
            </div>
        </Container>
    )
}
