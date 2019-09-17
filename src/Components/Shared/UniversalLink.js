import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
    : (
      <AniLink
        fade
        to={to}
        {...props}
      >
        {children}
      </AniLink>
    )

UniversalLink.propTypes = {
  to: PropTypes.string,
  isExternal: PropTypes.bool,
  children: PropTypes.any
}

export default UniversalLink
