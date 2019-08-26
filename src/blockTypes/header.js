import PropTypes from 'prop-types'

export const headerPropType = PropTypes.shape({
  itle: PropTypes.string,
  description: PropTypes.string,
  media: PropTypes.oneOfType([
    PropTypes.shape({
      video: PropTypes.shape({
        url: PropTypes.string
      }),
      thumbnail: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    PropTypes.shape({
      image: PropTypes.shape({
        url: PropTypes.string
      })
    })
  ]),
  icon: PropTypes.shape({
    url: PropTypes.string
  })
})
