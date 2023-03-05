<script lang="ts">
  import { contextMenuSchema } from "$lib/ContextMenuSchema";
  import ContextMenu from "$lib/ContextMenu.svelte";
  import Hero from "./Hero.svelte";
  import Install from "./Install.svelte";

  let container:HTMLElement;

  $: contextMenuSchema.update((s) => ({container, nodes: s.nodes}));
</script>

<div class="wrapper">
  <Hero />
  <Install />

  <h2>Demo</h2>
  <div id="example-container" bind:this={container}>
    <span>Right Click here!</span>
    <ContextMenu />
  </div>
</div>

<style>
  .wrapper {
    max-width: 900px;
    margin: auto;
  }

  #example-container {
    margin: 2rem auto;
    min-height: 300px;
    border: 2px dashed var(--black);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #example-container > span { font-size: 1.5rem; }
</style>

