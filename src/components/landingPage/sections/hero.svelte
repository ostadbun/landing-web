<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import { Vote } from "lucide-svelte";
    import Logo from "../../icons/logo.svelte";
    import Search from "@lucide/svelte/icons/search";

    const description =
        " اُستادبان یک سیستم متن‌باز و رایگان است که با جمع‌آوری نظرات دانشجویان درباره اساتید، به انتخاب واحد آگاهانه‌تر کمک می‌کند و شفافیت آموزشی را افزایش می‌دهد.";
</script>

<div class="heroSection flex flex-wrap flex-col items-center justify-around">
    <div class="flex flex-wrap gap-8">
        <div class=" w-full flex justify-center">
            <Logo />
        </div>
        <div class="flex w-full justify-center" id="textdata">
            <h1
                class="text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-extrabold bg-linear-to-b from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[white]/10 text-transparent bg-clip-text"
            >
                با شفّــافیت انتخاب کن
                <br />
                با دانـــــــش رشـــــــد کن
            </h1>
        </div>

        <div class="flex w-full justify-center">
            <h2
                class="w-8/12 md:max-w-132 leading-8 opacity-35 text-sm text-justify"
            >
                {description}
            </h2>
        </div>
    </div>

    <div class="w-full flex justify-center gap-3">
        <a href="/auth">
            <Button variant="secondary">
                <Vote />

                رای دهید
            </Button>
        </a>

        <a href="#viewrates">
            <Button>
                <Search />
                مشاهده آرا
            </Button>
        </a>
    </div>
</div>

<style>
    .heroSection {
        /* calculate the size of screen = full - navbar space */
        height: calc(100dvh - 6.5rem);
    }

    @media (max-height: 42rem) {
        .heroSection {
            height: 42rem;
        }
    }
</style>
