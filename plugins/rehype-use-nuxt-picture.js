// Replace <img> tags in markdown files with <nuxt-img> tags

const visit = require('unist-util-visit')

module.exports = (options) => (tree) => {
  visit(
    tree,
    // visit img tags, skip those that contain an SVG
    (node) => node.tagName === 'img' && node.properties.src.split('.').pop() !== 'svg',
    (node) => {
      console.log(node.properties.src.split('.').pop())
      node.tagName = 'nuxt-picture'
      /*
      Nuxt/Content does the right thing and URI-encodes the paths of our
      assets. But now Nuxt/Image won't find our source files anymore.
      This is probably a terrible idea that will come back to bite us, but for
      now, let's simply re-decode our sanitised paths. Too bad we're stubborn
      like that.
      */
      node.properties.src = decodeURI(node.properties.src)
    }
  )
}
