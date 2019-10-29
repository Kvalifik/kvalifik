import React from 'react'
import styled from 'styled-components'

import cursorThug from 'graphics/cursor-thug.png'
import { employeePropType } from 'models/employee'

const Info = styled.div`
  display: grid;
  background-color: ${props => props.bgColor};
  padding: ${props => props.theme.spacing(1.5)};
`

const Media = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${props => props.imageSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  cursor: url(${cursorThug}), auto;
`

const Root = styled.div`
  display: grid;
  grid-template-columns: 8fr 7fr;
  height: 175px;
  margin: ${props => props.theme.spacing(2)};

  transform-origin: center;
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  @media ${props => props.theme.media.sm} {
    margin: ${props => props.theme.spacing(0.5, 2)};
  }

  @media ${props => props.theme.media.lg} {
    &:nth-child(odd) {
      grid-template-columns: 7fr 8fr;

      ${Info} {
        grid-column: 2;
        grid-row: 1;
      }

      ${Media} {
        grid-column: 1;
        grid-row: 1;
      }
    }
  }
`

const NameContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  justify-self: start;

  font-size: 14px;

  strong {
    font-size: 18px;
  }
`

const ContactContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  align-self: end;
  justify-self: start;

  font-size: 12px;
  font-weight: bold;
`

const Employee = ({ person }) => (
  <Root>
    <Info bgColor={person.color && person.color.hex}>
      <NameContainer>
        <strong>{person.name}</strong>
        <div>{person.jobTitle}</div>
      </NameContainer>
      <ContactContainer>
        <div>{person.phone}</div>
        <div>{person.email}</div>
      </ContactContainer>
    </Info>
    <Media imageSrc={person.image && person.image.url} />
  </Root>
)

Employee.propTypes = {
  person: employeePropType
}

export default Employee
