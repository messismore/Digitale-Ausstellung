// Replace <img> tags in markdown files with <nuxt-img> tags

const visit = require('unist-util-visit')

module.exports = (options) => (tree) => {
  visit(
    tree,
    // visit img tags
    (node) => node.tagName === 'img',
    (node) => {
      node.tagName = 'nuxt-picture'
    }
  )
}
