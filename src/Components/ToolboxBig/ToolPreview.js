import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Root = styled.div`
  padding: ${props => props.theme.spacing(8, 4)};
  transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  opacity: 0;
  color: white;
  ${props => (props.toolPreviewIsOpen && !props.toolPreviewIsAnimating) && css`
      transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
      opacity: 1;
  `}
  display: grid;
  grid-template-columns: 2;
  grid-template-rows: 2;
`

const Description = styled.div`
  :before {
  }
`

const ToolPreview = (props) => {
  return (
    <Root toolPreviewIsOpen={props.toolPreviewIsOpen} toolPreviewIsAnimating={props.toolPreviewIsAnimating} >
      <Description dangerouslySetInnerHTML={{ __html: props.tool.description }} />
    </Root>
  )
}

ToolPreview.propTypes = {
  tool: PropTypes.any,
  closeWindow: PropTypes.func,
  toolPreviewIsOpen: PropTypes.bool,
  toolPreviewIsAnimating: PropTypes.bool
}

export default ToolPreview
