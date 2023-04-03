<script lang="ts">
    import TrashIcon from "svelte-icons/fa/FaTrash.svelte"
    import type {WeatherForecast} from "../types/weather.types";
    import {removeFavorite} from "../services/FavoritesService";
    import {removeLocationWeather} from "../services/WeatherService";

    export let favoriteWeather: WeatherForecast

    function handleTrashButtonClick(location: string) {
        removeFavorite(location)
        removeLocationWeather(location)
    }
</script>

<li>
    <div class="trashButton" on:click={() => handleTrashButtonClick(favoriteWeather.location.name)}>
        <TrashIcon />
    </div>
    <div class="location">{favoriteWeather.location.name}</div>
    <div class="temperature">{favoriteWeather.current.temp_c}<span>&#176C</span></div>
    <img src="{favoriteWeather.current.condition.icon}" alt="{favoriteWeather.current.condition.text}">
</li>

<style>
    li {
        font-size: 16px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: end;
        gap: 12px;
    }

    .trashButton {
        min-width: 18px;
        height: 18px;
        color: var(--red);
        background-color: transparent;
        cursor: pointer;
    }

    .location {
        font-weight: 700;
    }

    img {
        width: 36px;
    }
</style>