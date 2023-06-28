<template>
  <button @click="mute1">Mute 1</button>
  <button @click="mute2">Mute 2</button>

  <Octahack></Octahack>
</template>

<script lang="ts" setup>
  import {Howl, Howler} from "howler"

  const sound1 = new Howl({
    src: ["/samples/geo1.wav"],
    loop: true,
  })
  const sound2 = new Howl({
    src: ["/samples/geo2.wav"],
    loop: true,
  })
  const mute1 = () => {
    sound1.volume(0)
  }
  const mute2 = () => {
    sound2.volume(0)
  }
  onMounted(() => {
    //note: this still requires a mouse click to trigger audio
    // sound1.play()
    // sound2.play()
  })
</script>
