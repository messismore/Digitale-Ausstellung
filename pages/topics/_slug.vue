<template>
  <div class="topic">
    <h1>#{{ params.topic }}</h1>
    <WorksCards :works="works" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const works = await $content('works')
      .only(['advisors', 'author', 'date', 'image', 'slug', 'title', 'topics'])
      .where({ topics: { $contains: params.topic } })
      .sortBy('date', 'asc')
      .fetch()

    return {
      works,
      params,
    }
  },
}
</script>
