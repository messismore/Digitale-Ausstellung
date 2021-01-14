<template>
  <main class="topics">
    <h1>Topics</h1>
    <ul>
      <li v-for="topic in topics" :key="topic">
        <NuxtLink
          :to="{
            name: 'topics.slug',
            params: { slug: topic.split(' ').join('-'), topic: topic },
          }"
        >
          #{{ topic }}
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const works = await $content('works')
      .only(['topics'])
      .sortBy('topics', 'asc')
      .fetch()

    const topics = works.flatMap((work) => work.topics).sort()

    return { topics }
  },
}
</script>
<style lang="scss">
.topics {
  ul {
    padding: 0;
  }
  li {
    font-size: var(--step-0);
    list-style: none;
    margin-bottom: var(--step--3);
  }
}
</style>
