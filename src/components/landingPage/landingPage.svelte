<script lang="ts">
    import { mode } from "mode-watcher";

    import { EyeIcon, StarIcon } from "lucide-svelte";

    import Hero from "./sections/hero.svelte";
    import Contribute from "./sections/contribute.svelte";
    import Entities from "./sections/entities.svelte";
    import Hrcom from "../lineSpace/hrcom.svelte";
    import Related from "./sections/related.svelte";
    import Footer from "./sections/footer.svelte";
</script>


<!-- .container {
    width: 100%;
    @media (width >= 40rem /* 640px */) {
        max-width: 40rem /* 640px */;
    }
    @media (width >= 48rem /* 768px */) {
        max-width: 48rem /* 768px */;
    }
    @media (width >= 64rem /* 1024px */) {
        max-width: 64rem /* 1024px */;
    }
    @media (width >= 80rem /* 1280px */) {
        max-width: 80rem /* 1280px */;
    }
    @media (width >= 96rem /* 1536px */) {
        max-width: 96rem /* 1536px */;
    }
} -->


<div class="w-10/12 md:w-7/12 max-w-384  mx-auto">
    <Hero />

    <Hrcom />

    <Related />

    <Hrcom />

    <Entities />

    <Hrcom />

    <Contribute />

    <Hrcom />

    <Footer />
</div>
