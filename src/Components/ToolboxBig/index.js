import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Container from 'Blocks/Container'
import Padder from 'Blocks/Padder'
import Skewer from 'Blocks/Skewer'
import SearchIcon from 'graphics/search.svg'
import CloseIcon from 'graphics/close.svg'
import ToolThump from './ToolThump'
const Root = styled.div`
  color: white;
  position: relative;
  z-index: 1000; /* ??? */
`

const Description = styled.div`
  margin: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
`

const SearchWrapper = styled.div`
  margin: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;

  ::before {
    content: url(${SearchIcon});
    margin-top: 2px;
    margin-left: ${props => props.theme.spacing(1.5)};
    position: absolute;
  }
`

const Searcher = styled.input`
  outline: none;
  width: 100%;
  border: 0;
  padding: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(6)};
  font-size: 14px;
  background-color: ${props => props.theme.hexToRgba(props.theme.palette.secondary.D, 0.2)};
  color: ${props => props.theme.palette.primary.D};

  ::placeholder {
    color: ${props => props.theme.hexToRgba(props.theme.palette.secondary.D, 0.8)};
  }
`

const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${props => props.theme.media.md`
    grid-template-columns: 1fr;
    width: 100%;
  `}
  grid-gap: ${props => props.theme.spacing(2)};
`

const Filter = styled.button`
  text-align: left;
  display: inline-flex;
  align-items: center;
  outline: none;
  font-size: 14px;
  color: ${props => props.theme.palette.primary.D};
  border: 1px solid ${props => props.theme.palette.primary.D};
  background: transparent;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
  ${props => props.theme.media.md`
    padding: 8px 8px;
  `}
  margin: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  inline-size: max-content;
  transition: 0.3s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  ${props => props.theme.media.md`
    width: 100%;
  `}

  :hover {
    transform: scale(1.01);
    border: 1px solid white;
    color: white;
  }

  ${props => props.isChosen ?
    css`
      transform: scale(1) !important;
      color: white;
      border: 1px solid white;
    ` :
    css`
      cursor: pointer;
    `}
`

const Filters = styled.div`
  margin: ${props => props.theme.spacing(2)};
  margin-left: 0;
  margin-right: ${props => props.theme.spacing(4)};
`

const RemoveFilter = styled.span`
  transition: 0.3s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  display: inline-flex;
  width: 0;
  overflow: hidden;
  position: relative;
  height: 20px;
  justify-content: left;
  align-items: center;
  cursor: pointer;

  ::before {
    content: url(${CloseIcon});
    position: absolute;
    height: 32px;
    width: 35px;
    margin-left: -8px;
    display: inline-block;
    transform: scale(0.5);
  }

  ${props => props.isChosen &&
    css`
      width: 35px;
  `}
`

const ToolView = styled.div`
  margin: ${props => props.theme.spacing(2)};
  margin-top: ${props => props.theme.spacing(8)};
  display: grid;
  grid-gap: ${props => props.theme.spacing(4)};
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  ${props => props.theme.media.md`
    grid-gap: ${props => props.theme.spacing(2)};
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  `}
`

export default class index extends Component {
  state = {
    chosenFilter: -1
  }

  chooseFilter (i) {
    console.log({chosenFilter: i})
    this.setState({chosenFilter: i})
  }

  render() {
    const {
      sideText,
      smallDescription,
      backgroundColor,
      toolFilters,
      tools
    } = this.props
    return (
      <Root>
        <Skewer bgColor={backgroundColor}>
          <Padder>
            <Container sideText={sideText} >
              <TopWrapper>
                <Description>
                  {smallDescription}
                </Description>
                <SearchWrapper>
                  <Searcher placeholder="Search here_" type="text" />
                </SearchWrapper>
              </TopWrapper>
              <Filters>
                {toolFilters.map((toolFilter, i) => {
                  const isChosen = this.state.chosenFilter === i
                  return (
                    <Filter isChosen={isChosen}
                        onClick={(i !== this.state.chosenFilter) && this.chooseFilter.bind(this, i)}
                        key={i}
                      >
                      <RemoveFilter isChosen={isChosen} onClick={this.chooseFilter.bind(this, -1)} key={i} />
                      {toolFilter.title}
                    </Filter>
                  )
                })}
              </Filters>
              <ToolView>
                {tools.map((tool, i) => {
                  return (<ToolThump
                    headline={tool.headline}
                    description={tool.description}
                    icon={tool.icon}
                    image={tool.image}
                    bgColor={tool.bgColor}
                    key={i}
                  />)
                })}
              </ToolView>
            </Container>
          </Padder>
        </Skewer>
      </Root>
    )
  }
}

index.propTypes = {
  sideText: PropTypes.string,
  smallDescription: PropTypes.string,
  backgroundColor: PropTypes.shape({
    hex: PropTypes.string
  }),
  toolFilters: PropTypes.shape({
    title: PropTypes.string
  }),
  tools: PropTypes.shape({
    headline: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    }),
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    bgColor: PropTypes.shape({
      hex: PropTypes.string
    })
  })
}
