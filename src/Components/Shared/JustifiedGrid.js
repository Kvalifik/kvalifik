import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
`

const ImageItem = styled.div`
  flex: 1 1 ${props => props.basis * 100}%;
  overflow: hidden;
  height: 100%;
  background-image: url(${props => props.src});
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

const normalizeWidth = (width, height) => width / height * 200

const JustifiedGrid = ({
  images,
  rows,
  gutter = '16px'
}) => {
  const filledRows = React.useMemo(() => {
    const itemsInEach = new Array(rows).fill(0).map((val, index) => {
      if (index < rows - 1) {
        return Math.floor(images.length / rows)
      }
      return Math.ceil(images.length / rows)
    })
    const rowWidths = itemsInEach.map(
      (val, index) => images
        .slice(itemsInEach[index - 1] || 0, (itemsInEach[index - 1] || 0) + val)
        .reduce((sum, img) => sum + normalizeWidth(img.width, img.height), 0)
    )
    return itemsInEach.map(
      (val, index) => ({
        width: rowWidths[index],
        images: images
          .slice(itemsInEach[index - 1] || 0, (itemsInEach[index - 1] || 0) + val)
          .map(img => ({
            ...img,
            basis: normalizeWidth(img.width, img.height) / rowWidths[index],
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
              key={index}
              src={img.src}
              basis={img.basis}
              aspect={img.aspect}
              gutter={gutter}
            />
          ))}
        </Row>
      ))}
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
