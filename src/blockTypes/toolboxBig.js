import PropTypes from 'prop-types'

// I dont get this. Where do i implement this? I don't like it @gustavgb

export const toolboxBigProptype = PropTypes.shape({
  sideText: PropTypes.string,
  smallDescription: PropTypes.string,
  backgroundColor: PropTypes.shape({
    hex: PropTypes.string
  }),
  toolFilters: PropTypes.shape({
    title: PropTypes.string
  }),
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
