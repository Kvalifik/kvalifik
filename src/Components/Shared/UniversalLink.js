import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const UniversalLink = ({
  to,
  isExternal,
  children,
  disabled,
  ...props
}) => {
  if (disabled) {
    return (
      <span
        {...props}
      >
        {children}
      </span>
    )
  }

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

UniversalLink.propTypes = {
  to: PropTypes.string,
  isExternal: PropTypes.bool,
  children: PropTypes.any,
  disabled: PropTypes.bool
}

export default UniversalLink
