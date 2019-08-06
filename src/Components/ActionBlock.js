import React from 'react'
import PropTypes from 'prop-types'
import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'

const ActionBlock = ({
  title,
  body,
  buttonType = 'button',
  buttonProps,
  buttonLabel
}) => {
  return (
    <Skewer bgColor="#cc8014">
      <Container>
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: body }} />
        <button type="button" alt={buttonLabel}>{buttonLabel}</button>
      </Container>
    </Skewer>
  )
}

ActionBlock.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonType: PropTypes.oneOf(['button', 'link']),
  buttonProps: PropTypes.object
}

export default ActionBlock
