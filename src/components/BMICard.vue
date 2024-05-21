<script setup>
import RadioButton from "./RadioButton.vue";
import Metric from "./input-layouts/Metric.vue";
import Imperial from "./input-layouts/Imperial.vue";
import { ref, computed } from "vue";

const pickedMeasureSystem = ref("metric");
const height = ref(170);
const weight = ref(70);
function selectSystem(value) {
  pickedMeasureSystem.value = value;
}
const bmi = computed(() => {
  switch (pickedMeasureSystem.value) {
    case "imperial":
      return 0;
      break;
    case "metric":
      const h = height.value / 100;
      const h2 = h * h;
      const num = weight.value / h2;
      return Math.round(num * 10) / 10;
  }
});
const isImperial = computed(() =>
  pickedMeasureSystem.value === "imperial" ? true : false
);
</script>

<template>
  <div class="p-8 rounded-2xl shadow-md bg-white">
    <p class="heading heading-s pb-7">Enter your details below</p>
    <RadioButton @select="selectSystem" />
    <component :is="isImperial ? Imperial : Metric" />
    <div class="calculator-card p-8 flex text-white">
      <div class="basis-1/2 flex flex-col justify-center">
        <p class="body-m">Your BMI is...</p>
        <p class="heading heading-xl">{{ bmi }}</p>
      </div>
      <div class="w-72">
        Your BMI suggests you're a healthy weight. Your ideal weight is between
        <span>63.3kgs</span> - <span>85.2kgs</span>.
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.calculator-card {
  background: rgb(52, 95, 246);
  background: linear-gradient(
    90deg,
    rgba(52, 95, 246, 1) 0%,
    rgba(88, 125, 255, 1) 48%
  );
  border-radius: 10px 80px 80px 10px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
