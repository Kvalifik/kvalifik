import PropTypes from 'prop-types'

export const toolboxPropType = PropTypes.shape({
  id: PropTypes.string,
  tools: PropTypes.shape({
    headline: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    }),
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    bgColor: PropTypes.shape({
      hex: PropTypes.string
    })
  })
})
