import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Root = styled.div`
  width: 100%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  margin-bottom: ${props => props.gutter};

  &:last-child {
    margin-bottom: 0;
  }

  @media ${props => props.theme.media.lg} {
    display: none;
  }
`

const CarouselWrapper = styled.div`
  display: none;

  .carousel .slide{
    background: transparent;
  }

  @media ${props => props.theme.media.lg} {
    display: block;
  }
  ul{
    padding-inline-start: 0;
  }
`

const CarouselImg = styled.div`
  height: 300px;
  background-size: cover;
  background-position: center;
  background-image: url('${props => props.src + props.theme.imgScale.md}');
`

const ImageItem = styled.div`
  flex: 1 1 ${props => props.basis * 100}%;
  overflow: hidden;
  height: 100%;
  background-image: url(${props => props.src + props.theme.imgScale[props.size]});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  margin-right: ${props => props.gutter};

  &:last-child {
    margin-right: 0;
  }

  &::after {
    content: "";
    display: block;
    padding-bottom: ${props => props.aspect * 100}%;
  }
`

const JustifiedGrid = ({
  images,
  rows,
  gutter = '16px'
}) => {
  const filledRows = React.useMemo(() => {
    const cursors = new Array(rows).fill(0).reduce((acc, index) => {
      let len
      if (index < rows - 1) {
        len = Math.floor(images.length / rows)
      } else {
        len = Math.ceil(images.length / rows)
      }

      let last = 0
      if (acc[acc.length - 1]) {
        last = acc[acc.length - 1].end
      }

      acc[acc.length] = {
        start: last,
        end: len + last
      }
      return acc
    }, [])
    const rowWidths = cursors.map(
      (cursor, index) => images
        .slice(cursor.start, cursor.end)
        .reduce((sum, img) => sum + img.width / img.height, 0)
    )

    return cursors.map(
      (cursor, index) => ({
        width: rowWidths[index],
        images: images
          .slice(cursor.start, cursor.end)
          .map(img => ({
            ...img,
            basis: (img.width / img.height) / rowWidths[index],
            aspect: img.height / img.width
          }))
      })
    )
  }, [images.length, rows])

  return (
    <Root>
      {filledRows.map((row, index) => (
        <Row key={index} gutter={gutter}>
          {row.images.map((img, index) => (
            <ImageItem
              size={row.images.length > 2 ? 'sm' : 'lg'}
              key={index}
              src={img.src}
              basis={img.basis}
              aspect={img.aspect}
              gutter={gutter}
            />
          ))}
        </Row>
      ))}

      <CarouselWrapper>
        <Carousel showThumbs={false} infiniteLoop autoPlay swipeable showStatus={false}>
          {images.map((img, index) => (
            <div key={index}>
              <CarouselImg src={img.src} />
            </div>
          ))}
        </Carousel>
      </CarouselWrapper>
    </Root>
  )
}

JustifiedGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  })),
  rows: PropTypes.number,
  gutter: PropTypes.string
}

export default JustifiedGrid
