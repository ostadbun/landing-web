<script lang="ts">
    import { mode } from "mode-watcher";
    import Logo from "../components/icons/logo.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Search from "@lucide/svelte/icons/search";
    import Vote from "@lucide/svelte/icons/vote";
    import Input from "$lib/components/ui/input/input.svelte";
    import * as ToggleGroup from "$lib/components/ui/toggle-group/index";
    import { StarIcon } from "lucide-svelte";

    import { Badge } from "$lib/components/ui/badge/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import Hero from "../components/hero/hero.svelte";
    const description =
        " استادبان یک سیستم متن‌باز و رایگان است که با جمع‌آوری نظرات دانشجویان درباره اساتید، به انتخاب واحد آگاهانه‌تر کمک می‌کند و شفافیت آموزشی را افزایش می‌دهد.";

    let variables: { txt: string; icon: any; toggle: boolean }[] = [
        { txt: "استاد", icon: StarIcon, toggle: false },
        { txt: "دانشگاه", icon: StarIcon, toggle: false },
        { txt: "رشته", icon: StarIcon, toggle: false },
        { txt: "درس", icon: StarIcon, toggle: false },
    ];

    let search: {
        title: string;
        category: "استاد" | "دانشگاه" | "درس" | "رشته";
        description: string;
    }[] = [
        {
            title: "محمدرضا یمقانی",
            category: "استاد",
            description: "استاد دانشگاه در حوزه مهندسی",
        },
        {
            title: "دانشگاه شریف",
            category: "دانشگاه",
            description: "دانشگاه برتر مهندسی ایران",
        },
        {
            title: "دانشگاه تهران",
            category: "دانشگاه",
            description: "قدیمی‌ترین دانشگاه ایران",
        },
        {
            title: "مهدی فاطمی",
            category: "استاد",
            description: "تدریس در زمینه علوم کامپیوتر",
        },
        {
            title: "ساختمان داده‌ها",
            category: "درس",
            description: "درس پایه برنامه‌نویسی",
        },
        {
            title: "مهندسی کامپیوتر",
            category: "رشته",
            description: "رشته ساخت سیستم‌های نرم‌افزاری",
        },
        {
            title: "علوم کامپیوتر",
            category: "رشته",
            description: "پایه نظری محاسبات",
        },
        {
            title: "هوش مصنوعی",
            category: "درس",
            description: "آموزش روش‌های هوشمند",
        },
        {
            title: "دانشگاه شهید بهشتی",
            category: "دانشگاه",
            description: "دانشگاه مطرح تهران",
        },
        {
            title: "الگوریتم‌ها",
            category: "درس",
            description: "تحلیل راه‌حل‌های محاسباتی",
        },
        {
            title: "رضا حقیقت",
            category: "استاد",
            description: "مدرس در حوزه مهندسی نرم‌افزار",
        },
        {
            title: "ریاضیات گسسته",
            category: "درس",
            description: "پایه نظری علوم کامپیوتر",
        },
        {
            title: "برق و الکترونیک",
            category: "رشته",
            description: "رشته طراحی مدار و سیستم",
        },
        {
            title: "مکانیک",
            category: "رشته",
            description: "بررسی حرکت و انرژی",
        },
        {
            title: "دانشگاه امیرکبیر",
            category: "دانشگاه",
            description: "صنعتی پلی‌تکنیک تهران",
        },
        {
            title: "برنامه‌نویسی پیشرفته",
            category: "درس",
            description: "مباحث سطح بالا در کدنویسی",
        },
        {
            title: "حسن طاهری",
            category: "استاد",
            description: "استاد رشته فنی مهندسی",
        },
        {
            title: "عمران",
            category: "رشته",
            description: "مهندسی سازه و ساخت‌وساز",
        },
        {
            title: "دانشگاه علم و صنعت",
            category: "دانشگاه",
            description: "دانشگاه صنعتی معتبر",
        },
        {
            title: "مهندسی صنایع",
            category: "رشته",
            description: "مدیریت و بهینه‌سازی سیستم‌ها",
        },
    ];
</script>

<div
    class="absolute w-full mx-auto h-dvh top-0 flex items-start justify-center"
>
    <div class="w-7xl opacity-65">
        <Hero />
    </div>
</div>

<div class="heroSection flex flex-wrap flex-col items-center justify-around">
    <div class="flex flex-wrap gap-8">
        <div class=" w-full">
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
            <h2 class="w-8/12 md:max-w-132 leading-8 text-center opacity-35 text-sm">
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

<div class="h-[.003rem] w-8/12 bg-amber-50/10 mx-auto"></div>

<div class="h-dvh">
    <div class="flex justify-center flex-wrap gap-8 mt-48">
        <div class="w-full flex justify-center flex-wrap gap-4">
            <div class="flex w-full justify-center" id="textdata">
                <h2
                    class="text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-center bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >
                    جــــســـــت و جــــو در بانک اطلاعات " استادبان "
                </h2>
            </div>
            <Input class="w-8/12 md:w-132 h-14" placeholder="جست و جوی ..." />
        </div>

        <div class="" dir="ltr">
            <ToggleGroup.Root variant="outline" type="multiple">
                {#each variables as i, index}
                    <ToggleGroup.Item value={i.txt}>
                        {i.txt}
                    </ToggleGroup.Item>
                {/each}
            </ToggleGroup.Root>
        </div>
    </div>

    <div
        class="w-8/12 flex gap-8 mt-16 mx-auto justify-center flex-wrap max-h-160 overflow-y-scroll"
    >
        {#each search as i}
            <Card.Root class="w-88">
                <Card.Header>
                    <Card.Title>{i.title}</Card.Title>
                    <Card.Description>
                        {i.description}
                    </Card.Description>
                    <Card.Action>
                        <Badge variant="outline">{i.category}</Badge>
                    </Card.Action>
                </Card.Header>
                <Card.Footer class="flex-col gap-2">
                    <Button variant="outline" class="w-full">مشاهده</Button>
                </Card.Footer>
            </Card.Root>
        {/each}
    </div>
</div>

<style>
    .heroSection {
        /* calculate the size of screen = full - navbar space */
        height: calc(100dvh - 6.5rem);
    }
</style>
