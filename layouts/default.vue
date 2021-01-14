<template>
  <div class="default">
    <header>
      <a class="udk-logo" href="https://www.udk-berlin.de/studium/architektur/">
        <img src="~/assets/images/udk-logo.svg" />
      </a>
      <nuxtLink class="home" to="/">Architecture Theses</nuxtLink>
    </header>

    <Nuxt />
    <footer>Imprint</footer>
  </div>
</template>

<style lang="scss">
.default {
  padding: var(--step-1);

  a {
    color: black;
    text-decoration: none;
  }

  a.udk-logo,
  a.home {
    display: inline-block;
  }

  a.home {
    padding: var(--step--5);
    text-decoration: none;
  }

  .udk-logo img {
    width: var(--step-2);
  }
}
</style>
