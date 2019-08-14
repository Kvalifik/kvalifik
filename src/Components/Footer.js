import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from 'utils/theme'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Icon from 'Blocks/Icon'

const Grid = styled.div`
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  display: grid;
  color: ${props => props.theme.palette.light};
  padding: ${props => props.theme.spacing(7)} 0 ${props => props.theme.spacing(6)};
`

const Title = styled.h1`
  ${props => props.theme.typography.header.mixin()}
  font-size: ${props => props.theme.typography.fontSize.md};
  margin: 0 0 ${props => props.theme.spacing(2)};
`

const Subtitle = styled.h2`
  ${props => props.theme.typography.header.mixin()};
  font-size: ${props => props.theme.typography.fontSize.sm};
`

const Separator = styled.span`
  margin: 0 ${props => props.theme.spacing(1)};
  height: 100%;
  border-right: 1px solid #d1d1d1;
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
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  margin-top: ${props => props.theme.spacing(3)};
  opacity: 0.5;
  font-size: ${props => props.theme.typography.fontSize.xs};
`

const LeftContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const CenterContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  margin: 0 -${props => props.theme.spacing(2)};

  justify-self: center;
  align-self: end;
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
  margin-bottom: ${props => props.theme.spacing(1)};
`

const Footer = ({
  title,
  phoneNumber,
  emailAddress,
  copyrightLine,
  links,
  socialMediaLinks,
  socialMediaHeader
}) => {
  const mappedLinks = socialMediaLinks.map(link => ({
    href: link.linkUrl,
    iconUrl: link.icon.url
  }))

  return (
    <Skewer angle="small" flushBottom bgColor={theme.palette.dark}>
      <Container>
        <Grid>
          <LeftContainer>
            <Title>{title}</Title>
            <Subtitle>
              {phoneNumber}
              <Separator />
              {emailAddress}
            </Subtitle>
            <LinkContainer dangerouslySetInnerHTML={{ __html: links }} />
          </LeftContainer>
          <CenterContainer>
            <LinkHeader>{socialMediaHeader}</LinkHeader>
            {mappedLinks.map(link => (
              <a key={link.href} href={link.href} target="_blank">
                <ExtendedIcon src={link.iconUrl} />
              </a>
            ))}
          </CenterContainer>
          <CopyrightLine>{copyrightLine}</CopyrightLine>
        </Grid>
      </Container>
    </Skewer>
  )
}

Footer.propTypes = {
  title: PropTypes.string,
  phoneNumber: PropTypes.string,
  emailAddress: PropTypes.string,
  copyrightLine: PropTypes.string,
  links: PropTypes.string,
  socialMediaLinks: PropTypes.arrayOf(PropTypes.shape({
    linkUrl: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    })
  })),
  socialMediaHeader: PropTypes.string
}

export default Footer
