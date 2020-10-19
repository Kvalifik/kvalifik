import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Info = styled.div`
  display: grid;
  background-color: ${props => props.bgColor};
  padding: ${props => props.theme.spacing(2.5)};
`

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 225px;
  @media ${props => props.theme.media.lg} {
    margin: ${props => props.theme.spacing(0)};
  }
  margin: ${props => props.theme.spacing(1)};
  transform-origin: center;
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  padding: ${props => props.theme.spacing(2)};
  @media ${props => props.theme.media.sm} {
    margin: ${props => props.theme.spacing(0.5, 2)};
    padding: ${props => props.theme.spacing(0)};
  }

  @media ${props => props.theme.media.lg} {
    &:nth-child(odd) {
      grid-template-columns: 1fr;
    }
  }
`

const NameContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  justify-self: start;

  font-size: 18px;

  strong {
    font-size: 20px;
  }
`

const Clickable = styled.a`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
`

const LinkContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  align-self: end;
  justify-self: start;

  font-size: 12px;
  font-weight: bold;
`

const JobPosting = ({ post }) => (
  <Root href={post.jobPostingLink.path}>
    <Info bgColor={post.color && post.color.hex}>
      <NameContainer>
        <strong>{post.jobPostName}</strong>
        <div>{post.positionType}</div>
      </NameContainer>
      <LinkContainer>
        <div>
          <Clickable href={post.jobPostingLink.path} target="_blank">See job post &gt;</Clickable>
        </div>
      </LinkContainer>
    </Info>
  </Root>
)

JobPosting.propTypes = {
  post: PropTypes.object
}

export default JobPosting
