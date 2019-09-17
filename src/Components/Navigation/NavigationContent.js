import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import targetBlankIcon from 'graphics/target_blank.svg'

const Li = styled.li`
  transition: 0.6s ${props => props.index * 0.01 + 's'} cubic-bezier(0.66, 0.03, 0.23, 0.99);
  list-style-type: none;
  ${props => props.collapsed
    ? css`
      padding-left: calc(200px + (${props => props.index * 10 + 'px'}) );
      opacity: 0;
      `
    : css`
      padding-left: 0px;
      opacity: 1;
    `}
`

const NavItems = styled.div`
  margin-left: ${props => props.theme.spacing(8)};
  justify-self: left;
  align-self: center;

  &:first-of-type {
    margin-top: ${props => props.theme.navBarWidth};
  }
`

const NavItem = styled.div`
  ${props => props.isExternal && css`
    a:after{
      content: url('${targetBlankIcon}');
    }
  `}

  a {
    color: white;
    text-decoration: none;
    line-height: ${props => props.theme.spacing(5)};
    height: 100%;
    font-weight: 700;
    font-size: ${props => props.theme.typography.fontSize.menuItem};
    text-transform: uppercase;
  }
`

const FooterItem = styled.div`
  ${props => props.isExternal && css`
    a {
      display:flex;

      &:after {
        margin-top: -3px;
        margin-left: 5px;
        content: url('${targetBlankIcon}');
      }
    }
  `}

  a {
    line-height: ${props => props.theme.spacing(3)};
    color: white;
    text-decoration: none;
    font-weight: 300;
    font-size: calc((${props => props.theme.typography.fontSize.menuItem}) * 0.75);
    text-transform: uppercase;
  }
`

const Root = styled.div`
  color: white;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const SocialIcons = styled.div`
  margin-top: ${props => props.theme.spacing(1)};
  grid-gap: ${props => props.theme.spacing(2)};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`

const SocialIcon = styled.a`
  transition: 0.6s ${props => props.index * 0.01 + 's'} cubic-bezier(0.66, 0.03, 0.23, 0.99);

  img {
    width: 30px;
  }

  ${props => props.collapsed
    ? css`
      opacity: 0;
      padding-left: calc(500px + (${props => props.index * 10 + 'px'}) );
      `
    : css`
      opacity: 1;
      padding-left: 0px;
    `}
`

const NavigationContent = props => {
  const { navigationItems, navigationLinks, collapsed, socialMediaLinks } = props

  return (
    <Root>
      <NavItems>
        {
          navigationItems.map((navigationItem, i) => (
            <Li collapsed={collapsed} key={i} index={i}>
              <NavItem isExternal={navigationItem.isExternal}>
                {navigationItem.isExternal ? (
                  <a
                    href={navigationItem.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {navigationItem.name}
                  </a>
                ) : (
                  <Link to={navigationItem.path}>{navigationItem.name}</Link>
                )}
              </NavItem>
            </Li>
          ))
        }
      </NavItems>
      <NavItems>
        {
          navigationLinks.map((navigationItem, i) => (
            <Li collapsed={collapsed} key={i} index={i + navigationItems.length}>
              <FooterItem isExternal={navigationItem.isExternal}>
                {navigationItem.isExternal ? (
                  <a
                    href={navigationItem.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {navigationItem.name}
                  </a>
                ) : (
                  <Link to={navigationItem.path}>{navigationItem.name}</Link>
                )}
              </FooterItem>
            </Li>
          ))
        }
        <SocialIcons>
          {
            socialMediaLinks.map((socialMediaLink, i) =>
              <SocialIcon
                href={socialMediaLink.linkUrl}
                collapsed={collapsed}
                key={i}
                index={i + navigationItems.length}
              >
                <img src={socialMediaLink.icon.url} />
              </SocialIcon>
            )
          }
        </SocialIcons>
      </NavItems>
    </Root>
  )
}

NavigationContent.propTypes = {
  navigationItems: PropTypes.array,
  navigationLinks: PropTypes.array,
  collapsed: PropTypes.bool,
  socialMediaLinks: PropTypes.arrayOf(PropTypes.shape({
    linkUrl: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    })
  }))
}
export default NavigationContent
