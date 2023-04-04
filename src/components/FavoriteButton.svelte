<script>
	import HeartFilledIcon from 'svelte-icons/fa/FaHeart.svelte';
	import HeartOutlinedIcon from 'svelte-icons/fa/FaRegHeart.svelte';
	import { createEventDispatcher } from 'svelte';

	export let favorited;

	const dispatch = createEventDispatcher();
</script>

{#if favorited}
	<div class="favorited" on:click={() => dispatch('removeFavorite')}>
		<HeartFilledIcon />
	</div>
{:else}
	<div on:click={() => dispatch('addFavorite')}>
		<HeartOutlinedIcon />
	</div>
{/if}

<style>
	div {
		width: 24px;
		height: 24px;
		cursor: pointer;
		color: var(--black);
	}

	.favorited {
		color: var(--red);
	}
</style>
