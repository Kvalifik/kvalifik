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
  fragment CaseGridFragment on DatoCmsCaseGrid {
    id
    sideText
    moreWorkPage {
      url
    }
    cases {
      title
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
  fragment CaseInfoFragment on DatoCmsCaseInfo {
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
    video {
      image {
        url
      }
      video {
        provider
        providerUid
      }
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
  fragment ServicesBlockFragment on DatoCmsServicesBlock {
    id
    sideText
    buttonLink {
      path
      name
      isExternal
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
