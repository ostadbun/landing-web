<script lang="ts">
    import "../app.css";
    import faviconL from "$lib/assets/favicon-light.svg";
    import faviconD from "$lib/assets/favicon-dark.svg";
    import { ModeWatcher } from "mode-watcher";
    import Nav from "../components/Navbar/nav.svelte";
    import { page } from "$app/state";

    let { children } = $props();
</script>

<svelte:head>
    <link href={faviconL} rel="icon" media="(prefers-color-scheme: light)" />
    <link href={faviconD} rel="icon" media="(prefers-color-scheme: dark)" />

    <title
        >استادبان{page.data.segmentTitle &&
            " | " + page.data.segmentTitle}</title
    >
</svelte:head>
<ModeWatcher />

{@render children()}
