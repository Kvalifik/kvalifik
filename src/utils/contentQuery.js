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
        headline,
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
  fragment ActionBlockFragment on DatoCmsAction {
    id
    title
    description
    buttonLink {
      name
      path
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
    bgColor {
      hex
    }
    id
    description
    duration
    number
  }

  fragment PageFragment on DatoCmsPage {
    pageSetup {
      __typename
      ...HeaderFragment,
      ...ActionBlockFragment,
      ...SloganFragment,
      ...PercentageBlockFragment,
      ...CaseGridFragment,
      ...CaseInfoFragment,
      ...ToolboxFragment
      ...OverlayBlockFragment
    }
  }

  fragment WorkPageContentFragment on DatoCmsWork {
    page {
      ...PageFragment
    }
  }
`
