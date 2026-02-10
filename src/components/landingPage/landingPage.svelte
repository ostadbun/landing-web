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
