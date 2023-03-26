import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const lang: Writable<'JS' | 'TS'> = writable('JS');
