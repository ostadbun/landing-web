<script lang="ts">
    import { onMount } from "svelte";
    import Google from "../../components/icons/google.svelte";

    import { Gitlab, Twitter } from "lucide-svelte";
    import Logo from "../../components/icons/logo.svelte";
    import GithubRe from "../../components/icons/githubRe.svelte";

    let theme = "";

    // اگر بعداً theme خواستی (مثلاً با svelte-themes)
    onMount(() => {
        // theme = ...
    });

    const providerUrl = (provider: string): string => {
        return `https://jpjukqmcfgpwtlaehajo.supabase.co/auth/v1/authorize?provider=${provider}&redirect_to=http://localhost:4932/accept/`;
    };

    const providers: {
        icon: typeof Google;
        title: string;
        target: string;
    }[] = [
        { icon: Google, title: "گـوگـــــل", target: "google" },
        { icon: GithubRe, title: "گیت‌هاب", target: "github" },
    ];
</script>

<div class="w-full h-min-dvh h-dvh flex justify-center items-center">
    <div
        class="flex-col md:flex-row flex md:border-[0.5px] dark:border-gray-600 rounded-xl justify-between md:justify-center w-10/12 h-10/12"
    >
        <!-- Left -->
        <div
            class="w-full md:w-6/12 flex flex-col justify-center items-center gap-y-12"
        >
            <div class="opacity-85 w-full relative">
                <div class="w-full flex justify-center">
                    <a href="/" class="w-fit">
                        <Logo />
                    </a>
                </div>
                <p
                    class="font-extrabold text-center text-4xl dark:text-gray-200 absolute translate-y-5 w-full text-gray-700"
                >
                    اُستادبان
                </p>
            </div>

            <div class="w-8/12 h-[.01rem] bg-gray-400/30"></div>

            <h1 class="w-8/12 text-[.7rem] text-justify">
                با ورود شما، اطلاعات داده شده به‌صورت امن ذخیره می‌شود و فقط
                برای بهبود تجربه‌ی کاربری استفاده خواهد شد
                جهت تایید این موضوع می توانید به
                
                <a href="https://github.com/ostadbun" class="text-chart-3 underline">
                    source code
                </a>  
                
                در گیت هاب مراجعه کنید
                .
            </h1>
        </div>

        <!-- Divider -->
        <div class="hidden md:block w-[.01rem] h-full bg-gray-400/30"></div>

        <!-- Right -->
        <div
            class="flex flex-col items-center w-full md:w-6/12 gap-y-12 justify-center"
        >
            <h1 class="w-full text-center text-2xl font-black">
                روش های ورود به اُستادبان
            </h1>
            <div class="w-full flex flex-col gap-y-3">
                {#each providers as p}
                    <a
                        class="w-8/12 md:w-72 mx-auto"
                        href={providerUrl(p.target)}
                    >
                        <button
                            class="w-full flex justify-center items-center rounded-md px-4 py-2 bg-black text-white dark:bg-white dark:text-black"
                        >
                            <div
                                class="flex justify-between items-center gap-2"
                            >
                                <div class="size-4">
                                    <svelte:component this={p.icon} />
                                </div>

                                ورود با {p.title}
                            </div>
                        </button>
                    </a>
                {/each}
            </div>

            <div class="w-8/12">
                <div class="w-full h-[.01rem] mb-6 bg-gray-400/30"></div>
                <h3 class="text-[.6rem] text-center ">
                    سیستم منبع باز است و هیج شخصی هیچ مسئولیتی در قبال هیچ چیزی
                    ندارد.
                    
                </h3>
            </div>
        </div>
    </div>
</div>
