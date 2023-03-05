<script>
  import { lang } from "../lang";
</script>

<section>

## Philosophy

Although there are existing libaries in the Svelte ecosystem for custom context menus, their mental model often doesn't make sense to me. That's why I'm building svelte-context-menu. svelte-context-menu is designed to exist at the very top level of your component tree, with it's state being managed by a Svelte store. This design pattern limits the amount of code needed to achieve this functionality. 

Due to this design philosophy, it's recommended to place the `<ContextMenu />` component at the root of your application (whether that is a your root +layout.svelte in SvelteKit, or in the App.svelte root of an SPA). From there, simply update or set a new schema into the provided store, and the context menu will update accordingly.

</section>



