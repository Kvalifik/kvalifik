import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Container from 'Components/Shared/Container'
import Skewer from 'Components/Shared/Skewer'
import Padder from 'Components/Shared/Padder'
import Button from 'Components/Shared/Button'
import BlogThumb from './BlogThumb'

import theme from 'utils/theme'

const Content = styled.div`
  display: grid;
  grid-gap: calc(30px);
  padding: ${props => props.theme.padding.sm};
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  @media ${props => props.theme.media.sm} {
    grid-template-columns: 1fr;
  }
`

const MoreWork = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => props.theme.spacing(5, 2)};
`

const BlogGrid = (props) => {
  const {
    bgColor,
    blogs,
    moreWorkUrl,
    moreWorkLabel,
    sideText,
    removeTopPadding
  } = props
  const hasMoreWork = !!moreWorkUrl

  return (
    <Skewer bgColor={bgColor} layer={1200}>
      <Padder removeTopPadding={removeTopPadding}>
        <Container sideText={sideText} bgColor={bgColor}>
          <Content fadeBottom={hasMoreWork}>
            {blogs.map(blog => (
              <BlogThumb
                key={blog.id}
                date={blog.meta.firstPublishedAt}
                name={blog.forWho}
                description={blog.description}
                bgUrl={blog.image.url}
                bgColor={blog.color.hex}
                fullWidth={blog.fullSize}
                workUrl={blog.url}
                author={blog.author}
              />
            ))}
          </Content>
        </Container>
        {hasMoreWork && (
          <MoreWork>
            <Button
              type="link"
              to={moreWorkUrl}
              bgColor={theme.hexToRgba(theme.palette.light, 0.2)}
              color={theme.palette.light}
            >
              {moreWorkLabel}
            </Button>
          </MoreWork>
        )}
      </Padder>
    </Skewer>
  )
}

BlogGrid.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    forWho: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
      jobTitle: PropTypes.string
    }),
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    color: PropTypes.shape({
      hex: PropTypes.string
    }),
    fullSize: PropTypes.string,
    url: PropTypes.string
  })),
  sideText: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  moreWorkUrl: PropTypes.string,
  moreWorkLabel: PropTypes.string,
  removeTopPadding: PropTypes.bool
}

export default BlogGrid
