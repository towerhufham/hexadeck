<template>
    <button class="
        background-color:grey
        border:none margin:2px
        border-radius:999px" 
        :style="styles"
        >
    </button>
</template>

<script setup lang="ts">
    const props = defineProps(["x", "y"])
    const getStyles = useGrid().getStyles
    const styles = getStyles(props.x, props.y, 2, 2)
</script>