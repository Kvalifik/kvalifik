import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Container from '../components/Container';

const Index = ({ data }) => {
  const [isChecked, setChecked] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    document.title = search
  }, [search])

  const onToggle = () => {
    setChecked(!isChecked)
  }

  return (
    <Container sideLine="smagen">
      <div>
          <h1>{data.site.siteMetadata.title}</h1>
          {isChecked && <p>Hello kvalifik!</p>}
          {!isChecked && <p>Goodbye kvalifik!</p>}
          <input type="button" onClick={onToggle} value="Toggle" />
          <input type="text" onChange={({ target: { value } }) => setSearch(value)} value={search} />
      </div>
    </Container>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      })
    })
  })
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Index
