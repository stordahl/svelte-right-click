<script lang="ts">
	import { contextMenuSchema } from '$lib/ContextMenuSchema';
	import ContextMenu from '$lib/ContextMenu.svelte';
	import Hero from './Hero.svelte';
	import Install from './Install.svelte';

	let container: HTMLElement;

	$: contextMenuSchema.update((s) => ({ container, nodes: s.nodes }));
</script>

<div class="wrapper">
	<Hero />
	<Install />

	<div id="example-container" bind:this={container}>
		<span>Right Click here!</span>
		<ContextMenu />
	</div>
</div>

<style>
	.wrapper {
		max-width: 1000px;
		margin: auto;
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'hero demo' 'install install';
		gap: 3rem 0;
	}

	#example-container {
		grid-area: demo;
		min-height: 300px;
		border: 2px solid var(--yellow);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#example-container > span {
		font-size: 1.5rem;
	}
</style>
