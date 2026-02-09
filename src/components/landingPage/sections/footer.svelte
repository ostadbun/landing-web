<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import { ArrowBigUpDashIcon } from "lucide-svelte";
    import Hrcom from "../../lineSpace/hrcom.svelte";
    import Themetogglebutton from "../../themeToggleButton/themetogglebutton.svelte";
    import Logo from "../../icons/logo.svelte";
    import Logonavbar from "../../icons/logonavbar.svelte";

    interface IFooter {
        title: string;
        href: string;
    }
    const desc =
        "این یک سیستم متن‌باز و رایگان است که فرآیند انتخاب واحد (انتخاب استاد) را برای دانشجویان تسهیل می‌کند. با جمع‌آوری لیست اساتید یک دانشگاه و دریافت آرای دانشجویان درباره ویژگی‌های تدریس، این سیستم به دانشجویان کمک می‌کند تا با آگاهی بیشتری استادان خود را انتخاب کنند. هدف این پلتفرم ارتقای کیفیت آموزشی و ایجاد شفافیت در جامعه علمی است.";
    const footerItems: IFooter[] = [
        { href: "https://github.com/ostadbun", title: "گیت‌هاب" },
        { href: "", title: "توضیحات" },
        { href: "", title: "قوانین" },
        { href: "", title: "درباره‌ما" },
        { href: "", title: "ostadbun ©" },
    ];
    const name = ["O", "S", "T", "A", "D", "B", "U", "N"].reverse();
</script>

<div
    class="mx-auto mb-16 flex flex-wrap justify-between items-center opacity-65"
>
    <Themetogglebutton />

    <div
        class="justify-between flex gap-x-1 items-center text-xs flex-wrap gap-y-3 w-fit"
    >
        {#each footerItems as f, i}
            <Button variant="ghost" href={f.href} class="text-xs">
                {f.title}
            </Button>

            {#if i != footerItems.length - 1}
                <div
                    class="size-[.3rem] rounded-full bg-accent-foreground/10"
                ></div>
            {/if}
        {/each}
    </div>
</div>

<div>
    <div
        class="animate-pulse bg-red rounded-2xl  mr-3 my-3"
    >
        <Logonavbar />
    </div>
</div>

<div class="mb-16">
    <p class="text-xs opacity-30 leading-7 text-justify">
        {desc}
    </p>
</div>
