<script lang="ts">
    import { Marquee } from "@selemondev/svelte-marquee";
    import "@selemondev/svelte-marquee/dist/style.css";

    import * as Card from "$lib/components/ui/card/index.js";
    import * as ToggleGroup from "$lib/components/ui/toggle-group/index";
    import Badge from "$lib/components/ui/badge/badge.svelte";

    interface IMqruee {
        title: string;
        desc: string;
        action: string;
        footer: string;
        href:string,
    }
    const a: IMqruee[] = [
        {
            title: "دکتر علی رضایی",
            action: "استاد",
            desc: "عضو هیئت علمی دانشگاه شریف | هوش مصنوعی و یادگیری ماشین",
            footer: "",
            href: ""
        },
        {
            title: "دکتر سارا محمدی",
            action: "استاد",
            desc: "دانشگاه تهران | مهندسی نرم‌افزار",
            footer: "⭐️ 4.6 از 98 نظر",
            href: ""
        },
        {
            title: "دکتر امیرحسین کریمی",
            action: "استاد",
            desc: "دانشگاه امیرکبیر | سیستم‌های توزیع‌شده",
            footer: "⭐️ 4.9 از 75 نظر",
            href: ""
        },
        {
            title: "دکتر ندا حسینی",
            action: "استاد",
            desc: "دانشگاه شهید بهشتی | پایگاه داده",
            footer: "⭐️ 4.5 از 60 نظر",
            href: ""
        },
        {
            title: "دکتر محمد صالحی",
            action: "استاد",
            desc: "دانشگاه علم و صنعت | شبکه‌های کامپیوتری",
            footer: "⭐️ 4.7 از 89 نظر",
            href: ""
        },
        {
            title: "دکتر حسین احمدی",
            action: "استاد",
            desc: "دانشگاه فردوسی مشهد | الگوریتم‌ها",
            footer: "⭐️ 4.4 از 52 نظر",
            href: ""
        },
    ];
    const b: IMqruee[] = [
        {
            title: "دانشگاه صنعتی شریف",
            action: "مشاهده اساتید",
            desc: "برترین دانشگاه فنی ایران با تمرکز بر پژوهش",
            footer: "تهران",
            href: ""
        },
        {
            title: "دانشگاه تهران",
            action: "مشاهده اساتید",
            desc: "قدیمی‌ترین و جامع‌ترین دانشگاه کشور",
            footer: "تهران",
            href: ""
        },
        {
            title: "دانشگاه صنعتی امیرکبیر",
            action: "مشاهده اساتید",
            desc: "قطب مهندسی و فناوری",
            footer: "تهران",
            href: ""
        },
        {
            title: "دانشگاه شهید بهشتی",
            action: "مشاهده اساتید",
            desc: "دانشگاهی پژوهش‌محور با رتبه علمی بالا",
            footer: "تهران",
            href: ""
        },
        {
            title: "دانشگاه علم و صنعت ایران",
            action: "مشاهده اساتید",
            desc: "پیشرو در مهندسی و علوم کاربردی",
            footer: "تهران",
            href: ""
        },
        {
            title: "دانشگاه فردوسی مشهد",
            action: "مشاهده اساتید",
            desc: "یکی از قطب‌های علمی شرق کشور",
            footer: "مشهد",
            href: ""
        },
    ];
    const c: IMqruee[] = [
        {
            title: "مهندسی نرم‌افزار",
            action: "مشاهده اساتید",
            desc: "طراحی و توسعه سیستم‌های نرم‌افزاری",
            footer: "گرایش پرطرفدار",
            href: ""
        },
        {
            title: "هوش مصنوعی",
            action: "مشاهده اساتید",
            desc: "یادگیری ماشین، یادگیری عمیق، پردازش داده",
            footer: "رشد سریع بازار",
            href: ""
        },
        {
            title: "سیستم‌های توزیع‌شده",
            action: "مشاهده اساتید",
            desc: "سیستم‌های مقیاس‌پذیر و Cloud",
            footer: "سطح پیشرفته",
            href: ""
        },
        {
            title: "شبکه‌های کامپیوتری",
            action: "مشاهده اساتید",
            desc: "طراحی و تحلیل شبکه و پروتکل‌ها",
            footer: "کاربرد صنعتی",
            href: ""
        },
        {
            title: "پایگاه داده",
            action: "مشاهده اساتید",
            desc: "طراحی، بهینه‌سازی و مدیریت داده",
            footer: "مناسب بازار کار",
            href: ""
        },
        {
            title: "الگوریتم و نظریه محاسبات",
            action: "مشاهده اساتید",
            desc: "حل مسائل پیچیده و تحلیل الگوریتم‌ها",
            footer: "مهم برای کنکور",
            href: ""
        },
    ];

    const mqr: IMqruee[][] = [a, b, c];
</script>

<div class="w-full flex flex-wrap justify-center items-center" dir="ltr">
    <!-- <h2
        class="w-10/12 text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-center bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
    >
        استادبان، منبع باز است
    </h2> -->

    {#each mqr as innMqr, index}
        <Marquee
            pauseOnHover={true}
            fade={true}
            reverse={index % 2 == 0}
            innerClassName="my-3"
        >
            {#each innMqr as i}
                <a href={i.href} dir="rtl">
                    <Card.Root
                        class="flex flex-col justify-between
                    w-80 h-auto
                     transition-all
                    hover:scale-105
        border border-border/60
        bg-card/80 backdrop-blur-sm"
                    >
                        <Card.Header>
                            <Card.Title class="truncate py-2">{i.title}</Card.Title>
                            <Card.Description class="truncate py-2">{i.desc}</Card.Description>
                            <Card.Action>
                                <Badge variant="outline">{i.action}</Badge>
                            </Card.Action>
                        </Card.Header>
                        <!-- <Card.Footer class="flex-col gap-2">
                            <div
                                class="flex items-center justify-between w-full gap-2"
                            >
                                {i.footer}
                            </div>
                        </Card.Footer> -->
                    </Card.Root>
                </a>
            {/each}
        </Marquee>
    {/each}
</div>
