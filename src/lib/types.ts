import type { Writable } from "svelte/store";

export type ContextMenuSchema = { 
  container?: HTMLElement, 
  nodes: ContextMenuSchemaNode[], 
};

export type ContextMenuSchemaNode = ContextMenuSchemaParentNode | ContextMenuSchemaActionNode;

export type ContextMenuSchemaParentNode = {
  node_type: "parent",
  node_content: string,
  node_is_open: boolean,
  children: ContextMenuSchemaActionNode[],
}

export type ContextMenuSchemaActionNode = {
  node_type: "action",
  node_content: string,
  callback: (openState?:Writable<boolean>) => void,
}

// internal
export type CalculateCoordsFromChildArg = {
  eventX: number, 
  eventY: number,
  childX: number,
  childY: number,
  container: HTMLElement,
}

