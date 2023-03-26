<script lang="ts">
  import { writable } from "svelte/store";
  import { callbackWrapper } from "./utils";
  import type { ContextMenuSchemaParentNode } from "./types"

  export let item:ContextMenuSchemaParentNode;

  let open = writable(false);
  
  let parentElement:HTMLElement;

  $:rect = parentElement?.getBoundingClientRect();
</script>

<li 
  class="svelte-context-menu-node" 
  bind:this={parentElement}
  on:mouseenter={() => $open = true} 
  on:mouseleave={() => $open = false}
>
  {item.node_content}
  {#if $open}
    <ul 
      class="svelte-context-menu-child-node" 
      style:--context-menu-child-x={`${rect?.width}px`} 
      style:--context-menu-child-y={`0px`}
    >
      {#each item.children as child}
        <li class="svelte-context-menu-node">
          {#if child.node_type == "action"}
            {@const cb = child.callback}
            <button on:click={() => callbackWrapper(cb, open)}>{child.node_content}</button>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</li>

<style>
  button {
    padding: 0;
    border: none;
    background-color: transparent;
    white-space: nowrap;
    color: var(--color, #000000);
  }

  button:hover {
    background-color: lightgray;
  }

  li.svelte-context-menu-node {
    padding: var(--node-padding, 4px);
    position: relative;
  }
    
  li.svelte-context-menu-node:hover, button:hover {
    cursor: pointer;
  }
  
  li.svelte-context-menu-node:hover {
    background-color: var(--node-background-hover, lightgray);
  }

  li.svelte-context-menu-node,
  li.svelte-context-menu-node > button {
    font-size: var(--font-size, 1rem); 
    border-radius: var(--node-border-radius, 3px);
  }

  ul.svelte-context-menu-child-node {
    position: absolute;
    top: var(--context-menu-child-y);
    left: var(--context-menu-child-x);
    padding: 5px;
    list-style: none;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
</style>
