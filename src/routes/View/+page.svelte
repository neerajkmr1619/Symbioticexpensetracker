<script>
    /** @type {import('./$types').PageData} */
    import { productsData } from '../../Store'
    export let data;
</script>

<p>This is view page</p>
{#each $productsData as {id}}
    <p>{id}</p>
{/each}
