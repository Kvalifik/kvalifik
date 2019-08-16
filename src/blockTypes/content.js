import PropTypes from 'prop-types'
import { headerPropType } from 'blockTypes/header'
import { actionblockPropType } from 'blockTypes/actionblock'
import { casegridPropType } from 'blockTypes/casegrid'
import { sloganblockPropType } from 'blockTypes/sloganblock'

export const contentPropType = PropTypes.arrayOf(PropTypes.oneOfType([
  headerPropType,
  casegridPropType,
  actionblockPropType,
  sloganblockPropType
]))
