import PropTypes from 'prop-types'

export const overlayblockPropType = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string
  }),
  bgColor: PropTypes.shape({
    hex: PropTypes.string
  })
})
