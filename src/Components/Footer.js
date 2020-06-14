import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from 'utils/theme'

import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import Icon from 'Components/Shared/Icon'
import UniversalLink from 'Components/Shared/UniversalLink'
import targetBlank from 'graphics/target_blank.svg'
import Svg from 'react-inlinesvg'

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

const Subtitle = styled.div`
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

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${props => props.theme.media.lg} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const LinkItem = styled(UniversalLink)`
  ${props => props.theme.typography.body.mixin()}
  font-size: ${props => props.theme.typography.fontSize.sm};
  text-transform: uppercase;
  text-decoration: none;

  /* display: inline-block; */
  color: ${props => props.theme.palette.light};
  line-height: 1.4em;
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
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

/* const FeedContainer = styled.div`
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
` */

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

/* const FeedItem = styled.a`
  width: 75px;
  height: 75px;
  overflow: hidden;
  display: inline-block;

  &:last-child {
    margin-right: 0;
  }

  & > img {
    width: 100%;
  }
` */

/* const FeedHeader = styled.div`
  ${props => props.theme.typography.body.mixin()}
  font-size: ${props => props.theme.typography.fontSize.xs};
  grid-column: 1 / -1;
` */

const Footer = ({
  logoUrl,
  phoneNumber,
  emailAddress,
  copyright,
  cvr,
  address,
  links,
  socialMediaLinks,
  socialMediaHeader/* ,
  instagramFeed,
  instagramFeedTitle  */
}) => (
  <Skewer angle="small" flushBottom bgColor={theme.palette.dark} layer={1200}>
    <Container>
      <Grid>
        <InfoContainer>
          <Logo src={logoUrl} />
          <Subtitle>
            <a href={'tel:' + phoneNumber}>{phoneNumber}</a>
            <Separator />
            <a href={'mailto:' + emailAddress}>{emailAddress}</a>
          </Subtitle>
          <LinkContainer>
            {links.map((link, i) => (
              <LinkItem
                key={i}
                to={link.path}
                isExternal={link.isExternal}
              >
                {link.name}
                {link.isExternal && (
                  <Svg src={targetBlank} />
                )}
              </LinkItem>
            ))}
          </LinkContainer>
        </InfoContainer>
        <LinksContainer>
          <LinkHeader>{socialMediaHeader}</LinkHeader>
          {socialMediaLinks.map(link => (
            <UniversalLink key={link.path} to={link.path} isExternal={link.isExternal}>
              <ExtendedIcon src={link.icon && link.icon.url} />
            </UniversalLink>
          ))}
        </LinksContainer>

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
/* DISABLED while waiting for instagram plugin update

  const mappedFeed = instagramFeed.map(node => ({
    src: node.thumbnails[3].src,
    timestamp: node.timestamp,
    id: node.id
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
  */
Footer.propTypes = {
  logoUrl: PropTypes.string,
  phoneNumber: PropTypes.string,
  emailAddress: PropTypes.string,
  copyright: PropTypes.string,
  cvr: PropTypes.string,
  address: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
    isExternal: PropTypes.bool
  })),
  socialMediaLinks: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    }),
    isExternal: PropTypes.bool
  })),
  socialMediaHeader: PropTypes.string
  /* instagramFeed: PropTypes.arrayOf(PropTypes.shape({
    thumbnails: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      timestamp: PropTypes.number
    })),
    caption: PropTypes.string
  })),
  instagramFeedTitle: PropTypes.string  */
}

export default Footer
