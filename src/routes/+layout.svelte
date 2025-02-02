<script lang="ts">
	import { Nav, NavItemsPC } from '$lib/components/Navbar';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/utils/app.css';
	let { children } = $props();
</script>

<Nav>
	<NavItemsPC />
</Nav>
{@render children()}
<Footer>
	<nav slot="footer_link" aria-label="Footer link" class=""></nav>
</Footer>
