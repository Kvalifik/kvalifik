import PropTypes from 'prop-types'

export const employeePropType = PropTypes.shape({
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  color: PropTypes.shape({
    hex: PropTypes.string
  }),
  image: PropTypes.shape({
    url: PropTypes.string
  })
})
