<script setup>
import RadioButton from "./RadioButton.vue";
import FormInput from "./FormInput.vue";
import { ref, computed } from "vue";

const pickedMeasureSystem = ref("metric");
const isImperial = computed(() => pickedMeasureSystem.value === "imperial");

const cm = ref(0);
const kg = ref(0);
const ft = ref(0);
const inch = ref(0);
const st = ref(0);
const lbs = ref(0);
const bmiResult = ref(0);

function selectSystem(value) {
  pickedMeasureSystem.value = value;
}

function updateMeasurement(refVar, value, callback) {
  refVar.value = value;
  callback();
}

function getCm(input) {
  updateMeasurement(cm, input.value, calculateBmiMetric);
}

function getKg(input) {
  updateMeasurement(kg, input.value, calculateBmiMetric);
}

function getFtInch(input) {
  ft.value = input[0] ?? 0;
  inch.value = input[1] ?? 0;
  calculateBmiImperial();
}

function getStLbs(input) {
  st.value = input[0] ?? 0;
  lbs.value = input[1] ?? 0;
  calculateBmiImperial();
}

function valueCheck(unit, minValue, maxValue) {
  if (unit.value < minValue) {
    return false;
  } else if (unit.value > maxValue) {
    return false;
  } else {
    return true;
  }
}

function calculateBmiMetric() {
  const cmCheck = valueCheck(cm, 95, 240);
  const kgCheck = valueCheck(kg, 20, 800);
  if (cmCheck && kgCheck) {
    runFormula(cm.value, kg.value);
  } else {
    bmiResult.value = 0;
  }
}

function runFormula(cm, kg) {
  const meters = cm / 100;
  bmiResult.value = Math.round((kg / (meters * meters)) * 10) / 10;
}

function calculateBmiImperial() {
  const ftCheck = valueCheck(ft, 3, 8);
  const inchCheck = valueCheck(inch, 0, 12);
  const stCheck = st.value > 0 || lbs.value > 0;

  if (ftCheck && inchCheck && stCheck) {
    const cm = (ft.value * 12 + inch.value) * 2.54;
    const kg =
      st.value > 0
        ? (st.value * 14 + lbs.value) * 0.453592
        : lbs.value * 0.453592;
    runFormula(cm, kg);
  } else {
    bmiResult.value = 0;
  }
}
</script>

<template>
  <div class="p-8 rounded-2xl shadow-md bg-white lg:max-w-[564px]">
    <p class="heading heading-s pb-7">Enter your details below</p>
    <RadioButton @select="selectSystem" />
    <div v-if="!isImperial" class="md:grid grid-cols-2 gap-4">
      <FormInput
        id="height"
        label="Height"
        unit1="cm"
        :isDouble="false"
        @input-change="getCm"
      />
      <FormInput
        id="weight"
        label="Weight"
        unit1="kg"
        :isDouble="false"
        @input-change="getKg"
      />
    </div>
    <div v-else>
      <FormInput
        id="height"
        label="Height"
        unit1="ft"
        unit2="in"
        :isDouble="true"
        @input-change="getFtInch"
      />
      <FormInput
        id="weight"
        label="Weight"
        unit1="st"
        unit2="lbs"
        :isDouble="true"
        @input-change="getStLbs"
      />
    </div>

    <div class="calculator-card">
      <div>
        <p class="body-m font-semibold">Your BMI is...</p>
        <p class="text-[48px] font-semibold">{{ bmiResult }}</p>
      </div>
      <div class="">
        Your BMI suggests you're a healthy weight. Your ideal weight is between
        <span class="font-bold">63.3kgs</span> -
        <span class="font-bold">85.2kgs</span>.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.calculator-card {
  color: white;
  padding: 24px;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    rgba(52, 95, 246, 1) 0%,
    rgba(88, 125, 255, 1) 48%
  );
  .body-m {
    color: white;
  }
}
</style>
