import PropTypes from 'prop-types'

export const quoteblockPropType = PropTypes.shape({
  author: PropTypes.string,
  quote: PropTypes.string,
  bgColor: PropTypes.shape({
    hex: PropTypes.string
  }),
  image: PropTypes.shape({
    url: PropTypes.string
  })
})
