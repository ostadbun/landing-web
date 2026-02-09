<script lang="ts">
    import Input from "$lib/components/ui/input/input.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Search from "@lucide/svelte/icons/search";
    import Vote from "@lucide/svelte/icons/vote";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as ToggleGroup from "$lib/components/ui/toggle-group/index";
    import { EyeIcon, StarIcon } from "lucide-svelte";

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

<div class="mb-16">
    <div class="flex justify-center flex-wrap gap-8 mt-32">
        <div class="w-full flex justify-center flex-wrap gap-4">
            <div class="flex w-full justify-center" id="textdata">
                <h2
                    class=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-center bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                >
                 جــــســـــت و جــــو در بانک اطلاعاتِ
                    <br>
                    " اُستادبان "
                </h2>
            </div>
            <Input class="max-w-132 h-14" placeholder="جست و جوی ..." />
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
        class="
        my-8
 max-w-7xl

        max-h-152 overflow-y-scroll
        mx-auto 
        grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-3
                2xl:grid-cols-4

                gap-6 sm:gap-7 md:gap-8"
    >
        {#each search as i}
            <Card.Root
                class="flex flex-col justify-between
                            border border-border/60
                            bg-card/80 backdrop-blur-sm"
            >
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
                    <div class="flex items-center justify-between w-full gap-2">
                        <Button variant="ghost">
                            <StarIcon />
                            8.1
                        </Button>
                        <Button variant="default" class="w-fit">
                            <EyeIcon />
                            مشاهده
                        </Button>
                    </div>
                </Card.Footer>
            </Card.Root>
        {/each}
    </div>

    <!-- <div class="h-[.003rem] w-8/12 bg-accent-foreground/30 mb-32 mx-auto"></div> -->

    <!-- <div class="w-8/12 mx-auto text-emerald-700"></div> -->
</div>
