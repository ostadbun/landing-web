<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import { MoonIcon, SunIcon } from "lucide-svelte";
    import { toggleMode } from "mode-watcher";

</script>
<Button onclick={toggleMode} variant="ghost" size="icon">
    <SunIcon
        class="size-3.5 rotate-0 scale-100 transition-all! dark:-rotate-90 dark:scale-0"
    />
    <MoonIcon
        class="absolute size-3.5 rotate-90 scale-0 transition-all! dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
</Button>
