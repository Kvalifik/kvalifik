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

const text = (function () {
  const dateString = dateformat(new Date(), 'dddd, mmmm dS, yyyy, h:MM:ss TT')

  const dots = new Array(8).fill(0).map(() => '.').join('^400')

  return [[
    'Session starting: ' + dateString,
    '`https://kvalifik.dk:~ visiterName$` ^250_',
    'Authorizing ' + dots + ' `Done`'
  ].join('^1000\n')]
})()

const Console = React.forwardRef(({ color, isInsideViewport }, ref) => (
  <Root color={color} ref={ref}>
    {isInsideViewport && (
      <Typed
        strings={text}
        typeSpeed={20}
      >
        <span />
      </Typed>
    )}
  </Root>
))

Console.propTypes = {
  isInsideViewport: PropTypes.bool,
  color: PropTypes.string
}

export default withInsideViewport(Console)
