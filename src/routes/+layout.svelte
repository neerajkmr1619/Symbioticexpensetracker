<script>
	import '../app.postcss';
	import Header from './Components/header.svelte';
</script>

<Header/>

<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
	  <!-- Page content here -->
	  <slot />
	  <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
	
	</div> 
	<div class="drawer-side">
	  <label for="my-drawer-2" class="drawer-overlay"></label> 
	  <ul class="menu p-4 w-80 bg-base-300 text-base-content">
		<!-- Sidebar content here -->
		<li><a href = "/">Dashboard</a></li>
		<li><a href = "/Submit">Submit</a></li>
		<li><a href = "/View">View</a></li>
	  </ul>
	
	</div>
  </div>


