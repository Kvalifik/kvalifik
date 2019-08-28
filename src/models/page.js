import PropTypes from 'prop-types'
import { headerPropType } from './blockTypes/header'
import { actionblockPropType } from './blockTypes/actionblock'
import { casegridPropType } from './blockTypes/casegrid'
import { sloganblockPropType } from './blockTypes/sloganblock'
import { overlayblockPropType } from './blockTypes/overlayBlock'
import { caseinfoPropType } from './blockTypes/caseinfo'
import { percentageblockPropType } from './blockTypes/percentageBlock'
import { toolboxPropType } from './blockTypes/toolbox'

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
