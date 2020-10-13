import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from 'utils/theme'
import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import Icon from 'Components/Shared/Icon'
import UniversalLink from 'Components/Shared/UniversalLink'
import targetBlank from 'graphics/target_blank.svg'
import Svg from 'react-inlinesvg'
import SignupModal from 'Components/SignupModal'

const Grid = styled.div`
  display: grid;

  grid-template-areas:
    "logo logo logo"
    "info ... social"
    "copyright copyright copyright";

  justify-content: space-between;
  align-items: end;

  color: ${props => props.theme.palette.light};
  padding: ${props => props.theme.spacing(7)} 0 ${props => props.theme.spacing(6)};

  @media ${props => props.theme.media.lg} {
    grid-template-areas:
      "social"
      "info"
      "copyright";

    gap: ${props => props.theme.spacing(5)} 0;
    justify-items: center;
    justify-content: center;
  }
`

const Logo = styled.img`
  height: 30px;
  margin: 0 0 ${props => props.theme.spacing(3)};
  display: none;
  @media ${props => props.theme.media.lg} {
    display: block;
  }

`
const StandaloneLogo = styled(Logo)`
  grid-area: logo;
  display: block;
  @media ${props => props.theme.media.lg} {
    display: none;
  }
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
  @media screen and (max-width: 350px) {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
`

const Separator = styled.span`
  margin: 0 ${props => props.theme.spacing(1)};
  height: 100%;
  border-right: 1px solid #d1d1d1;

  /* @media ${props => props.theme.media.md} {
    display: block;
    border-right: 0;
    height: ${props => props.theme.spacing(0.5)};
    margin: 0;
  } */
`

const LinkContainer = styled.div`
  margin-top: ${props => props.theme.spacing(3)};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${props => props.theme.media.lg} {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    max-width: 300px;
    width: 100%;
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
  @media ${props => props.theme.media.lg} {
    margin-top: ${props => props.theme.spacing(0)};
  }
  font-size: ${props => props.theme.typography.fontSize.xs};
  grid-area: copyright;
  white-space: nowrap;
  opacity: 0.5;
  a{
    text-decoration:none;
  }
  @media ${props => props.theme.media.lg} {
    text-align: left;
    white-space: normal;
    padding: ${props => props.theme.spacing(0, 2.5)};
  }
  @media ${props => props.theme.media.sm} {
    max-width: 50ch;
    justify-self: flex-start;
  }
`

const InfoContainer = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  @media ${props => props.theme.media.lg} {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-self: flex-start;
    align-items: flex-start;
    /* width: 100%; */
    padding: ${props => props.theme.spacing(0, 2.5)};
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
  grid-area: social;
  justify-self: center;
  & > a:first-of-type {
    & > img {
      margin-left: 0;
    }
  }
  @media ${props => props.theme.media.lg} {
    justify-self: flex-start;
    padding: ${props => props.theme.spacing(0, 2.5)};
  }
`

const ExtendedIcon = styled(Icon)`
  margin: 0 ${props => props.theme.spacing(1)};
  width: 30px;
  height: 30px;
  display: inline-block;
  
`

const LinkHeader = styled.div`
  ${props => props.theme.typography.body.mixin()}
  font-size: 14px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing(2)};
  max-width: 39ch;
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
const NewsletterRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => props.theme.spacing(3)};
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
`

const SignupInput = styled.input`
  height: 55px;
  background: #515151;
  border: none;
  padding: ${props => props.theme.spacing(0, 1.5)};
  color: white;
  @media ${props => props.theme.media.md} {
    width: 75%;
  }
  &::placeholder {
    color: #A8A8A8;
  }
  &:focus {
    outline: none;
  }
`
const SignupButton = styled.button`
  background: ${props => props.theme.palette.primary.D};
  width: 100%;
  max-width: 178px;
  @media ${props => props.theme.media.md} {
    width: 50%;
    padding: ${props => props.theme.spacing(1.25, 0.5)};
  }
  margin: 0 auto;
  padding: ${props => props.theme.spacing(1.5, 4)};
  border: none;
  font-size: 17px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  &:focus {
    outline: none;
  }
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
  handleSignupClick,
  callToAction,
  successMessage,
  errorMessage,
  checkboxMessage,
  disclaimerMessage
}) => {
  const [showNewsletterModal, setNewsletterModalVisibility] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const submitFooterEmail = (e) => {
    e.preventDefault()
    setNewsletterModalVisibility(true)
  }

  return (
    <>
      {showNewsletterModal &&
        <SignupModal
          hideModal={() => setNewsletterModalVisibility(false)}
          callToAction={callToAction}
          successMessage={successMessage}
          errorMessage={errorMessage}
          email={newsletterEmail}
          checkboxMessage={checkboxMessage}
          disclaimerMessage={disclaimerMessage}
        />
      }
      <Skewer angle="small" flushBottom bgColor={theme.palette.dark} layer={1200}>
        <Container>
          <Grid>
            <StandaloneLogo src={logoUrl} />
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
              <form action="" method="POST" onSubmit={(e) => submitFooterEmail(e)}>
                <NewsletterRow>
                  <InputWrapper>
                    <SignupInput
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      required
                    />
                    <SignupButton onClick={handleSignupClick}>Sign up</SignupButton>
                  </InputWrapper>
                </NewsletterRow>
              </form>

              {socialMediaLinks.map(link => (
                <UniversalLink key={link.path} to={link.path} isExternal={link.isExternal}>
                  <ExtendedIcon src={link.icon && link.icon.url} />
                </UniversalLink>
              ))}
            </LinksContainer>
            <CopyrightLine>
              <span dangerouslySetInnerHTML={{ __html: copyright }} />
              <Separator />
              <span dangerouslySetInnerHTML={{ __html: cvr }} />
              <Separator />
              <span dangerouslySetInnerHTML={{ __html: address }} />
            </CopyrightLine>
          </Grid>
        </Container>
      </Skewer>
    </>
  )
}
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
  socialMediaHeader: PropTypes.string,
  handleSignupClick: PropTypes.func,
  callToAction: PropTypes.string,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  checkboxMessage: PropTypes.string,
  disclaimerMessage: PropTypes.string
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
