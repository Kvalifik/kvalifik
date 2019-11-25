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
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'kvalifik'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-59470797-4",
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    }
  ]
}
