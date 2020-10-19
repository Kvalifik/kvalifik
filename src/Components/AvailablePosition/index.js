import React from 'react'
import styled from 'styled-components'
import theme from '../../utils/theme'
import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import JobPosting from './JobPosting'
import PropTypes from 'prop-types'

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: ${props => props.theme.spacing(10, 0)};

  @media ${props => props.theme.media.sm} {
    margin: ${props => props.theme.spacing(10, 1)};
  }

  @media ${props => props.theme.media.lg} {
    grid-template-columns: 1fr;
  }
`

const TextContent = styled.div`
  color: ${props => props.theme.palette.light};
`

const Title = styled.h2`
  ${props => props.theme.typography.header.mixin()}
  font-size: 42px;
  line-height: 1.2em;
  margin: ${props => props.theme.spacing(0, 0, 2.5)};
`

const Description = styled.div`
  margin: ${props => props.theme.spacing(1, 0)};
  max-width: 790px;

  p {
    margin: ${props => props.theme.spacing(1, 0)};
    line-height: 2.1em;
  }

  ol {
    margin: 0 0 1.5em;
    padding: 0;
    counter-reset: item;

    li {
      margin: 0 0 ${props => props.theme.spacing(2)};
      padding: 0 0 0 1.5em;
      text-indent: -1.5em;
      list-style-type: none;
      counter-increment: item;
      line-height: 1.6em;

      &::before {
        display: inline-block;
        width: 1em;
        padding-right: 0.5em;
        font-weight: bold;
        text-align: right;
        content: counter(item);
      }
    }
  }
`

const JobPostings = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 9px;
  margin: ${props => props.theme.spacing(-2, -2, 8)};

  @media ${props => props.theme.media.sm} {
    margin: ${props => props.theme.spacing(-0.5, -1, 9.5)};
  }

`

const AvailablePosition = ({ title, description, jobPostings }) => (
  <Skewer bgColor={theme.palette.dark} layer={1200}>
    <Container>
      <Top>
        <TextContent>
          <Title>{title}</Title>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
        </TextContent>
      </Top>
      <JobPostings>
        {jobPostings.map(post => (
          <JobPosting key={post.id} post={post} />
        ))}
      </JobPostings>
    </Container>
  </Skewer>
)

AvailablePosition.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  jobPostings: PropTypes.array
}

export default AvailablePosition
