import PropTypes from 'prop-types'
import { contentPropType } from 'blockTypes/content'

export const pagePropType = PropTypes.shape({
  pageSetup: contentPropType
})
