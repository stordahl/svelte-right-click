<script lang="ts">
  import { writable } from "svelte/store";
  import ContextMenuParentNode from "./ContextMenuParentNode.svelte";
  import { contextMenuSchema, browserSchema } from "./ContextMenuSchema";
  import { callbackWrapper, calculateCoordsFromChild } from "./utils";
  
  export let open = writable(false);
  export let renderDefaults = true;

  let menuXPosition = 0;
  let menuYPosition = 0;
  let contain:HTMLElement|null = null;

  $: contain = $contextMenuSchema?.container || null;

  function open_context_menu(event:MouseEvent){
    const target = event.target as HTMLElement;
    const { left, top } = target.getBoundingClientRect();
    $open = false;
    
    if(!!contain && 
      target !== contain && 
      ![...contain.children].includes(target)
    ) return
    
    event.preventDefault();
    $open = true;

    if(contain){
      contain.style.position = "relative";
      let data = calculateCoordsFromChild({
        eventX: event.offsetX,
        eventY: event.offsetY,
        childX: left,
        childY: top,
        container: contain,
      })
      if(target !== contain){
        menuXPosition = data.x;
        menuYPosition = data.y;
      } else {
        menuXPosition = event.offsetX;
        menuYPosition = event.offsetY;
      }
    } else {  
      menuXPosition = event.clientX;
      menuYPosition = event.clientY;
    }
  }

  function handle_click_outside(event:MouseEvent){
    const target = event.target as HTMLElement;
    if(target.getAttribute("id") !== "svelte-context-menu") $open = false; 
  }
</script>

<svelte:window 
  on:contextmenu={open_context_menu} 
  on:click={handle_click_outside} 
  on:beforeprint={() => {
    setTimeout(() => open.set(false), 300);
  }}
/>

{#if $open}
  <div id="svelte-context-menu" style:--context-menu-x={`${menuXPosition}px`} style:--context-menu-y={`${menuYPosition}px`}>
    <ul>
    {#each $contextMenuSchema.nodes as item}
      {#if item.node_type == "action"}
        {@const cb = item.callback}
        <li class="svelte-context-menu-node">
          <button 
            on:click={() => callbackWrapper(cb, open)}
          >{item.node_content}</button>
        </li>
      {:else if item.node_type == "parent"}
        <ContextMenuParentNode {item} />
      {/if}
    {/each}
    {#if renderDefaults}
      <hr/>
      {#each $browserSchema.nodes as item}
        {#if item.node_type == "action"}
          {@const cb = item.callback}
          <li class="svelte-context-menu-node">
            <button on:click={() => callbackWrapper(cb, open)}>{item.node_content}</button>
          </li>
        {:else if item.node_type == "parent"}
          <ContextMenuParentNode {item}/>
        {/if}
      {/each}
    {/if}
    </ul>
  </div>
{/if}

<style>
  #svelte-context-menu {
    position: absolute;
    top: var(--context-menu-y);
    left: var(--context-menu-x);
    width: max-content;
    height: auto;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 0px 0px 15px #163a6726;
    z-index: 100;
    font-family: sans-serif;
    padding: 5px;
  }

  button {
    padding: 0;
  }

  li.svelte-context-menu-node {
    padding: 4px;
  }
    
  li.svelte-context-menu-node:hover, button:hover {
    cursor: pointer;
  }

  li.svelte-context-menu-node,
  li.svelte-context-menu-node > button {
    font-size: 1rem; 
    border-radius: 3px;
  }

  li.svelte-context-menu-node:hover {
    background-color: lightgray;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0;
  }
</style>
