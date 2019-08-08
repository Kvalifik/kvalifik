import 'normalize.css'
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Main from 'Components/Main'
// import ActionBlock from 'Components/ActionBlock'
import CaseGrid from 'Blocks/CaseGrid'
import CaseThump from '../Blocks/CaseThump'
import bg from '../graphics/test.jpeg'
import bg2 from '../graphics/test2.jpeg'
import bg3 from '../graphics/test3.jpeg'

const Index = ({ data }) => {
  // const {
  //   contactTitle,
  //   contactButtonText,
  //   contactDescription,
  //   contactImages
  // } = data.datoCmsHomePage

  return (
    <Main>
      {/* <ActionBlock
        title={contactTitle}
        body={contactDescription}
        buttonLabel={contactButtonText}
        buttonType="button"
        images={contactImages}
      /> */}
      <CaseGrid fadeBottom bgColor={'#1d1d1d'}>
        <CaseThump name="Have A Look" desc="el preben hmm" bg={bg} color="rgb(163, 241, 255)" />
        <CaseThump name="Andet" bg={bg2} />
        <CaseThump full name="Andet" desc="don trippa shu" bg={bg3} />
        <CaseThump name="Have A Look" desc="el preben hmm" bg={bg2} color="rgb(163, 241, 255)" />
        <CaseThump name="Have A Look" desc="el preben hmm" bg={bg} color="rgb(163, 241, 255)" />
        <CaseThump full name="Have A Look" desc="el preben hmm" bg={bg3} color="rgb(163, 241, 255)" />
      </CaseGrid>
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
