<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
    import { ModeWatcher } from 'mode-watcher';
    import Nav from './components/Navbar/nav.svelte';

	






	
	let { children } = $props();
	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<ModeWatcher />




<Nav />
{@render children()}
