import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Container from 'Blocks/Container'
import Padder from 'Blocks/Padder'
import Skewer from 'Blocks/Skewer'
import SearchIcon from 'graphics/search.svg'
import CloseIcon from 'graphics/close.svg'
import ToolThump from './ToolThump'
import ToolPreview from './ToolPreview';

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

  @media ${props => props.theme.media.md} {
    grid-template-columns: 1fr;
    width: 100%;
  }
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
  padding: ${props => props.theme.spacing(2, 4)};

  @media ${props => props.theme.media.md} {
    padding: ${props => props.theme.spacing(1, 2)};
    width: 100%;
  }

  inline-size: max-content;
  transition: scale 0.3s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  :hover {
    transform: scale(1.01);
    border: 1px solid white;
    color: white;
  }

  margin: ${props => props.theme.spacing(1)};

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
  margin-left: ${props => props.theme.spacing(1)};
  margin-right: ${props => props.theme.spacing(3)};
`

const RemoveFilter = styled.span`
  transition: width 0.3s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  display: inline-flex;
  width: 0;
  overflow: hidden;
  position: relative;
  height: 20px;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  margin-right: ${props => props.theme.spacing(1)};

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

const PseudoPreview = styled.div`
  position: fixed;
  ${props => props.toolPreviewIsOpen ? css`
    z-index: 1000;
    top: ${props => props.theme.spacing(8)};
    left: ${props => props.theme.spacing(8)};
    right: ${props => props.theme.spacing(8)};
    bottom: ${props => props.theme.spacing(8)};
    @media ${props.theme.media.md}{
      top: ${props => props.theme.spacing(8)};
      left: ${props => props.theme.spacing(2)};
      right: ${props => props.theme.spacing(2)};
      bottom: ${props => props.theme.spacing(8)};
    }
    background-color: #252525;
    opacity: 1;
    pointer-events: all;
    /* transition: all 0.4s linear, opacity 0s linear; */

  ` : css`
    opacity: 0;
    pointer-events: none;
    background-color: rgb(33, 50, 44);
    top: ${props => props.pseudoPreviewCoords[0]}px;
    left: ${props => props.pseudoPreviewCoords[1]}px;
    right: ${props => props.pseudoPreviewCoords[2]}px;
    bottom: ${props => props.pseudoPreviewCoords[3]}px;
  `}

  z-index: 1000;
  ${props => props.toolPreviewIsAnimating && css`
    transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.4s cubic-bezier(0, 1.08, 0.34, 1.01);
    ${props => props.toolPreviewIsOpen || css`
      transition: all 0.4s cubic-bezier(0.26, 0.16, 0.09, 0.97), opacity 0.4s cubic-bezier(0.91, 0.01, 1, 0.08);
    `}
  `}
`

export default class index extends Component {
  state = {
    chosenFilter: '',
    searchQuery: '',
    toolPreviewIsOpen: false,
    toolPreviewIsAnimating: false,
    chosenTool: 0,
    pseudoPreviewCoords: [0, '100%', 0, '100%']
    
  }

  changeSearchQuery(event) {
    this.setState({searchQuery: event.target.value})
  }

  chooseFilter (filter) {
    this.setState({chosenFilter: filter})
  }

  openToolPreview(i, coords) {
    this.setState({chosenTool: i})
    const newPseudoPreviewCoords = [coords.top, coords.left, window.innerWidth - coords.right, window.innerHeight - coords.bottom ]
    this.setState({pseudoPreviewCoords: newPseudoPreviewCoords})
    setTimeout(()=>{
      this.setState({toolPreviewIsOpen: true})
      this.setState({toolPreviewIsAnimating: true})
    }, 30)
    setTimeout(()=>{
      this.setState({toolPreviewIsAnimating: false})
    }, 400)
  }

  closeToolPreview() {
    this.setState({toolPreviewIsOpen: false})
    this.setState({toolPreviewIsAnimating: true})
    setTimeout(()=>{
      this.setState({toolPreviewIsAnimating: false})
    }, 400)
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
        <PseudoPreview onClick={this.closeToolPreview.bind(this)} pseudoPreviewCoords={this.state.pseudoPreviewCoords} toolPreviewIsOpen ={this.state.toolPreviewIsOpen} toolPreviewIsAnimating={this.state.toolPreviewIsAnimating}>
          {<ToolPreview tool={tools[this.state.chosenTool]} closeWindow={this.closeToolPreview.bind(this)} toolPreviewIsOpen ={this.state.toolPreviewIsOpen} toolPreviewIsAnimating={this.state.toolPreviewIsAnimating} />}
        </PseudoPreview>
        <Skewer bgColor={backgroundColor}>
          <Padder>
            <Container sideText={sideText} >
              <TopWrapper>
                <Description>
                  {smallDescription}
                </Description>
                <SearchWrapper>
                  <Searcher placeholder="Search here_" type="text" value={this.state.searchQuery} onChange={this.changeSearchQuery.bind(this)} />
                </SearchWrapper>
              </TopWrapper>
              <Filters>
                {toolFilters.map((toolFilter, i) => {
                  const isChosen = this.state.chosenFilter === toolFilter.title
                  return (
                    <Filter isChosen={isChosen}
                    onClick={!isChosen ? this.chooseFilter.bind(this, toolFilter.title) : ()=>{} }
                    key={i} >
                      <RemoveFilter isChosen={isChosen} onClick={this.chooseFilter.bind(this, '')} key={i} />
                      {toolFilter.title}
                    </Filter>
                  )
                })}
              </Filters>
              <ToolView>
                {tools.map((tool, i) => {
                  const toolIsQueryed = tool.headline.toUpperCase().search((this.state.searchQuery.toUpperCase())) !== -1 
                    || tool.description.toUpperCase().search((this.state.searchQuery.toUpperCase())) !== -1 

                  const toolIsFiltered = tool.toolFilters.map(toolFilter => toolFilter.title).indexOf(this.state.chosenFilter) !== -1 || this.state.chosenFilter === ''
                  if(toolIsFiltered && toolIsQueryed){
                    return <ToolThump
                      openTool={this.openToolPreview.bind(this)}
                      headline={tool.headline}
                      description={tool.description}
                      icon={tool.icon}
                      image={tool.image}
                      bgColor={tool.bgColor}
                      key={i}
                      i={i}
                      toolFilters={tool.toolFilters}
                    />
                  }
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
    }),
    toolFilters: PropTypes.shape({
      title: PropTypes.string
    }),
  })
}
