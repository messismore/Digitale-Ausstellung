<template>
  <main class="topic">
    <h1>#{{ topic }}</h1>
    <WorksCards :works="works" />
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const works = await $content('works')
      .only(['advisors', 'author', 'date', 'image', 'slug', 'title', 'topics'])
      .where({ topics: { $regex: params.slug.split('-').join('[ -]') } })
      .sortBy('date', 'asc')
      .fetch()

    const topic = works[0].topics.find((topic) =>
      RegExp(params.slug.split('-').join('[ -]')).test(topic)
    )

    return {
      topic,
      works,
    }
  },
}
</script>
<style lang="scss">
.topic {
  h1 {
    font-family: Space Grotesk;
    font-weight: 700;
    size: var(--step-2);
  }
}
</style>
