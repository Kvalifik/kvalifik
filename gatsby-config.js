/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://kvalifik.dk`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true
      }
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: [
          'Promise',
          'EventSource'
        ]
      }
    },
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.KVALIFIK_API_KEY,
        preview: false,
        disableLiveReload: false
      }
    },
    /*{ DISABLED WHILE WAITING FOR UPDATE
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'kvalifik'
      }
    },*/
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-59470797-4",
        head: true
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W9THFCR",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "gatsby-route-change",
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://kvalifik.us9.list-manage.com/subscribe/post?u=c88ea208db67dd3c9c625a4ae&amp;id=1162fc2390',
          timeout: 6000, 
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    }
  ]
}