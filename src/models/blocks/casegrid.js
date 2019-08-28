import PropTypes from 'prop-types'

export const casegridPropType = PropTypes.shape({
  works: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    forWho: PropTypes.string,
    fullSize: PropTypes.bool,
    date: PropTypes.string,
    color: PropTypes.shape({
      hex: PropTypes.string
    }),
    image: PropTypes.shape({
      url: PropTypes.string
    })
  }))
})
