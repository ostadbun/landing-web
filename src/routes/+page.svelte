<script lang="ts">
    import { mode } from "mode-watcher";
    import Logo from "../components/icons/logo.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Search from "@lucide/svelte/icons/search";
    import Vote from "@lucide/svelte/icons/vote";
    import Input from "$lib/components/ui/input/input.svelte";
    import * as ToggleGroup from "$lib/components/ui/toggle-group/index";
    import { BookmarkIcon, HeartIcon, StarIcon } from "lucide-svelte";
    import { writable } from "svelte/store";

    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    const description =
        " استادبان یک سیستم متن‌باز و رایگان است که با جمع‌آوری نظرات دانشجویان درباره اساتید، به انتخاب واحد آگاهانه‌تر کمک می‌کند و شفافیت آموزشی را افزایش می‌دهد.";

    let variables: { txt: string; icon: any; toggle: boolean }[] = [
        { txt: "استاد", icon: StarIcon, toggle: false },
        { txt: "دانشگا", icon: StarIcon, toggle: false },
        { txt: "رشته", icon: StarIcon, toggle: false },
        { txt: "درس", icon: StarIcon, toggle: false },
    ];

    function show() {
        alert("alehfu");
    }
</script>

<div class="heroSection flex flex-wrap flex-col items-center justify-around">
    <div class="flex flex-wrap gap-8">
        <div class=" w-full">
            <Logo />
        </div>
        <div class="flex w-full justify-center" id="textdata">
            <h1
                class="text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-extrabold bg-linear-to-b from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[white]/10 text-transparent bg-clip-text"
            >
                با شفّافیت انتخاب کن
                <br />
                با دانــــش رشــــد کن
            </h1>
        </div>

        <div class="flex w-full justify-center">
            <h2 class="max-w-132 leading-8 text-center opacity-70 text-sm">
                {description}
            </h2>
        </div>
    </div>

    <div class="w-full flex justify-center gap-3">
        <a href="lessons">
            <Button variant="ghost">
                <Vote />

                رای دهید
            </Button>
        </a>

        <Button>
            <Search />
            مشاهده آرا
        </Button>
    </div>
</div>

<div class="h-[.003rem] w-10/12 bg-amber-50/10 mx-auto"></div>

<div class="h-dvh">
    <div class="flex justify-center flex-wrap gap-8 mt-48">
        <div class="w-full flex justify-center flex-wrap gap-8">
            <div class="flex w-full justify-center" id="textdata">
                <h2
                    class="text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >
                    جــــســـــت و جــــو در بانک اطلاعات " استادبان "
                </h2>
            </div>
            <Input class="w-132 h-14" placeholder="جست و جوی ..."  />
        </div>
        <ToggleGroup.Root
            type="multiple"
            variant="outline"
            spacing={2}
            size="sm"
        >
            {#each variables as i, index}
                <ToggleGroup.Item
                    value={i.txt}
                    class="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500"
                >
                    <i.icon />
                    {i.txt}
                </ToggleGroup.Item>
            {/each}
        </ToggleGroup.Root>

      
    </div>
</div>

<style>
    .heroSection {
        /* calculate the size of screen = full - navbar space */
        height: calc(100dvh - 6.5rem);
    }
</style>
