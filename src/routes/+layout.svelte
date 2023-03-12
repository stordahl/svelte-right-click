<script lang="ts">
</script>

<header>
  <h1>
    <a href="/">svelte-context-menu</a>
  </h1>
  <div>
    <a href="https://github.com/stordahl/svelte-context-menu">
      <img src="/images/github.svg" class="github" alt="Github Octocat Logo"/>
    </a>
    <a href="https://npmjs.org/stordahl/svelte-context-menu">
      <img src="/images/npm.svg" alt="npm logotype"/>
    </a>
  </div>
</header>
<main>
  <slot/>
</main>
<footer>
 <div>
  <span>made with &#128153; by <a href="https://stordahl.dev">Jacob Stordahl</a></span>
 </div> 
</footer>

<style>
  main {
    margin: auto;
    min-height: 90%;
    display: grid;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 2rem;
  }

  header > h1 {
    margin: 0;
  }

  header > h1 > a {
    color: var(--text-primary);
    text-decoration: none;
  }

  header > div {
    display: flex;
    align-items: center;
    gap: 17px;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 35px;
    max-height: 35px;
  }

  .github {
    fill: var(--text-primary);
  }
</style>
