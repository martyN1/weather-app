<script lang="ts">
    import type {WeatherForecast} from "../types/weather.types";
    import FavoriteButton from "./FavoriteButton.svelte";
    import {addFavorite, removeFavorite} from "../services/FavoritesService";
    import {favorites} from "../stores/favoritesStore";
    import PreviousButton from "./PreviousButton.svelte";
    import {currentWeatherIndex, weatherListLastIndex} from "../stores/weatherStore.js";
    import NextButton from "./NextButton.svelte";

    export let weather : WeatherForecast

    let favorited;
    $: favorited = $favorites.find(favorite => favorite === weather?.location?.name)
    $: currentLocalHour = weather?.location?.localtime ? new Date(weather.location.localtime).getHours() : 0

    function handleAddFavorite() {
        addFavorite(weather.location.name)
    }

    function handleRemoveFavorite() {
        removeFavorite(weather.location.name)
    }


</script>

{#if weather}
    <div class="weatherCard">
        <header>
            {#if ($currentWeatherIndex > 0)}
            <PreviousButton on:click={() => currentWeatherIndex.update(index => index - 1)} />
            {:else}
            <div class="iconFallback"></div>
            {/if}


            <div class="center">
                <h3 class="city">{weather.location.name}</h3>
                <FavoriteButton
                        class="favoriteButton"
                        on:addFavorite={handleAddFavorite}
                        on:removeFavorite={handleRemoveFavorite}
                        favorited={favorited}
                />
            </div>

            {#if ($currentWeatherIndex !== $weatherListLastIndex)}
            <NextButton on:click={() => currentWeatherIndex.update(index => index + 1)} />
            {:else}
                <div class="iconFallback"></div>
            {/if}
        </header>


        <div class="conditionAndTemperature">
            <img class="weatherConditionImage" src="{weather.current.condition.icon.replace('64x64','128x128')}" alt="{weather.current.condition.text}">
            <h1 class="temperature">{weather.current.temp_c}<span>&#176C</span></h1>
        </div>

        <div class="timeline">
            {#each weather.forecast.forecastday[0].hour as hour, i}
                <div class="hour {currentLocalHour <= i+1 ? 'active' : ''}">
                    <div class="hourValue">{i+1}</div>
                    <div class="hourTemp">{hour.temp_c}<span>&#176C</span></div>
                    <img class="hourImage" src="{hour.condition.icon}" alt="{hour.condition.text}">
                </div>
            {/each}
        </div>

    </div>
{/if}

<style>
    .timeline {
        width: 100%;
        margin: 0 auto;
        height: 540px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 8px;
    }

    .hour {
        font-size: 16px;
        font-weight: 300;
        color: var(--dark-gray);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 12px;
        margin-right: 16px;
        margin-left: 16px;
    }

    .hourImage {
        height: 36px;
    }

    .active {
        font-weight: 700;
        color: var(--black);
    }

    .weatherCard {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-items: center;
    }

    header {
        position: sticky;
        background-color: var(--light-gray);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .center {
        display: flex;
        align-items: center;
        gap: 12px
    }

    .city {
        font-weight: 700;
        text-align: center;
        font-size: 28px;
    }

    .temperature {
        font-weight: 400;
        text-align: center;
        font-size: 72px;
    }

    .temperature > span {
        font-variant: all-petite-caps;
        font-weight: 100;
        letter-spacing: -10px;
    }

    .iconFallback {
        width: 18px;
    }

    .conditionAndTemperature {
        margin: 28px auto 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }

    .weatherConditionImage {
        margin-top: 12px;
        width: 148px;
        height: 148px;
    }

    @media (pointer: coarse) {
        .weatherCard {
            overflow-y: scroll;
            overflow-x: hidden;
        }
    }
</style>
