import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { servicePropType } from 'models/service'

const Root = styled.div`

`

const ServicePreview = ({
  service
}) => {
  console.log(service)

  return (
    <Root>
      test
    </Root>
  )
}

ServicePreview.propTypes = {
  service: servicePropType
}

export default ServicePreview
