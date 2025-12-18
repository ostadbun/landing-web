<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";
    import { toggleMode } from "mode-watcher";
    import Search from "@lucide/svelte/icons/search";
    import Logonavbar from "../icons/logonavbar.svelte";
    import Github from "../icons/github.svelte";
</script>

<nav
    class="flex w-full items-center justify-between fixed right-0 top-0 z-50 bg-background/85 backdrop-blur-sm"
>
    <div
        class="w-11/12 flex items-center justify-between mx-auto h-20  px-8    z-50"
    >
        <a href="/">
            <div class="flex items-center gap-3">
                <Logonavbar />

                <h1 class="text-[1.5rem] font-extrabold opacity-65">
                    استادبان
                </h1>
            </div>
        </a>

        <div class="flex items-center gap-3 group">
            <a href="https://github.com/ostadbun">
                <Button variant="ghost">
                    <div
                        class="flex h-full items-center justify-center gap-0.5"
                    >
                        <span class=" h-full leading-6"> 6 </span>
                    </div>

                    <Github />
                </Button>
            </a>

            <a href="/universities" class="hidden md:block">
                <Button variant="secondary" class="cursor-pointer gap-2">
                    <Search />
                    جست و جو
                </Button>
            </a>

            <Button onclick={toggleMode} variant="ghost" size="icon">
                <SunIcon
                    class="size-3.5 rotate-0 scale-100 transition-all! dark:-rotate-90 dark:scale-0"
                />
                <MoonIcon
                    class="absolute size-3.5 rotate-90 scale-0 transition-all! dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
            </Button>
        </div>
    </div>
</nav>



<!-- placeholder 5rem -->
<div class="h-20 w-full"></div>



<!-- gap 1.5rem-->
<div class="h-6 w-full"></div>