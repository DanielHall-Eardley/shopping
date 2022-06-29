<script>
	import Item from '../item/item.svelte';

	const shoppingList = [
		{
			name: 'milk',
			category: 'dairy',
			id: 1,
			img: '/some/url'
		},
		{
			name: 'yogurt',
			category: 'dairy',
			id: 2,
			img: '/some/url'
		},
		{
			name: 'cheese',
			category: 'dairy',
			id: 3,
			img: '/some/url'
		}
	];
</script>

<ul>
	{#each shoppingList as item}
		<Item {...item} />
	{/each}
</ul>
