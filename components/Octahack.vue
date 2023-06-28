<template>
  <div class="frame">

    <div class="screen">
      Screen
    </div>

    <CircleButton x="1" y="15"></CircleButton>
    <CircleButton x="3" y="15"></CircleButton>
    <CircleButton x="5" y="15"></CircleButton>
    <CircleButton x="7" y="15"></CircleButton>

    <CircleButton x="9" y="15"></CircleButton>
    <CircleButton x="11" y="15"></CircleButton>
    <CircleButton x="13" y="15"></CircleButton>
    <CircleButton x="15" y="15"></CircleButton>

    <CircleButton x="17" y="15"></CircleButton>
    <CircleButton x="19" y="15"></CircleButton>
    <CircleButton x="21" y="15"></CircleButton>
    <CircleButton x="23" y="15"></CircleButton>

    <CircleButton x="25" y="15"></CircleButton>
    <CircleButton x="27" y="15"></CircleButton>
    <CircleButton x="29" y="15"></CircleButton>
    <CircleButton x="31" y="15"></CircleButton>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .frame {
    background-color: black;
    color: white;
    display: grid;
    grid-template-columns: repeat(32,1fr);
    grid-template-rows: repeat(16,1fr);
    width:800px;
    height:400px;
    margin: 50px auto;
    border: solid 10px black;
    border-radius: 20px;
  }
  .screen {
    grid-column: 11/span 12;
    grid-row: 2/span 7;
    background-color: skyblue;
    text-align: center;
  }
</style>