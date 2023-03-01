import { writable } from "svelte/store";
import type { ContextMenuSchemaNode } from "./types";

const defaultSchema:ContextMenuSchemaNode[] = [
  {
    node_type: "parent",
    node_content: "A Parent Node",
    node_is_open: false,
    children: [
      {
        node_type: "action",
        node_content: "Send Message to the Console",
        callback: () => console.log("Hello from the Context Menu!"),
      },
    ],
  },
  {
    node_type: "action",
    node_content: "Fire an Alert!",
    callback: () => alert('Clicked the Custom Context Menu!'),
  },
];

export const ContextMenuSchema = writable(defaultSchema);
