<script setup>
import RadioButton from "./RadioButton.vue";
import { ref } from "vue";

const pickedMeasureSystem = ref(null);
function selectSystem(value) {
  pickedMeasureSystem.value = value;
}
</script>

<template>
  <div class="">
    <p class="heading heading-s">Enter your details below</p>
    <RadioButton @select="selectSystem" />
  </div>
</template>
<style scoped lang="scss"></style>
