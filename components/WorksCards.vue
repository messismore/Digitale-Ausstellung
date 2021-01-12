<template>
  <ul class="WorksCards">
    <li v-for="work in works" :key="work.slug">
      <NuxtLink
        :to="{
          name: 'person.slug',
          params: {
            /*
              We want our urls in the form of '/Full-Name/Work' rather than the filename of the .md file. That's why we don't use work.slug as the slug but rather pass the filename as a parameter called resource.
            */
            person: work.author.split(' ').join('-'),
            slug: work.title.split(' ').join('-'),
            resource: work.slug,
          },
        }"
      >
        <img :src="`/works/${work.slug}/${work.image}`" />
        <h2>{{ work.title }}</h2>
        <p>{{ work.author }}</p>
      </NuxtLink>
      <ul>
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
            {{ advisor }}
          </NuxtLink>
        </li>
      </ul>
      <ul>
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
    </li>
  </ul>
</template>

<script>
export default {
  props: { works: { type: Array, required: true } },
}
</script>

<style lang="scss">
ul.WorksCards {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  margin: var(--step-4) calc(var(--step-1) * -1) 0;

  // Work around flex-box-weirdness
  // see: https://chenhuijing.com/blog/flexbox-and-padding/
  &::after {
    content: '';
    padding-right: var(--step-1);
  }

  li {
    list-style: none;
  }

  & > li {
    margin-right: var(--step-1);
    max-width: 80vh;
    width: 40vh;
    padding-bottom: var(--step-4);

    ul {
      margin-bottom: var(--step-0);
      padding: 0;
    }

    li {
      line-height: var(--step-0);
    }
  }

  // Work around flex-box-weirdness
  // see: https://chenhuijing.com/blog/flexbox-and-padding/
  & > li:last-child {
    margin-right: 0;
  }

  img {
    object-fit: cover;
    height: 40vh;
    max-height: calc(100vw - 2 * var(--step-1));
    max-width: calc(100vw - 2 * var(--step-1));
    width: 40vh;
  }

  h2 {
    font-family: Space Grotesk;
    font-weight: 700;
    font-size: var(--step-0);
  }
}
</style>
