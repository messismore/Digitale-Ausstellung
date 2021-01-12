<template>
  <div class="terms">
    <h1>Terms Winter 2020</h1>
    <WorksCards :works="works" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const works = await $content('works')
      .only(['advisors', 'author', 'image', 'slug', 'title', 'topics'])
      .sortBy('createdAt', 'asc')
      .fetch()

    // We show the projects in random order, this should probably also work by using sortBy() https://nuxtjs.org/blog/creating-blog-with-nuxt-content#list-all-the-blog-posts
    works.sort(function () {
      return 0.5 - Math.random()
    })

    return {
      works,
    }
  },
}
</script>
<style lang="scss">
.terms {
  h1 {
    font-family: Space Grotesk;
    font-weight: 700;
    size: var(--step-2);
  }
}
</style>
