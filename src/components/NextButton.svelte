<script>

import NextIcon from "svelte-icons/fa/FaAngleRight.svelte"
import {createEventDispatcher} from "svelte";

const dispatch = createEventDispatcher()

</script>

<div on:click={() => dispatch('click')}>
    <NextIcon/>
</div>

<style>
    div {
        width: 32px;
        height: 32px;
        cursor: pointer;
        color: var(--black)
    }
</style>