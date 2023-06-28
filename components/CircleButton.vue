<template>
    <button class="
        background-color:grey
        border:none margin:2px
        border-radius:999px" 
        :class="`grid-column:${x}/span_2 grid-row:${y}/span_2`"
        >
    </button>
</template>

<script setup lang="ts">
    const props = defineProps(["x", "y"])
</script>