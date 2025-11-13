<script lang="ts">
    import * as Table from "$lib/components/ui/table/index.js";
</script>

<div class="w-6/12 mx-auto mt-16">
    <Table.Root dir="rtl">
        <Table.Caption>سیستم منبع باز است و هیج شخصی هیچ مسئولیتی در قبال هیچ چیزی ندارد.</Table.Caption>
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
