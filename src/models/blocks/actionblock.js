import PropTypes from 'prop-types'

export const actionblockPropType = PropTypes.shape({
  title: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string
  })),
  imageDelay: PropTypes.number,
  bgColor: PropTypes.shape({
    hex: PropTypes.string
  }),
  textColor: PropTypes.shape({
    hex: PropTypes.string
  }),
  buttonBgColor: PropTypes.shape({
    hex: PropTypes.string
  }),
  buttonTextColor: PropTypes.shape({
    hex: PropTypes.string
  })
})
