import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Icon from 'Blocks/Icon'
import downArrow from 'graphics/down.svg'

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 4fr 5fr;
`

const TopLeftContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 35% ${props => props.theme.spacing(10)} 0 0;
  align-self: end;
`

const BottomLeftContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 0 ${props => props.theme.spacing(10)} 0 0;
`

const RightContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / -1;
  height: 145vh;
`

const Video = styled.video`
  object-fit: cover;
  object-position: 28%;
  width: 100%;
  height: 100%;
`

const Title = styled.div`
  font-size: ${props => props.theme.typography.fontSize.md};
  ${props => props.theme.mixins.typography.hero};
`

const DownArrow = styled.img.attrs({
  src: downArrow
})`
  position: absolute;
  z-index: 200;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  bottom: 20vh;
  left: 50%;
  transform: translateX(-50%);
`

const HeaderBlock = ({
  title,
  body,
  bgColor,
  videoUrl,
  iconUrl
}) => (
  <Skewer angle={8} flushTop bgColor={bgColor} height="130vh">
    <Container overflowRight>
      <Content>
        <TopLeftContainer>
          <Icon src={iconUrl} />
          <Title>{title}</Title>
        </TopLeftContainer>
        <BottomLeftContainer>
          <p dangerouslySetInnerHTML={{ __html: body }} />
        </BottomLeftContainer>
        <RightContainer>
          <Video>
            <source src={videoUrl} type="video/mp4" />
          </Video>
        </RightContainer>
      </Content>
    </Container>
    <DownArrow />
  </Skewer>
)

HeaderBlock.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  bgColor: PropTypes.string,
  videoUrl: PropTypes.string,
  iconUrl: PropTypes.string
}

export default HeaderBlock
