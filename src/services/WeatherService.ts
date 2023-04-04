import { getWeatherForecast } from './WeatherAPI';
import type { WeatherForecast } from '../types/weather.types';
import { currentWeatherIndex, weatherList } from '../stores/weatherStore';
import { get } from 'svelte/store';

export function fetchMultipleForecasts(locations: string[]): Promise<Awaited<WeatherForecast>[]> {
	const promises = locations.map((location) => getWeatherForecast(location));
	return Promise.all(promises);
}

export function addWeatherAndSelectIt(weather: WeatherForecast): void {
	const weatherIndex = getWeatherIndex(weather);
	if (weatherIndex === -1) {
		weatherList.update((weatherList) => [...weatherList, weather]);
	}

	selectWeather(weather);
}

export function removeLocationWeather(location: string): void {
	weatherList.update((weatherList) =>
		weatherList.filter((item) => item.location.name !== location)
	);
	currentWeatherIndex.set(0);
}

function selectWeather(weather: WeatherForecast): void {
	const index = getWeatherIndex(weather);
	currentWeatherIndex.set(index);
}

function getWeatherIndex(weather: WeatherForecast): number {
	return get(weatherList).findIndex((item) => item.location.name === weather.location.name);
}
