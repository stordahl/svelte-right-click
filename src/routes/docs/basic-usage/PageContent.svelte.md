<script>
 import { lang } from "../lang"; 
</script>

## Basic Usage

{#if $lang === "TS"}

```svelte
<!-- +layout.svelte -->
<script lang="ts">
  import ContextMenu from "svelte-right-click";
<\script>

<ContextMenu />
```

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import { contextMenuSchema } from "svelte-right-click";
  import type { ContextMenuSchema } from "svelte-right-click";

  // Create a Schema for your context menu
  const schema:ContextMenuSchema = {
    nodes: [
      {
        node_type: "action",
        node_content: "Fire an Alert!",
        callback: () => alert('Clicked the Custom Context Menu!'),
      }
    ],
  };

  contextMenuSchema.set(schema);
</script>
```

{:else}

```svelte
<!-- +layout.svelte -->
<script>
  import ContextMenu from "svelte-right-click";
<\script>

<ContextMenu />
```

```svelte
<!-- +page.svelte -->
<script>
  import { contextMenuSchema } from "svelte-right-click";

  // Create a Schema for your context menu
  const schema = {
    nodes: [
      {
        node_type: "action",
        node_content: "Fire an Alert!",
        callback: () => alert('Clicked the Custom Context Menu!'),
      }
    ],
  };

  contextMenuSchema.set(schema);
</script>
```

{/if}
