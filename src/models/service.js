import PropTypes from 'prop-types'

export const servicePropType = PropTypes.shape({
  label: PropTypes.string,
  icon: PropTypes.shape({
    url: PropTypes.string
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string
  }),
  relatedTools: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    })
  })),
  exampleCases: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    })
  }))
})
