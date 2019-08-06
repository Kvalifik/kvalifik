import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'

export default ({ data }) => {
  const [isChecked, setChecked] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    document.title = search
  }, [search])

  const onToggle = () => {
    setChecked(!isChecked)
  }

  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      {isChecked && <p>Hello kvalifik!</p>}
      {!isChecked && <p>Goodbye kvalifik!</p>}
      <input type="button" onClick={onToggle} value="Toggle" />
      <input type="text" onChange={({ target: { value } }) => setSearch(value)} value={search} />
    </div>
  )
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
