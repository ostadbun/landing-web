<script lang="ts">
    import * as Table from "$lib/components/ui/table/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
</script>

<div class="w-11/12  md:w-6/12 mx-auto mt-16">


    <!-- TODO:alternative combobox to this -->
    <div class="mb-8 w-full flex items-center gap-2">
        <Input class="w-3/12" type="text" placeholder="جست و جو" />

        <Select.Root type="single" >
            <Select.Trigger class="w-[180px]">نوع دانشگاه</Select.Trigger>
            <Select.Content>
                <Select.Item value="a" class="text-right">آزاد</Select.Item>
                <Select.Item value="d">دولتی</Select.Item>
                <Select.Item value="g">غیر انتفاهی</Select.Item>
                <Select.Item value="p">پیام نور</Select.Item>
            </Select.Content>
        </Select.Root>


         <Select.Root type="single" >
            <Select.Trigger class="w-[180px]"></Select.Trigger>
            <Select.Content>
                <Select.Item value="a" class="text-right">آزاد</Select.Item>
                <Select.Item value="d">دولتی</Select.Item>
                <Select.Item value="g">غیر انتفاهی</Select.Item>
                <Select.Item value="p">پیام نور</Select.Item>
            </Select.Content>
        </Select.Root>
    </div>

    <div class="w-full">
        <Table.Root dir="rtl">
            <Table.Caption
                >سیستم منبع باز است و هیج شخصی هیچ مسئولیتی در قبال هیچ چیزی
                ندارد.</Table.Caption
            >
            <Table.Header dir="rtl">
                <Table.Row>
                    <Table.Head class="text-right">نام</Table.Head>
                    <Table.Head class="text-right">نام خانوادگی</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell class="text-right">علی</Table.Cell>
                    <Table.Cell class="text-right">رضایی</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="text-right">علی</Table.Cell>
                    <Table.Cell class="text-right">رضایی</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="text-right">علی</Table.Cell>
                    <Table.Cell class="text-right">رضایی</Table.Cell>
                </Table.Row>

                
            </Table.Body>
        </Table.Root>
    </div>
</div>
