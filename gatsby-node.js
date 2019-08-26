const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allDatoCmsPage {
        edges {
          node {
            url
            title
          }
        }
      }
    }
  `)
  result.data.allDatoCmsPage.edges.forEach(({ node }) => {
    console.log(`Creating page ${node.title} on ${node.url}`)
    createPage({
      path: node.url,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        url: node.url
      }
    })
  })
}
