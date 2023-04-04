import type { WeatherForecast } from '../types/weather.types';

const API_KEY = '20d9a5b5afa2428387d171837230204';

export async function getWeatherForecast(
	positionString: String | null = 'auto:ip'
): Promise<WeatherForecast> {
	const q = positionString || 'auto:ip';
	const response = await fetch(
		`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${q}&days=3`
	);
	return await response.json();
}
