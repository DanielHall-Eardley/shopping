<script>
	export let name;
	export let imgUrl;
	export let category;
	export let id;
</script>

<li {id}>
	<img src={imgUrl} alt="A food product" />
	<p>
		<span>{name}</span>
		<span>{category}</span>
	</p>
</li>

<style>
</style>
