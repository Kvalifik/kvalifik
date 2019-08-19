import { graphql } from 'gatsby'

export const query = graphql`
  fragment ContentFragment on DatoCmsPage {
    content {
      __typename
      ... on DatoCmsBlockHeader {
        id
        title
        bgColor {
          hex
        }
        icon {
          url
        }
        video {
          url
        }
        videoThumbnail {
          url
        }
        description
      }
      ... on DatoCmsBlockCaseGrid {
        id
        hasMoreWork
        works {
          title
          description
          id
          forWho
          fullSize
          date(formatString: "DD/MM-YY")
          color {
            hex
          }
          image{
            url
          }
        }
      }
      ... on DatoCmsBlockSlogan {
        id
        punchline
        bgColor {
          hex
        }
      }
      ... on DatoCmsBlockToolbox {
        id
      }
      ... on DatoCmsBlockAction {
        id
        title
        description
        buttonText
        images {
          url
        }
        imageDelay
        bgColor {
          hex
        }
        textColor {
          hex
        }
      }
      ... on DatoCmsBlockOverlay {
        id
        title
        description
        image {
          url
        }
        bgColor {
          hex
        }
      }
    }
  }
`
