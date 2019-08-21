import PropTypes from 'prop-types'

export const caseinfoPropType = PropTypes.shape({
  id: PropTypes.string,
  buttonLink: PropTypes.shape({
    name: PropTypes.string,
    isExternal: PropTypes.bool,
    path: PropTypes.string
  }),
  labelOne: PropTypes.string,
  titleOne: PropTypes.string,
  descriptionOne: PropTypes.string,
  labelTwo: PropTypes.string,
  titleTwo: PropTypes.string,
  descriptionTwo: PropTypes.string,
  labelThree: PropTypes.string,
  titleThree: PropTypes.string,
  descriptionThree: PropTypes.string,
  bgColor: PropTypes.shape({
    hex: PropTypes.string
  }),
  accentColor: PropTypes.shape({
    hex: PropTypes.string
  }),
  video: PropTypes.shape({
    url: PropTypes.string
  })
})
