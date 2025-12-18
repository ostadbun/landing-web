<script lang="ts">
    interface Accept {
        key: string;
        value: string;
    }
    let {data} = $props<{ data: Accept[] }>();
</script>

<p>This is table {data[0].key}</p>
