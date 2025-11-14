<script lang="ts">
    import { page } from "$app/state";
    import img from "$lib/assets/siavash-shahshahani.webp";
    import { Button } from "$lib/components/ui/button";
    import * as Table from "$lib/components/ui/table/index.js";
</script>

<div
    class=" mx-auto gap-6 flex-wrap lg:flex-nowrap w-9/12 mt-12 flex justify-between"
>
    <div class="w-full flex lg:block justify-center flex-wrap lg:w-6/12">
        <h1
            class="text-[3.5rem] w-full text-center lg:text-right font-extrabold mt-6"
        >
           نظریه زبان و ماشین ها
        </h1>

        <h2 class="text-justify leading-7">
            درس نظریه زبان و ماشین‌ها به بررسی ساختارهای ریاضی برای مدل‌سازی
            زبان‌ها و ماشین‌های محاسباتی می‌پردازد و مفاهیمی مانند گرامرها،
            زبان‌های رسمی، اتوماتا و محاسبات‌پذیری را شامل می‌شود.
        </h2>

        <div class="flex w-8/12 lg:w-11/12 gap-3 justify-start mt-6">
            <Button class="flex-1 h-10">o</Button>
            <Button class="flex-1 h-10">o</Button>
            <Button class="flex-1 h-10">o</Button>
            <Button class="flex-1 h-10">o</Button>
        </div>

        <div class="w-full lg:w-11/12 mt-6">
            <div class="w-full bg-muted text-center rounded-t-2xl text-xs">
                آراع
            </div>
            <Table.Root dir="rtl">
                <Table.Caption
                    >سیستم منبع باز است و هیج شخصی هیچ مسئولیتی در قبال هیچ چیزی
                    ندارد.</Table.Caption
                >
                <Table.Header dir="rtl">
                    <Table.Row>
                        <Table.Head class="text-right">نام درس</Table.Head>
                        <Table.Head class="text-right">واحد</Table.Head>
                        <Table.Head class="text-right">وضعیت</Table.Head>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell class="text-right"
                            >ریاضیات مهندسی</Table.Cell
                        >
                        <Table.Cell class="text-right">۳</Table.Cell>
                        <Table.Cell class="text-right">پاس شده</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell class="text-right"
                            >ریاضیات مهندسی</Table.Cell
                        >
                        <Table.Cell class="text-right">۳</Table.Cell>
                        <Table.Cell class="text-right">پاس شده</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell class="text-right"
                            >ریاضیات مهندسی</Table.Cell
                        >
                        <Table.Cell class="text-right">۳</Table.Cell>
                        <Table.Cell class="text-right">پاس شده</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </div>
    </div>

    <div class="w-full lg:w-6/12 h-96">
        <div class="w-11/12 mx-auto mt-6">
            <div class="w-full bg-muted text-center rounded-t-2xl text-xs">
                آراع
            </div>
            <Table.Root dir="rtl">
                <Table.Caption
                    >سیستم منبع باز است و هیج شخصی هیچ مسئولیتی در قبال هیچ چیزی
                    ندارد.</Table.Caption
                >
                <Table.Header dir="rtl">
                    <Table.Row>
                        <Table.Head class="text-right">نام درس</Table.Head>
                        <Table.Head class="text-right">واحد</Table.Head>
                        <Table.Head class="text-right">وضعیت</Table.Head>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell class="text-right"
                            >ریاضیات مهندسی</Table.Cell
                        >
                        <Table.Cell class="text-right">۳</Table.Cell>
                        <Table.Cell class="text-right">پاس شده</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell class="text-right"
                            >ریاضیات مهندسی</Table.Cell
                        >
                        <Table.Cell class="text-right">۳</Table.Cell>
                        <Table.Cell class="text-right">پاس شده</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell class="text-right"
                            >ریاضیات مهندسی</Table.Cell
                        >
                        <Table.Cell class="text-right">۳</Table.Cell>
                        <Table.Cell class="text-right">پاس شده</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </div>
    </div>
</div>
