<script>
	import { SearchIcon, XIcon, HeartIcon } from 'svelte-feather-icons';
	import { mode, searchValue } from '../stores/appStore.ts';
	import { getWeatherForecast } from '../services/WeatherAPI.ts';
	import { addWeatherAndSelectIt } from '../services/WeatherService.ts';
	import { favorites } from '../stores/favoritesStore.ts';

	async function handleSubmit () {
		if ($searchValue !== '') {
			addWeatherAndSelectIt(await getWeatherForecast($searchValue));
			searchValue.set('');
		}
	}
</script>

<div class='actionBar'>
	{#if $mode === 'search'}
		<form on:submit|preventDefault={handleSubmit}>
			<input autofocus type='text' name='search' placeholder='Location' bind:value={$searchValue} />
		</form>
		<button class='searchButton' on:click={handleSubmit} disabled={$searchValue === ''}>
			<SearchIcon size='24' />
		</button>
		{#if $favorites.length !== 0}
			<button class='favoritesButton' on:click={() => mode.set('favorites')}>
				<HeartIcon size='24' />
			</button>
		{/if}
	{:else if $mode === 'favorites'}
		<button class='cancelButton' on:click={() => mode.set('search')}>
			<XIcon size='24' />
		</button>
	{/if}
</div>

<style>
    .actionBar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
    }

    form {
        flex-grow: 1;
    }

    input {
        height: 44px;
        width: 100%;
        border-radius: 100px;
        border: 2px solid var(--black);
        padding: 4px 24px;
        background-color: var(--white);
        color: var(--black);
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
        font-size: 18px;
    }

    button {
        min-width: 48px;
        min-height: 48px;
        border: 2px solid var(--black);
        border-radius: 999px;
        cursor: pointer;
        background-color: var(--green);
    }

    .searchButton {
        background-color: var(--green);
    }

    .searchButton:disabled {
        background-color: var(--gray);
    }

    .cancelButton {
        background-color: var(--gray);
    }

    .favoritesButton {
        background-color: var(--red);
    }
</style>
