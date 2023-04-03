<script lang="ts">
  import {onMount} from "svelte";
  import {getWeatherForecast} from "./services/WeatherAPI";
  import {getPositionString} from "./services/GeolocationService";
  import WeatherCard from "./components/WeatherCard.svelte";
  import SearchBar from "./components/ActionsBar.svelte";
  import FavoritesManagementCard from "./components/FavoritesManagementCard.svelte";
  import {currentWeather, weatherList} from "./stores/weatherStore";
  import {get} from "svelte/store";
  import {favorites} from "./stores/favoritesStore";
  import {fetchMultipleForecasts} from "./services/WeatherService";
  import {mode} from "./stores/appStore";

  onMount(async () => {
    let searchString = null;

    if (get(favorites)) {
      weatherList.set(await fetchMultipleForecasts(get(favorites)))
    } else {
      searchString = await getPositionString()
      weatherList.set([await getWeatherForecast(searchString)])
    }
  })
</script>

<img class="logo" src="logo.png" alt=""/>

<div class="wrapper">
  <SearchBar/>
  {#if $mode === 'favorites'}
  <FavoritesManagementCard/>
  {:else}
  <WeatherCard weather={$currentWeather}/>
  {/if}
</div>

<footer>
  Made with ♥️ by martyN1
</footer>

<style>
  .wrapper {
    max-width: 600px;
    margin: 40px auto 16px;
    border-radius: 32px;
    background-color: var(--light-gray);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  header {
    margin-top: 16px;
    margin-bottom: 24px;
  }

  .logo {
    position: absolute;
    left: 16px;
    top: 16px;
    width: 48px;
    height: 54px;
  }

  section {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }

  footer {
    height: 36px;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    text-align: center;
  }

  @media (pointer: coarse) {
    .logo {
      display: none;
    }

    .wrapper {
      padding: 16px;
      border-radius: 0;
      margin: 0 auto;
      height: 100%;
    }

    section {
      flex-direction: column;
    }

    footer {
      display: none;
    }
  }
</style>