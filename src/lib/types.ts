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
  callback: () => void,
}
