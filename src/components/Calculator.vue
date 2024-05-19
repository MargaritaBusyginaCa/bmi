<script setup>
import RadioButton from "./RadioButton.vue";
import { ref, computed } from "vue";

const pickedMeasureSystem = ref(null);
function selectSystem(value) {
  pickedMeasureSystem.value = value;
}
const imperialHeight = ["ft", "in"];
const imperialWeight = ["st", "lbs"];
const metricHeight = ["cm"];
const metricWeight = ["kg"];

const heightUnits = computed(() =>
  pickedMeasureSystem.value === "imperial" ? imperialHeight : metricHeight
);

const weightUnits = computed(() =>
  pickedMeasureSystem.value === "imperial" ? imperialWeight : metricWeight
);
//TO-DO: delete fixed width from the main div
</script>

<template>
  <div class="p-8 rounded-2xl shadow-md w-[564px] bg-white">
    <p class="heading heading-s">Enter your details below</p>
    <RadioButton @select="selectSystem" />
    <div class="form">
      <div class="height">
        <div>
          <label for="height">Height</label>
          <input id="height" type="number" />
          <span>{{ heightUnits[0] }}</span>
        </div>
      </div>
      <div class="weight">
        <div>
          <label for="weight">Weight</label>
          <input id="weight" type="number" />
          <span>{{ weightUnits[0] }}</span>
        </div>
      </div>
    </div>

    <div class="calculator-card p-8 flex text-white">
      <div class="basis-1/2 flex flex-col justify-center">
        <p class="body-m">Your BMI is...</p>
        <p class="heading heading-xl">23.4</p>
      </div>
      <div class="w-72">
        Your BMI suggests you're a healthy weight. Your ideal weight is between
        <span>63.3kgs</span> - <span>85.2kgs</span>.
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.calculator-card {
  background: rgb(52, 95, 246);
  background: linear-gradient(
    90deg,
    rgba(52, 95, 246, 1) 0%,
    rgba(88, 125, 255, 1) 48%
  );
  border-radius: 10px 80px 80px 10px;
}
.form {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  > div {
    width: 47%;
  }
}
.height > div,
.weight > div {
  display: flex;
  flex-direction: column;
  position: relative;
  > input {
    border: 1px solid #d8e2e7;
    border-radius: 10px;
    padding: 10px 14px;
    color: black;
    font-weight: 600;
    font-size: 20px;
  }
  > span {
    position: absolute;
    top: 45%;
    right: 4%;
    color: #345ff6;
    font-size: 20px;
    font-weight: 600;
  }
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
