import PropTypes from 'prop-types'

export const headerPropType = PropTypes.shape({
  itle: PropTypes.string,
  description: PropTypes.string,
  media: PropTypes.shape({
    url: PropTypes.string
  }),
  videoThumbnail: PropTypes.shape({
    url: PropTypes.string
  }),
  icon: PropTypes.shape({
    url: PropTypes.string
  })
})
