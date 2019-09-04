import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'

import Employee from './Employee'

import { employeePropType } from 'models/employee'
import theme from 'utils/theme'

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Employees = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

const Title = styled.h2`
  ${props => props.theme.typography.header.mixin()}
  font-size: 42px;
  line-height: 1.2em;
  margin: ${props => props.theme.spacing(0, 0, 9)};
`

const Word = styled.span`
  font-size: 18px;
  line-height: 1.8;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${props => props.theme.spacing(1, 0)};

  & > *:nth-child(1) {
    ${props => props.theme.typography.header.mixin()}
    color: ${props => props.theme.palette.light};
    margin-right: ${props => props.theme.spacing(3)};
  }

  & > *:nth-child(2) {
    color: ${props => props.theme.palette.light};
    opacity: 0.5;
  }
`

const Description = styled.div`
  margin: ${props => props.theme.spacing(1, 0)};

  p {
    margin: ${props => props.theme.spacing(1, 0)};
    line-height: 2.1em;
  }

  ol {
    margin: 0 0 1.5em;
    padding: 0;
    counter-reset: item;

    li {
      margin: 0 0 ${props => props.theme.spacing(2)};
      padding: 0 0 0 1.5em;
      text-indent: -1.5em;
      list-style-type: none;
      counter-increment: item;
      line-height: 1.6em;

      &::before {
        display: inline-block;
        width: 1em;
        padding-right: 0.5em;
        font-weight: bold;
        text-align: right;
        content: counter(item);
      }
    }
  }
`

const TextContent = styled.div`
  color: ${props => props.theme.palette.light};
`

const PeopleBlock = ({
  title,
  description,
  word,
  pronounce,
  employees
}) => (
  <Skewer bgColor={theme.palette.dark} layer={1200}>
    <Container>
      <Top>
        <TextContent>
          <Title>{title}</Title>
          <Word>
            <span>{word}</span>
            <span>{pronounce}</span>
          </Word>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
        </TextContent>
      </Top>
      <Employees>
        {employees.map(person => (
          <Employee person={person} />
        ))}
      </Employees>
    </Container>
  </Skewer>
)

PeopleBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  word: PropTypes.string,
  pronounce: PropTypes.string,
  employees: PropTypes.arrayOf(employeePropType)
}

export default PeopleBlock
