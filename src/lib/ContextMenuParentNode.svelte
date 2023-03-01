<script lang="ts">
  import type { ContextMenuSchemaParentNode } from "./types"

  export let item:ContextMenuSchemaParentNode;

  let open = item.node_is_open || false;
  
  let parentElement:HTMLElement;

  $:rect = parentElement?.getBoundingClientRect();

  $:console.log(rect)
</script>

<li 
  class="svelte-context-menu-node" 
  bind:this={parentElement}
  on:mouseenter={() => open = true} 
  on:mouseleave={() => open = false}
>
  {item.node_content}
  {#if open}
    <ul 
      class="svelte-context-menu-child-node" 
      style:--context-menu-child-x={`${rect?.width + 5}px`} 
      style:--context-menu-child-y={`0px`}
    >
      {#each item.children as child}
        <li class="svelte-context-menu-node">
          <button on:click={child.callback}>{child.node_content}</button>
        </li>
      {/each}
    </ul>
  {/if}
</li>

<style>
  button {
    padding: 0;
    border: none;
    background-color: white;
  }

  li.svelte-context-menu-node {
    padding: 4px;
  }
    
  li.svelte-context-menu-node:hover, button:hover {
    cursor: pointer;
  }
  
  li.svelte-context-menu-node:hover {
    background-color: lightgray;
  }

  li.svelte-context-menu-node,
  li.svelte-context-menu-node > button {
    font-size: 1rem; 
    border-radius: 3px;
  }

  ul.svelte-context-menu-child-node {
    position: absolute;
    top: var(--context-menu-child-y);
    left: var(--context-menu-child-x);
    padding: 0;
    list-style: none;
  }
</style>
