<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import { InfoIcon } from "lucide-svelte";
    import Github from "../../icons/github.svelte";
    import GithubRe from "../../icons/githubRe.svelte";

    const imageURLs = ["go", "rust", "svelte", "react"];
</script>

<div class="w-full flex flex-wrap justify-center items-center">
    <h2
        class=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-center bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
    >
        اُستادبان، منبع باز است
    </h2>

    <div class="mb-8 mt-16 w-full flex justify-center items-center flex-wrap">

            <img
                class="light:invert w-full!  "
                src="./image/contribute/unkey-github.svg"
                alt=""
            />


        <p
            class="text-xs opacity-60 font-light mt-4 w-full md:mx-32 text-center"
        >
            اگر برنامه‌نویس هستی یا به توسعه نرم‌افزار آزاد علاقه داری، می‌تونی
            در رشد اُستادبان نقش داشته باشی.

            <span class="text-chart-3 underline text-[.6rem]">
                <a href="https://www.unkey.com/">
                    تصویر برداشته شده از unkey
                </a>
            </span>
        </p>
    </div>
    <div class="flex justify-between mt-16 items-center gap-x-3 w-full">
        <div class="flex gap-x-3">
            {#each imageURLs as img}
                <img
                    title={img}
                    class="size-6 grayscale hover:grayscale-0 transition-all"
                    src={`/image/contribute/${img}.svg`}
                    alt={img}
                />
            {/each}
        </div>

        <a href="https://github.com/ostadbun">
            <Button>
                <GithubRe />
                مشارکت کنید
            </Button>
        </a>
    </div>
</div>
