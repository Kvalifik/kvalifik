import PropTypes from 'prop-types'

export const percentageblockPropType = PropTypes.shape({
  bgColor: PropTypes.shape({
    hex: PropTypes.string
  }),
  duration: PropTypes.number,
  number: PropTypes.number,
  description: PropTypes.string
})
