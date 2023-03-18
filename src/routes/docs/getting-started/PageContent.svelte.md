<script>
  import { lang } from "../lang";
</script>

<section>
## Getting Started

To get started with svelte-context-menu, first install the package in your project.

```shell
npm install --save-dev svelte-right-click
# pnpm add svelte-right-click
# yarn add svelte-right-click
```

Initialize the component, create a basic schema, and pass the schema to the `contextMenuSchema` store.

{#if $lang === "TS"}

```svelte
<script lang="ts">
  import ContextMenu, { contextMenuSchema } from "svelte-right-click";
  import type { ContextMenuSchema } from "svelte-right-click";

  const schema:ContextMenuSchema = {
    nodes: [
      {
        node_type: "action",
        node_content: "Fire an Alert!"
        callback: () => alert("Alert Fired from svelte-context-menu!"),
      }
    ]
  };

  contextMenuSchema.set(schema)
</script>

<ContextMenu />
```

{:else}


```svelte
<script>
  import ContextMenu, { contextMenuSchema } from "svelte-right-click";

  const schema = {
    nodes: [
      {
        node_type: "action",
        node_content: "Fire an Alert!"
        callback: () => alert("Alert Fired from svelte-right-click!"),
      }
    ]
  };

  contextMenuSchema.set(schema)
</script>

<ContextMenu />
```

{/if}

</section>
