exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  console.log('Type: ' + node.internal.type)
  if (node.internal.type === 'DatoCmsWork') {
    const uri = node.forWho.toLowerCase()
      .replace(/\s/g, '-')
      .replace(/æ/gi, 'ae')
      .replace(/ø/gi, 'oe')
      .replace(/å/gi, 'aa')
    console.log('Uri: ' + uri)

    console.log(createNodeField({
      node,
      name: 'slug',
      value: `/work/${uri}`
    }))
  }
}
exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    {
      allDatoCmsWork {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
}
