<template>
  <main class="work">
    <header>
      <ul>
        <li>{{ work.kind }} by {{ work.author }}</li>
        <li>
          <NuxtLink
            :to="{
              name: 'terms-term',
              params: { term: `work.term.split(' ').join('-')` },
            }"
          >
            <time :datetime="work.date">
              {{ work.term }}
            </time>
          </NuxtLink>
        </li>
        <ul class="inline">
          <span>Advisors:</span>
          <li v-for="advisor in work.advisors" :key="advisor">
            <NuxtLink
              :to="{
                name: 'slug',
                params: {
                  person: advisor,
                  slug: advisor.split(' ').join('-'),
                },
              }"
            >
              {{ advisor }},
            </NuxtLink>
          </li>
        </ul>
        <ul class="inline">
          <li v-for="topic in work.topics" :key="topic">
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
      </ul>
    </header>
    <article>
      <nuxt-content :document="work" />
    </article>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const work = await $content(
      'works',
      `${params.person}-${params.slug}`
    ).fetch()
    return { work }
  },
}
</script>
<style lang="scss">
.work {
  h1 {
    font-family: Space Grotesk;
    font-size: var(--step-3);
    font-weight: 700;
    line-height: var(--step-3);
    margin-bottom: var(--step-2);
    margin-top: var(--step-5);
  }
  h2 {
    font-family: Space Grotesk;
    font-size: var(--step-2);
    font-weight: 700;
    margin-top: var(--step-5);
  }
  img {
    object-fit: contain;
    width: 100%;
  }
  li {
    list-style: none;
  }
  ul {
    padding: 0;
  }
  ul.inline li {
    display: inline;
    // margin-right: 0.5em;
  }

  p {
    max-width: 80ch;
    // margin: 0;
  }

  p + p {
    margin: 0;
  }

  .nuxt-content {
    display: grid;
    grid: auto-flow / repeat(5, 1fr);
    grid-gap: var(--step-0);

    & > * {
      grid-column: 1/6;
    }
  }
}
</style>
