import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

const LeftContainer = styled.div`
  grid-column: 1 / 2;
  padding: 35% ${props => props.theme.spacing(10)} 0 0;
`

const RightContainer = styled.div`
  grid-column: 2 / 3;
`

const ActionBlock = ({
  title,
  body,
  buttonType = 'button',
  buttonProps,
  buttonLabel,
  bgColor = 'lightblue'
}) => {
  return (
    <Skewer bgColor={bgColor} angle={4} reverse noPadding>
      <Container>
        <Content>
          <LeftContainer>
            <h1>{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: body }} />
            <button type="button" alt={buttonLabel}>{buttonLabel}</button>
          </LeftContainer>
          <RightContainer>
            <img src="https://i.kym-cdn.com/photos/images/newsfeed/001/286/508/f8e.jpg" />
          </RightContainer>
        </Content>
      </Container>
    </Skewer>
  )
}

ActionBlock.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonType: PropTypes.oneOf(['button', 'link']),
  buttonProps: PropTypes.object,
  bgColor: PropTypes.string
}

export default ActionBlock
