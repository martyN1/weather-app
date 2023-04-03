<script>

import PreviousIcon from "svelte-icons/fa/FaAngleLeft.svelte"
import {createEventDispatcher} from "svelte";

const dispatch = createEventDispatcher()

</script>

<div on:click={() => dispatch('click')}>
    <PreviousIcon/>
</div>

<style>
    div {
        width: 32px;
        height: 32px;
        cursor: pointer;
        color: var(--black)
    }
</style>