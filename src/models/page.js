import PropTypes from 'prop-types'
import { headerPropType } from './blocks/header'
import { actionblockPropType } from './blocks/actionblock'
import { casegridPropType } from './blocks/casegrid'
import { sloganblockPropType } from './blocks/sloganblock'
import { overlayblockPropType } from './blocks/overlayBlock'
import { caseinfoPropType } from './blocks/caseinfo'
import { percentageblockPropType } from './blocks/percentageBlock'
import { toolboxPropType } from './blocks/toolbox'

export const pagePropType = PropTypes.shape({
  pageSetup: PropTypes.arrayOf(PropTypes.oneOfType([
    headerPropType,
    casegridPropType,
    actionblockPropType,
    sloganblockPropType,
    overlayblockPropType,
    caseinfoPropType,
    percentageblockPropType,
    toolboxPropType
  ])),
  title: PropTypes.string,
  url: PropTypes.string
})
