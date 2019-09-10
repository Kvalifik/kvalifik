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
    media {
      __typename
      ... on DatoCmsVideo {
        thumbnail {
          url
        }
        video {
          url
        }
      }
      ... on DatoCmsImage {
        image {
          url
        }
      }
    }
  }
  fragment CaseGridFragment on DatoCmsCaseGrid {
    id
    moreWorkPage {
      url
    }
    cases {
      title
      description
      id
      forWho
      fullSize
      color {
        hex
      }
      image{
        url
      }
      page {
        ... on DatoCmsPage {
          url
        }
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
      thumbnail {
        url
      }
      video {
        url
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
  fragment NotFoundBlockFragment on DatoCms404 {
    id
    title
    description
    buttonLink {
      isExternal
      name
      path
    }
    image {
      url
    }
  }
  fragment ServicesBlockFragment on DatoCmsServicesBlock {
    id
    services {
      id
      label
      icon {
        url
      }
      image {
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

  fragment PageFragment on DatoCmsPage {
    title
    url
    pageSetup {
      __typename
      ...HeaderFragment
      ...ActionBlockFragment
      ...SloganFragment
      ...PercentageBlockFragment
      ...CaseGridFragment
      ...CaseInfoFragment
      ...ToolboxFragment
      ...ToolboxBigFragment
      ...OverlayBlockFragment
      ...QuoteBlockFragment
      ...PeopleBlockFragment
      ...NotFoundBlockFragment
      ...ServicesBlockFragment
    }
  }
`
