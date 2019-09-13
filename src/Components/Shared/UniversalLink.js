import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const UniversalLink = ({
  to,
  isExternal,
  children,
  ...props
}) =>
  isExternal
    ? (
      <a
        href={to}
        target="_blank"
        {...props}
      >{children}</a>
    )
    : (
      <Link
        to={to}
        {...props}
      >{children}</Link>
    )

UniversalLink.propTypes = {
  to: PropTypes.string,
  isExternal: PropTypes.bool,
  children: PropTypes.any
}

export default UniversalLink
