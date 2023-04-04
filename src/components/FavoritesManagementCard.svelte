<script lang="ts">
	import { favorites } from '../stores/favoritesStore';
	import type { WeatherForecast } from '../types/weather.types';
	import { weatherList } from '../stores/weatherStore';
	import FavoriteItem from './FavoriteItem.svelte';

	let favoritesWeather: WeatherForecast[];

	$: favoritesWeather = [...$weatherList].filter((weatherItem) =>
		$favorites.includes(weatherItem.location.name)
	);
</script>

<ul>
	{#each favoritesWeather as favoriteWeather}
		<FavoriteItem {favoriteWeather} />
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: 8px;
		font-size: 24px;
	}
</style>
