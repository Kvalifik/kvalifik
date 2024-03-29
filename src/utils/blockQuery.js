import { graphql } from 'gatsby'

export const query = graphql`
  fragment HeaderFragment on DatoCmsHeader {
    id
    title
    description
    bgColor {
      hex
    }
    icon {
      url
    }
    textColor{
      hex
    }
    media {
      __typename
      ... on DatoCmsMediaItem {
        image {
          url
        }
        video {
          provider
          providerUid
        }
      }
    }
  }
  fragment BlogHeaderFragment on DatoCmsBlogHeader {
    id
    title
    description
    blogAuthor: author{
      name
      jobTitle
      email
    }
    meta {
      firstPublishedAt(formatString: "DD MMMM, YYYY")
    }
    bgColor {
      hex
    }
    textColor{
      hex
    }
    media {
      __typename
      ... on DatoCmsMediaItem {
        image {
          url
        }
        video {
          provider
          providerUid
        }
      }
    }
  }
  fragment CaseGridFragment on DatoCmsCaseGrid {
    id
    sideText
    removeTopPadding
    moreWorkPage {
      url
    }
    moreWorkLabel
    cases {
      description
      id
      forWho
      url
      fullSize
      color {
        hex
      }
      image{
        url
      }
    }
  }
  fragment BlogGridFragment on DatoCmsBlogGrid {
    id
    sideText
    removeTopPadding
    blogposts {
      description
      id
      url
      fullSize
      author{
        name
        jobTitle
      }
      meta{
        firstPublishedAt(formatString: "DD MMMM, YYYY")
      }
      color {
        hex
      }
      image{
        url
      }
    }
  }
  fragment RichtextFragment on DatoCmsRichtext {
    id
    textNode {
      childMarkdownRemark {
        html
      }
    }
    bgColor {
      hex
    }
    textColor {
      hex
    }
  }
  fragment SloganFragment on DatoCmsSlogan {
    id
    punchline
    bgColor {
      hex
    }
  }
  fragment ToolboxFragment on DatoCmsToolbox {
    id
    bgColor {
      hex
    }
    consoleText
    moreToolsButton {
      path
      isExternal
      name
    }
    sideText
    tools {
      ... on DatoCmsTool {
        id
        headline
        subHeadline
        description
        icon {
          url
        }
        image {
          url
        }
      }
    }
  }
  fragment ToolboxBigFragment on DatoCmsToolboxBig {
    id
    sideText
    smallDescription
    backgroundColor {
      hex
    }
    toolFilters {
      title
    }
    tools {
      headline
      id
      description
      image {
        url
      }
      subHeadline
      toolFilters {
        title
      }
      icon {
        url
      }
      references {
        path
        name
        description
        isExternal
      }
      examples {
        path
        name
        isExternal
      }
    }
  }
  fragment ActionBlockFragment on DatoCmsAction {
    id
    title
    description
    buttonLink {
      name
      path
      isExternal
    }
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
    buttonBgColor {
      hex
    }
    buttonTextColor {
      hex
    }
  }
  fragment GalleryFragment on DatoCmsImageBlock {
    id
    imageGridRows
    title
    gridImages {
      url
      width
      height
    }
    bgColor {
      hex
    }
  }
  fragment OverlayBlockFragment on DatoCmsOverlay {
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
  fragment FiftyFifty on DatoCmsFiftyFifty {
    description
    bgColor {
      hex
    }
    flip
    header
    media {
      url
    }
  }
  fragment MediaFragment on DatoCmsMediaBlock {
    title
    bgColor {
      hex
    } 
    media {
      image {
        url
      }
      video {
        provider
        providerUid
      }
    }
  }
  fragment ReferencelogoblockFragment on DatoCmsReferenceslogoblock {
    id
    logos {
      url
      alt
    }
    title
  }
  fragment ProcessFragment on DatoCmsProcessBlock {
    id
    buttonLink {
      name
      path
      isExternal
    }
    labelOne
    labelTwo
    labelThree
    descriptionOne
    descriptionTwo
    descriptionThree
    titleOne
    titleTwo
    titleThree
    bgColor {
      hex
    }
    accentColor {
      hex
    }
  }
  fragment CaseInfoFragment on DatoCmsCaseInfo {
    id
    showButtonLink
    buttonLink {
      name
      path
      isExternal
    }
    showProcessComponent
    labelOne
    labelTwo
    labelThree
    descriptionOne
    descriptionTwo
    descriptionThree
    titleOne
    titleTwo
    titleThree
    bgColor {
      hex
    }
    accentColor {
      hex
    }
    showMediaComponent
    media {
      image {
        url
      }
      video {
        provider
        providerUid
      }
    }
    showImageGrid
    imageGridRows
    gridImages {
      url
      width
      height
    }
  }
  fragment PercentageBlockFragment on DatoCmsPercentage {
    id
    bgColor {
      hex
    }
    description
    duration
    number
    unit
  }
  fragment QuoteBlockFragment on DatoCmsQuote {
    id
    author
    quote
    image {
      url
    }
    bgColor {
      hex
    }
  }
  fragment PeopleBlockFragment on DatoCmsPeopleBlock {
    id
    title
    word
    pronounce
    description
    employees {
      id
      name
      jobTitle
      phone
      email
      color {
        hex
      }
      image {
        url
      }
    }
  }
  fragment PerksBlockFragment on DatoCmsPerksBlock {
    title
    descriptionNode {
      childMarkdownRemark {
        html
      }
    }
    perks {
      title
      subtitle
      image {
        url
      }
      color {
        hex
      }
    }
  }
  fragment ServicesBlockFragment on DatoCmsServicesBlock {
    id
    sideText
    buttonLink {
      path
      name
      isExternal
    }
    toolboxPage {
      url
    }
    services {
      id
      label
      icon {
        url
      }
      images {
        url
      }
      title
      description
      exampleCases {
        ...on DatoCmsWork {
          forWho
          url
          logo {
            url
          }
        }
      }
      relatedTools {
        ...on DatoCmsTool {
          headline
          icon {
            url
          }
        }
      }
    }
  }
  fragment AvailablePosition on DatoCmsAvailablePosition {
    id
    title
    description
    jobPosting {
      id
      jobPostName
      positionType
      color {
        red
        green
        blue
        alpha
        rgb
        hex
      }
      jobPostingLink {
        path
      }
    }
  }
  fragment ServicesBigFragment on DatoCmsServicesBig {
    id
    toolboxPage {
      url
    }
    sideText
    services {
      id
      label
      icon {
        url
      }
      images {
        url
      }
      title
      description
      relatedTools {
        ...on DatoCmsTool {
          headline
          icon {
            url
          }
        }
      }
      exampleCases {
        ...on DatoCmsWork {
          forWho
          url
          logo {
            url
          }
        }
      }
    }
  }
  fragment Stepper on DatoCmsStepper {
    id
    steps {
      title
      description
    }
  }
`
