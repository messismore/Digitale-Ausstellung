# CSS

To allow for a different design for each year's front page, we strictly namespace our CSS to each Vue component.
This runs counter to common sense of DRY code and CSS's cascade, but it allows the project to be picked up and worked on by different authors more easily.

The actual styling is done in the `<style>` tag of each Vue component.

To keep the project approachable, we forego helpers such as sass, stylus, or CSS-in-JS. We'll make exception for [SCSS nesting](https://sass-lang.com/documentation/style-rules#nesting), though. It's just too convenient to live without.

# IMAGES

<nuxt-picture> and <nuxt-img> have their source directory set to `assets/images`. There is an idiotic hack to get `Nuxt/Content` and `Nuxt/Image` work with paths with special characters in them, so if anything breaks, have a look at `plugins/rehype-use-nuxt-picture.js` first. It's probably that.
