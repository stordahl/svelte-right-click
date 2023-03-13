<script lang="ts">
  type Manager = { name: string, cmd: string };

  const managers:Manager[] = [
    { name: "npm", cmd: "npm install --save-dev svelte-right-click" }, 
    { name: "pnpm", cmd: "pnpm add svelte-right-click" },
    { name: "yarn", cmd: "yarn add svelte-right-click" },
  ];

  let selection:Manager = managers[0];

  const copy = () => navigator.clipboard.writeText(selection.cmd)

  /*
    TODO
    - [ ] Copy to clipboard animation/confirm
  */
</script>

<section class="install-wrapper">
  <span>
    {selection.cmd}
  </span>
  <div>
    <label for="managers">
      <select name="managers" bind:value={selection}>
        {#each managers as m}
          <option value="{m}">
            {m.name}
          </option>
        {/each}
      </select>
    </label>
  </div>
  
  <button on:click={copy}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
  </button>
</section>

<style>
  .install-wrapper {
    grid-area: install;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    background-color: var(--black);
    border: 2px solid var(--yellow);
    border-radius: 8px;
    padding: 2rem;
    position: relative;
  }

  .install-wrapper > span {
    color: var(--white);
    font-size: 1.4rem;
  }

  select {
    background: transparent;
    border: 2px solid white;
    border-radius: 4px;
    padding: 3px 5px;
    color: white;
  }

  button {
    background: transparent;
    border: none;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  button:hover {
      cursor: pointer;
    }
</style>
