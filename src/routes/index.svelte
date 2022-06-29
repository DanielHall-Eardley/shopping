<script>
	import ShoppingList from '../lib/shoppingList/list.svelte';
</script>

<svelte:head>
	<title>Shopping List</title>
	<meta name="description" content="Current shopping list" />
</svelte:head>

<section>
	<h1>Shopping List</h1>
	<ShoppingList />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
