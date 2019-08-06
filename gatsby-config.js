/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Crazy title!'
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `4cd38b7807abbdff5ee4b344a4d7b0`,
        preview: false,
        disableLiveReload: false,
      }
    }
  ]
}
