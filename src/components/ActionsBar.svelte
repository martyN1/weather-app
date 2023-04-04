<script>
	import { SearchIcon, XIcon, HeartIcon } from 'svelte-feather-icons';
	import { mode, searchValue } from '../stores/appStore.ts';
	import { getWeatherForecast } from '../services/WeatherAPI.ts';
	import { addWeatherAndSelectIt } from '../services/WeatherService.ts';
	import { favorites } from '../stores/favoritesStore.ts';
	import ChangeThemeButton from './ChangeThemeButton.svelte';

	async function handleSubmit() {
		if ($searchValue !== '') {
			addWeatherAndSelectIt(await getWeatherForecast($searchValue));
			searchValue.set('');
		}
	}
</script>

<div class="actionBar">
	<ChangeThemeButton />
	{#if $mode === 'search'}
		<form on:submit|preventDefault={handleSubmit}>
			<input autofocus type="text" name="search" placeholder="Location" bind:value={$searchValue} />
		</form>
		<button class="searchButton" on:click={handleSubmit} disabled={$searchValue === ''}>
			<SearchIcon size="20" />
		</button>
		{#if $favorites.length !== 0}
			<button class="favoritesButton" on:click={() => mode.set('favorites')}>
				<HeartIcon size="20" />
			</button>
		{/if}
	{:else if $mode === 'favorites'}
		<button class="cancelButton" on:click={() => mode.set('search')}>
			<XIcon size="20" />
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
		height: 36px;
		width: 100%;
		border-radius: 100px;
		border: 2px solid var(--black);
		padding: 4px 24px;
		background-color: var(--white);
		color: var(--black);
		font-family: 'Roboto Mono', monospace;
		font-weight: 400;
		font-size: 16px;
	}

	::placeholder {
		color: var(--gray);
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 36px;
		min-height: 36px;
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
