<template>
  <main class="person">
    <h1>{{ name }}</h1>
    <WorksCards :works="works" />
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const works = await $content('works')
      .only(['advisors', 'author', 'date', 'image', 'slug', 'title', 'topics'])
      .where({ advisors: { $regex: params.slug.split('-').join('[ -]') } })
      .sortBy('date', 'asc')
      .fetch()

    const name = works[0].advisors.find((person) =>
      RegExp(params.slug.split('-').join('[ -]')).test(person)
    )

    return {
      name,
      works,
    }
  },
}
</script>
