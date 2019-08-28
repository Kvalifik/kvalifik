import PropTypes from 'prop-types'

export const actionblockPropType = PropTypes.shape({
  title: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string
  })),
  imageDelay: PropTypes.number
})
