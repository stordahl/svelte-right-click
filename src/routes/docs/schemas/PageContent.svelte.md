<script>
 import { lang } from "../lang"; 
</script>

<section>

## Schemas

svelte-right-click is driven by a schema that defines the nodes to render inside a context menu including their text content, callback functions to run on click, and any child nodes.

```typescript
type ContextMenuSchema = {
	container?: HTMLElement;
	nodes: ContextMenuSchemaNode[];
};
```

### Container

`container` is a an optional field in a schema, that "contains" the context menu within a given element, rather than globally on the page. Simply bind the element you want to enable ContextMenu within, then use the ref in your schema.

{#if $lang == "TS"}

```svelte
<script lang="ts">
	import { contextMenuSchema } from 'svelte-right-click';
	import type { ContextMenuSchema } from 'svelte-right-click';

	let ref: HTMLElement;

	const schema = {
		container: ref,
		nodes: []
	} as ContextMenuSchema;

	contextMenuSchema.set(schema);
</script>

<div bind:this={ref}>
	<!-- container where ContextMenu will be active -->
</div>
```

{:else}

```svelte
<script>
	import { contextMenuSchema } from 'svelte-right-click';

	let ref;

	const schema = {
		container: ref,
		nodes: []
	};

	contextMenuSchema.set(schema);
</script>

<div bind:this={ref}>
	<!-- container where ContextMenu will be active -->
</div>
```

{/if}

### Nodes

`nodes` is an array field in a schema that represents the structure of the context menu. This arrays items can be one of two types: `ContextMenuParentNode` (parent node) & `ContextMenuSchemaActionNode` (action node).

#### Parent Nodes

Parent nodes define a sub tree of the context menu.

```typescript
type ContextMenuSchemaParentNode = {
	node_type: 'parent';
	node_content: string; // text to display inside the node
	node_is_open: boolean; // open/close state
	children: ContextMenuSchemaActionNode[];
};
```

> Currently, parent nodes can not contain other parent nodes. This is to ensure the best UX for end users.

#### Action Nodes

Action nodes run a callback function provided in the schema. The callback recieves a Svelte store as an argument to allow for updating the context menus open state within the callback function.

```typescript
type ContextMenuSchemaActionNode = {
	node_type: 'action';
	node_content: string;
	callback: (openState?: Writable<boolean>) => void;
};
```

</section>
