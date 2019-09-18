import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from 'utils/theme'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Icon from 'Blocks/Icon'

const Grid = styled.div`
  display: grid;

  grid-template-areas:
    "info links feed"
    "copyright copyright copyright";

  justify-content: space-between;
  align-items: end;

  color: ${props => props.theme.palette.light};
  padding: ${props => props.theme.spacing(7)} 0 ${props => props.theme.spacing(6)};

  @media ${props => props.theme.media.lg} {
    grid-template-areas:
      "info"
      "feed"
      "links"
      "copyright";

    gap: ${props => props.theme.spacing(5)} 0;
    justify-items: center;
    justify-content: center;
  }
`

const Logo = styled.img`
  height: 30px;
  margin: 0 0 ${props => props.theme.spacing(1)};
`

const Subtitle = styled.h2`
  ${props => props.theme.typography.header.mixin()}
  font-size: ${props => props.theme.typography.fontSize.sm};
  white-space: nowrap;
  color: ${props => props.theme.palette.light};

  a {
    color: ${props => props.theme.palette.light};
    text-decoration: none;
  }

  @media ${props => props.theme.media.md} {
    white-space: normal;
  }
`

const Separator = styled.span`
  margin: 0 ${props => props.theme.spacing(1)};
  height: 100%;
  border-right: 1px solid #d1d1d1;

  @media ${props => props.theme.media.md} {
    display: block;
    border-right: 0;
    height: ${props => props.theme.spacing(0.5)};
    margin: 0;
  }
`

const LinkContainer = styled.div`
  margin-top: ${props => props.theme.spacing(3)};

  a {
    ${props => props.theme.typography.body.mixin()}
    font-size: ${props => props.theme.typography.fontSize.sm};
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    width: 50%;
    color: ${props => props.theme.palette.light};
  }

  p {
    margin: 0;
  }
`

const CopyrightLine = styled.div`
  margin-top: ${props => props.theme.spacing(3)};
  font-size: ${props => props.theme.typography.fontSize.xs};
  grid-area: copyright;
  white-space: nowrap;
  opacity: 0.5;

  @media ${props => props.theme.media.md} {
    text-align: center;
    white-space: normal;
  }
`

const InfoContainer = styled.div`
  grid-area: info;

  @media ${props => props.theme.media.lg} {
    text-align: center;
  }
`

const FeedContainer = styled.div`
  grid-area: feed;

  display: grid;
  grid-template-columns: repeat(4, 75px);
  grid-gap: ${props => props.theme.spacing(1.5)};

  @media ${props => props.theme.media.xl} {
    grid-template-columns: repeat(2, 75px);
  }

  @media ${props => props.theme.media.lg} {
    justify-items: center;
    grid-template-columns: repeat(4, 75px);
  }

  @media ${props => props.theme.media.md} {
    grid-template-columns: repeat(2, 75px);
  }
`

const LinksContainer = styled.div`
  grid-area: links;
  justify-self: center;
`

const ExtendedIcon = styled(Icon)`
  margin: 0 ${props => props.theme.spacing(1)};
  width: 30px;
  height: 30px;
  display: inline-block;
`

const LinkHeader = styled.div`
  ${props => props.theme.typography.body.mixin()}
  font-size: ${props => props.theme.typography.fontSize.xs};
  margin-bottom: ${props => props.theme.spacing(1.5)};
`

const FeedItem = styled.div`
  width: 75px;
  height: 75px;
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;

  &:last-child {
    margin-right: 0;
  }
`

const FeedHeader = styled.div`
  ${props => props.theme.typography.body.mixin()}
  font-size: ${props => props.theme.typography.fontSize.xs};
  grid-column: 1 / -1;
`

const Footer = ({
  logoUrl,
  phoneNumber,
  emailAddress,
  copyright,
  cvr,
  address,
  links,
  socialMediaLinks,
  socialMediaHeader,
  instagramFeed
}) => {
  const mappedLinks = socialMediaLinks.map(link => ({
    href: link.linkUrl,
    iconUrl: link.icon.url
  }))
  const mappedFeed = instagramFeed.map(node => ({
    src: node.thumbnails[3].src,
    timestamp: node.timestamp
  }))
  mappedFeed.sort((a, b) => {
    if (a.timestamp > b.timestamp) {
      return -1
    } else if (a.timestamp < b.timestamp) {
      return 1
    }
    return 0
  })
  const slicedFeed = mappedFeed.slice(0, 4)

  return (
    <Skewer angle="small" flushBottom bgColor={theme.palette.dark} layer={1200}>
      <Container>
        <Grid>
          <InfoContainer>
            <Logo src={logoUrl} />
            <Subtitle>
              {phoneNumber}
              <Separator />
              {emailAddress}
            </Subtitle>
            <LinkContainer dangerouslySetInnerHTML={{ __html: links }} />
          </InfoContainer>
          <LinksContainer>
            <LinkHeader>{socialMediaHeader}</LinkHeader>
            {mappedLinks.map(link => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                <ExtendedIcon src={link.iconUrl} />
              </a>
            ))}
          </LinksContainer>
          <FeedContainer>
            <FeedHeader>Follow us on Instagram</FeedHeader>
            {slicedFeed.map(item => (
              <FeedItem key={item.src} src={item.src} />
            ))}
          </FeedContainer>
          <CopyrightLine>
            {copyright}
            <Separator />
            {cvr}
            <Separator />
            {address}
          </CopyrightLine>
        </Grid>
      </Container>
    </Skewer>
  )
}

Footer.propTypes = {
  logoUrl: PropTypes.string,
  phoneNumber: PropTypes.string,
  emailAddress: PropTypes.string,
  copyright: PropTypes.string,
  cvr: PropTypes.string,
  address: PropTypes.string,
  links: PropTypes.string,
  socialMediaLinks: PropTypes.arrayOf(PropTypes.shape({
    linkUrl: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    })
  })),
  socialMediaHeader: PropTypes.string,
  instagramFeed: PropTypes.arrayOf(PropTypes.shape({
    thumbnails: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      timestamp: PropTypes.number
    }))
  }))
}

export default Footer
