<script>
    import { productsData } from '../Store';
    import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

    export let data;
    //const {products} = data;
    //console.log(products);
    //setting store
    //productsData.set(products);

    const viewItem = (rowId) => {
       console.log("/View/"+rowId.id);
       goto("/View/"+rowId.id);
    }
</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<h1>All your submitted expenses</h1>
    <br/>
<div class="overflow-x-auto w-full">
    
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {#each $productsData as {id,title,description,price}}        
        <!-- rows -->
        <tr class="hover" on:click|preventDefault={()=>viewItem({id})}>
          <th>{id}</th>
          <td>{title}</td>
          <td>{description}</td>
          <td>{price}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>

