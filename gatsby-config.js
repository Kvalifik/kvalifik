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
          'Promise'
        ]
      }
    },
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '4cd38b7807abbdff5ee4b344a4d7b0',
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
