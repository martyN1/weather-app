import {derived, writable} from "svelte/store";
import type {Writable, Readable} from "svelte/store";
import type {WeatherForecast} from "../types/weather.types";
export const weatherList : Writable<WeatherForecast[]|any[]> = writable([])

export const currentWeatherIndex : Writable<number> = writable(0)

export const currentWeather : Readable<WeatherForecast> = derived(
    [weatherList, currentWeatherIndex],
    ([$weatherList, $currentWeatherIndex]) => $weatherList[$currentWeatherIndex]
)

export const weatherListLastIndex : Readable<number> = derived(weatherList, $weatherList => $weatherList.length - 1)