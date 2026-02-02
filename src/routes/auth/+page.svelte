<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import { Info } from "lucide-svelte";
    import Github from "../../components/icons/github.svelte";
    import Google from "../../components/icons/google.svelte";
    import Logo from "../../components/icons/logo.svelte";
</script>

<div
    class="flex flex-wrap gap-8 items-center min-h-dvh flex-col justify-between"
>
    <a href="/">
        <div class="w-fit justify-center items-end gap-x-8 flex mt-10">
            <Logo />
            <h1 class="text-6xl font-black w-fit">استادبان</h1>
        </div>
    </a>

    <div class="flex gap-x-8">
        <a href="https://google.com">
            <Button class="h-12 w-48">
                <div class="w-8">
                    <Github />
                </div>
                ورود با گوگل
            </Button>
        </a>

        <a href="https://google.com">
            <Button class="h-12 w-48">
                <div class="w-8">
                    <Google />
                </div>
                ورود با گوگل
            </Button>
        </a>
    </div>

    <div class="w-full flex items-center justify-center gap-2 mb-6">
        <Info size="12" class="opacity-60" />
        <p class="text-xs opacity-60">
            با ورود شما، اطلاعات داده شده به‌صورت امن ذخیره می‌شود و فقط برای
            بهبود تجربه‌ی کاربری استفاده خواهد شد.
        </p>
    </div>
</div>
