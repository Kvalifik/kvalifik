import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withInsideViewport from 'utils/withInsideViewport'
import dateformat from 'dateformat'
import Typed from 'react-typed'
import 'react-typed/dist/animatedCursor.css'

const Root = styled.div`
  font-family: Semplice, monospace, sans-serif;
  font-size: 12px;
  color: ${props => props.theme.palette.primary.D};
  margin: ${props => props.theme.spacing(4, 2)};
  padding-left: 2px;
  line-height: 1.4em;
  min-height: calc(12px * 3 * 1.4);
`

const ConsoleContent = styled.span`
  white-space: pre-wrap;
`

const text = function (consoleText) {
  const dateString = dateformat(new Date(), 'dddd, mmmm dS, yyyy, h:MM:ss TT')
  const dots = new Array(8).fill(0).map(() => '.').join('^400')
  const output = [consoleText
    .replace(/%DATE/g, dateString)
    .replace(/%DOTS/g, dots)
    .split(/\n/)
    .join('^1000\n')
  ]
  return output
}

const Console = React.forwardRef(({ color, isInsideViewport, consoleText }, ref) => (
  <Root color={color} ref={ref}>
    {isInsideViewport && (
      <Typed
        strings={text(consoleText)}
        typeSpeed={20}
      >
        <ConsoleContent />
      </Typed>
    )}
  </Root>
))

Console.propTypes = {
  isInsideViewport: PropTypes.bool,
  color: PropTypes.string,
  consoleText: PropTypes.string
}

export default withInsideViewport(Console)
