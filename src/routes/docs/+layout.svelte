<script lang="ts">
  import Toggle from "$internal/Toggle.svelte";
  import { lang } from "./lang"

  let toggleValue:"on"|"off"

  $: if(toggleValue == "on") $lang = "TS"
  $: if(toggleValue == "off" || !toggleValue) $lang = "JS"
 </script>

<div>
  <aside>
    <nav>
      <a href="/docs/getting-started">Getting Started</a>
      <a href="/docs/philosophy">Philosophy</a>
      <a href="/docs/install">Installation</a>
      <a href="/docs/basic-usage">Basic Usage</a>
      <a href="/docs/schemas">Schemas</a>
      <a href="/docs/browser-builtins">Browser Built-ins</a>
      <a href="/docs/style">Styling</a>
      <a href="/docs/types">Types</a>
    </nav>
    <div>
     <Toggle bind:value={toggleValue} onLabel="TS" offLabel="JS" /> 
    </div>
  </aside>
  <article>
    <slot/>
  </article>
</div>

<style>
  div {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    min-height: 100%;
  }

  aside {
    min-width: 175px;
    max-width: 250px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  aside nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  article {
    max-width: 768px;
  }
</style>
