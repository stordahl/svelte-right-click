<script lang="ts">
  import ContextMenuParentNode from "./ContextMenuParentNode.svelte";
  import { ContextMenuSchema } from "./ContextMenuSchema";
  
  export let open = false;
  let menuXPosition = 0;
  let menuYPosition = 0;

  function open_context_menu(event:MouseEvent){
    event.preventDefault();
    open = true;
    menuXPosition = event.clientX;
    menuYPosition = event.clientY;
    console.log(event);
  }

  function handle_click_outside(event:MouseEvent){
    if(event.target.getAttribute("id") !== "svelte-context-menu"){
      open = false;
    } 
  }

  /* 
    default browser actions 
    - back
    - reload
    - print
    - save as
    - view source
    - inspect
  */
  
</script>

<svelte:window on:contextmenu={open_context_menu} on:click={handle_click_outside}/>

{#if open}
  <div id="svelte-context-menu" style:--context-menu-x={`${menuXPosition}px`} style:--context-menu-y={`${menuYPosition}px`}>
    <ul>
    {#each $ContextMenuSchema as item}
      {#if item.node_type == "action"}
        <li class="svelte-context-menu-node">
          <button on:click={item.callback}>{item.node_content}</button>
        </li>
      {:else if item.node_type == "parent"}
        <ContextMenuParentNode {item} />
      {/if}
    {/each}
    </ul>
  </div>
{/if}

<style>
  #svelte-context-menu {
    position: absolute;
    top: var(--context-menu-y);
    left: var(--context-menu-x);
    width: 200px;
    height: 200px;
    background-color: white;
    border: 2px solid gray;
    border-radius: 5px;
    box-shadow: 0px 0px 15px #00000041;
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
