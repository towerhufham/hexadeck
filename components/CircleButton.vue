<template>
    <button :style="styles" @click="toggleLight">
        <div :class="lightStatus"></div>
    </button>
</template>

<script setup lang="ts">
    const props = defineProps(["x", "y"])
    const getStyles = useGrid().getStyles
    const styles = getStyles(props.x, props.y, 2, 2)

    const lightStatus = ref("off")

    const toggleLight = () => {
        lightStatus.value = (lightStatus.value == "off") ? "on" : "off"
    }
</script>

<style scoped>
    button {
        display: flex;
        justify-content: center;
        background-color: grey;
        border: none; 
        margin: 2px;
        border-radius: 999px;
    }
    button:hover {
        background-color: white;
    }
    div {
        width: 10px;
        height: 10px;
        border-radius: 999px;
        left: 50%;
        top: -20px;
        transform: translateY(-20px);
    }
    div.off {
        background-color: darkred;
    }
    div.on {
        background-color: red;
        border: 1px darkred solid;
    }
</style>