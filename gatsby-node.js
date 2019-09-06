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

    if (/404/.test(node.url)) {
      createPage({
        path: node.url,
        component: path.resolve(`./src/templates/404.js`),
        context: {
          url: node.url
        }
      })
    } else {
      createPage({
        path: node.url,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          url: node.url
        }
      })
    }
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  console.log({path: page.path})
  const { createPage } = actions
  if (page.path.match(/^\/toolbox/)) {
    page.matchPath = '/toolbox/*'
    createPage(page)
  }
}
