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
        <img
            class="rounded-xl opacity-95 object-cover w-[300px] h-[200px] bg-blue-300"
            src={img}
            alt=""
        />

        <h1
            class="text-[3rem] w-full text-center lg:text-right font-medium mt-6"
        >
            سیاوش <span class="text-[3.5rem] font-extrabold">شهشهانی</span>
        </h1>

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
