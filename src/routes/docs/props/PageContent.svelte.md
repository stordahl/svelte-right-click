<script>
 import { lang } from "../lang"; 
</script>

<section>

## Props

svelte-right-click purposefully has limited props, but there are a few for global configuration.

| Name           | Description                                                           | Type                | Default |
|----------------|-----------------------------------------------------------------------|---------------------|---------|
| open           | Toggle the context menus open state from the parent componenet        | `Writable<boolean>` | false   |
| renderDefaults | Render the included browser default functions inside the context menu | boolean             | true    |

</section>
