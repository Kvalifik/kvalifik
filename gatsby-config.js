/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
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
    }
  ]
}
