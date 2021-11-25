import PropTypes from 'prop-types'

export const perkPropType = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.shape({
    hex: PropTypes.string
  }),
  image: PropTypes.shape({
    url: PropTypes.string
  })
})
