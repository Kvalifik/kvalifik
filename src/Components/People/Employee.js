import React from 'react'
import styled from 'styled-components'

import { employeePropType } from 'models/employee'

const Root = styled.div`

`

const Employee = ({ person }) => (
  <Root>{person.name}</Root>
)

Employee.propTypes = {
  person: employeePropType
}

export default Employee
