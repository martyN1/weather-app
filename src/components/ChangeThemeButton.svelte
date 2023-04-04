<script>
	import MoonIcon from 'svelte-icons/fa/FaMoon.svelte';
	import SunIcon from 'svelte-icons/fa/FaSun.svelte';
	import { toggleTheme } from '../services/ThemeService.ts';

	let currentTheme = 'light';

	function changeToDarkMode() {
		toggleTheme();
		currentTheme = 'dark';
	}

	function changeToLightMode() {
		toggleTheme();
		currentTheme = 'light';
	}
</script>

{#if currentTheme === 'light'}
	<div class="dark" on:click={changeToDarkMode}>
		<MoonIcon />
	</div>
{:else}
	<div class="light" on:click={changeToLightMode}>
		<SunIcon />
	</div>
{/if}

<style>
	div {
		margin-top: 4px;
		width: 28px;
		height: 28px;
		cursor: pointer;
	}

	.dark {
		color: var(--black);
	}

	.light {
		color: var(--yellow);
	}
</style>
