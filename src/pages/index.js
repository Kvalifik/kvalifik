import 'normalize.css'
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Main from 'Components/Main'
import CaseGrid from 'Blocks/CaseGrid'
import CaseThump from 'Blocks/CaseThump'
import ActionBlock from 'Components/ActionBlock'

/* Import from cms */
import bg from 'graphics/test.jpeg'
import bg2 from 'graphics/test2.jpeg'
import bg3 from 'graphics/test3.jpeg'

const Index = ({ data }) => {
  const {
    contactTitle,
    contactButtonText,
    contactDescription,
    contactImages
  } = data.datoCmsHomePage

  return (
    <Main>
      <CaseGrid fadeBottom bgColor={'#1d1d1d'}>
        <CaseThump
          name="Have A Look"
          description="el preben hmm"
          bgUrl={bg}
          bgColor="rgb(163, 241, 255)"
        />
        <CaseThump
          name="Andet"
          bgUrl={bg2}
        />
        <CaseThump
          fullWidth
          name="Andet"
          description="don trippa shu"
          bgUrl={bg3}
        />
        <CaseThump
          name="Have A Look"
          description="el preben hmm"
          bgUrl={bg2}
          bgColor="rgb(163, 241, 255)"
        />
        <CaseThump
          name="Have A Look"
          description="el preben hmm"
          bgUrl={bg}
          bgColor="rgb(163, 241, 255)"
        />
        <CaseThump
          fullWidth
          name="Have A Look"
          description="el preben hmm"
          bgUrl={bg3}
          bgColor="rgb(163, 241, 255)"
        />
      </CaseGrid>
      <ActionBlock
        title={contactTitle}
        body={contactDescription}
        buttonLabel={contactButtonText}
        buttonType="button"
        images={contactImages}
      />
    </Main>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    datoCmsHomePage: PropTypes.shape({
      contactTitle: PropTypes.string,
      contactButtonText: PropTypes.string,
      contactDescription: PropTypes.string,
      contactImages: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string
      }))
    })
  })
}

export const query = graphql`
  query HomeQuery {
    datoCmsHomePage {
      contactTitle
      contactDescription
      contactButtonText
      contactImages {
        url
      }
    }
  }
`

export default Index
