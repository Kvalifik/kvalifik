import PropTypes from 'prop-types'

export const servicePropType = PropTypes.shape({
  label: PropTypes.string,
  icon: PropTypes.shape({
    url: PropTypes.string
  })
})
