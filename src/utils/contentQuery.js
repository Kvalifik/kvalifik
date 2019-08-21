import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockHeaderFragment on DatoCmsBlockHeader {
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
  fragment BlockCaseGridFragment on DatoCmsBlockCaseGrid {
    id
    hasMoreWork
    moreWorkPage {
      url
    }
    works {
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
      url
    }
  }
  fragment BlockSloganFragment on DatoCmsBlockSlogan {
    id
    punchline
    bgColor {
      hex
    }
  }
  fragment BlockToolboxFragment on DatoCmsBlockToolbox {
    id
  }
  fragment BlockActionFragment on DatoCmsBlockAction {
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
  fragment BlockOverlayFragment on DatoCmsBlockOverlay {
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
  fragment BlockCaseInfoFragment on DatoCmsBlockCaseInfo {
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

  fragment PageContentFragment on DatoCmsPage {
    content {
      __typename
      ...BlockHeaderFragment
      ...BlockCaseGridFragment
      ...BlockSloganFragment
      ...BlockOverlayFragment
      ...BlockActionFragment
      ...BlockToolboxFragment
      ...BlockCaseInfoFragment
    }
  }

  fragment WorkPageContentFragment on DatoCmsWork {
    page {
      __typename
      ...BlockHeaderFragment
      ...BlockCaseGridFragment
      ...BlockSloganFragment
      ...BlockOverlayFragment
      ...BlockActionFragment
      ...BlockToolboxFragment
      ...BlockCaseInfoFragment
    }
  }
`
