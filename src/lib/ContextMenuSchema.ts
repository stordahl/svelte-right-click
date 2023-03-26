import { writable, readable } from 'svelte/store';
import type { ContextMenuSchema } from './types';
import { pageBack, pageReload, pagePrint } from './utils';

const defaultSchema: ContextMenuSchema = {
	nodes: [
		{
			node_type: 'parent',
			node_content: 'A Parent Node',
			node_is_open: false,
			children: [
				{
					node_type: 'action',
					node_content: 'Send Message to the Console',
					callback: () => console.log('Hello from the Context Menu!')
				}
			]
		},
		{
			node_type: 'action',
			node_content: 'Fire an Alert!',
			callback: () => alert('Clicked the Custom Context Menu!')
		}
	]
};

/* 
    default browser actions 
    - [x] back
    - [x] reload
    - [x] print
    - [ ] save as
    - [ ] view source
    - [wont do] inspect
  */
const defaultBrowserSchema: ContextMenuSchema = {
	nodes: [
		{
			node_type: 'parent',
			node_content: 'Browser Actions',
			node_is_open: false,
			children: [
				{
					node_type: 'action',
					node_content: 'Back',
					callback: pageBack
				},
				{
					node_type: 'action',
					node_content: 'Reload',
					callback: pageReload
				},
				{
					node_type: 'action',
					node_content: 'Print',
					callback: pagePrint
				}
				/*{
        node_type: "action",
        node_content: "Save",
        callback: pageSave,
      },*/
			]
		}
	]
};

export const contextMenuSchema = writable(defaultSchema);
export const browserSchema = readable(defaultBrowserSchema);
