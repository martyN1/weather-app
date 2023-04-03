import {writable} from "svelte/store";
import type {Writable} from "svelte/store";

const storedFavorites = localStorage.favorites || '[]'
export const favorites : Writable<string[]> = writable(storedFavorites ? JSON.parse(storedFavorites) : [])
favorites.subscribe(value => localStorage.favorites = JSON.stringify(value))