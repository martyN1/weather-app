import { type Writable, writable } from 'svelte/store';
import type { Mode } from '../types/types';

export const searchValue = writable('');
export const mode: Writable<Mode> = writable('search');
