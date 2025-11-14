<script lang="ts">
    import { page } from "$app/state";
    import img from "$lib/assets/uni.png";
    import bk from "$lib/assets/bk.jpg";
    import { Button } from "$lib/components/ui/button";
    import * as Table from "$lib/components/ui/table/index.js";
    import { onMount } from "svelte";
</script>

<div
    class=" mx-auto gap-6 flex-wrap lg:flex-nowrap w-9/12 mt-12 flex justify-between"
>
    <div class="w-11/12 mx-auto flex lg:block justify-center flex-wrap">
        <img
            class="rounded-xl opacity-85 object-cover size-64 dark:invert"
            src={img}
            alt=""
        />

        <h1
            class="text-[3.5rem] w-full font-extrabold text-center lg:text-right mt-6"
        >
            <span class="text-[3rem] font-medium">دانشگاه</span>
            صنعتی شریف
        </h1>

        <div class="flex w-8/12 lg:w-6/12 gap-3 justify-start mt-6">
            <Button class="flex-1 h-10">o</Button>
            <Button class="flex-1 h-10">o</Button>
            <Button class="flex-1 h-10">o</Button>
            <Button class="flex-1 h-10">o</Button>
        </div>

        <div class="w-8/12 mt-6">
            <div class="w-full bg-muted text-center rounded-t-2xl text-xs">
                اطلاعات
            </div>
            <Table.Root dir="rtl">
                <Table.Caption
                    >سیستم منبع باز است و هیج شخصی هیچ مسئولیتی در قبال هیچ چیزی
                    ندارد.</Table.Caption
                >
                <Table.Header dir="rtl">
                    <Table.Row>
                        <Table.Head class="text-right"></Table.Head>
                        <Table.Head class="text-right"></Table.Head>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell class="text-right">تعداد استاد</Table.Cell>
                        <Table.Cell class="text-left">۱۹۳۸</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell class="text-right">تعداد دانشجو</Table.Cell>
                        <Table.Cell class="text-left">۴۰۰۰</Table.Cell>
                    </Table.Row>

                     <Table.Row>
                        <Table.Cell class="text-right">تعداد رشته</Table.Cell>
                        <Table.Cell class="text-left">۴۹</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell class="text-right">تعداد دروس</Table.Cell>
                        <Table.Cell class="text-left">۸۳۳۴</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </div>
    </div>
</div>
