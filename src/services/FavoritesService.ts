import { favorites } from '../stores/favoritesStore';
import { get } from 'svelte/store';

export function addFavorite(location: string) {
	favorites.update((favorites) => [...new Set([...favorites, location])]);
}

export function removeFavorite(location: string) {
	favorites.update((favorites) => favorites.filter((favorite) => favorite !== location));
}

export function isInFavorites(location: string): boolean {
	const found = get(favorites).find((favorite) => favorite === location);
	return !!found;
}
