<template>
  <main class="person">
    <h1>{{ params.person }}</h1>
    <WorksCards :works="works" />
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const works = await $content('works')
      .only(['advisors', 'author', 'date', 'image', 'slug', 'title', 'topics'])
      .where({ advisors: { $contains: params.person } })
      .sortBy('date', 'asc')
      .fetch()

    return {
      works,
      params,
    }
  },
}
</script>
