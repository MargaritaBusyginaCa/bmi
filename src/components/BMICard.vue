<script setup>
import RadioButton from "./RadioButton.vue";
import FormInput from "./FormInput.vue";
import { ref, computed } from "vue";

const pickedMeasureSystem = ref("metric");
// const height = ref(170);
// const weight = ref(70);
function selectSystem(value) {
  pickedMeasureSystem.value = value;
}
// const bmi = computed(() => {
//   switch (pickedMeasureSystem.value) {
//     case "imperial":
//       return 0;
//       break;
//     case "metric":
//       const h = height.value / 100;
//       const h2 = h * h;
//       const num = weight.value / h2;
//       return Math.round(num * 10) / 10;
//   }
// });
const isImperial = computed(() =>
  pickedMeasureSystem.value === "imperial" ? true : false
);
const cm = ref(0);
const kg = ref(0);
const ft = ref(0);
const inch = ref(0);
//declare stones
const st = ref(0);
//declare pounds
const lbs = ref(0);
const error = ref("");
const bmiResult = ref(0);
function getCm(input) {
  cm.value = input.value;
  calculateBmiMetric();
}
function getKg(input) {
  kg.value = input.value;
  calculateBmiMetric();
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
  if (unit < minValue) {
    error.value = "The value you entered is too small";
    console.log(error.value);
    return false;
  } else if (unit > maxValue) {
    error.value = "The value you entered is too big";
    console.log(error.value);
    return false;
  } else {
    return true;
  }
}
function calculateBmiMetric() {
  const cmCheck = valueCheck(cm.value, 95, 240);
  const kgCheck = valueCheck(kg.value, 20, 800);
  if (cmCheck && kgCheck) {
    runFormula(cm.value, kg.value);
  } else {
    bmiResult.value = 0;
  }
}
function runFormula(cm, kg) {
  const meters = cm / 100;
  bmiResult.value = kg / (meters * meters);
  bmiResult.value = Math.round(bmiResult.value * 10) / 10;
}
function calculateBmiImperial() {
  const ftCheck = valueCheck(ft.value, 3, 8);
  const inchCheck = valueCheck(inch.value, 0, 12);
  let stCheck;
  let lbsCheck;
  if (st.value <= 0 && lbs.value <= 0) {
    stCheck = false;
    lbsCheck = false;
  } else {
    stCheck = true;
    lbsCheck = true;
  }

  if (ftCheck && inchCheck && stCheck && lbsCheck) {
    const cm = (ft.value * 12 + inch.value) * 2.54;

    let kg = 0;
    if (st.value <= 0) {
      kg = lbs.value * 0.453592;
    } else if (lbs.value <= 0) {
      kg = st.value * 6.35029;
    } else {
      kg = (st.value * 14 + lbs.value) * 0.453592;
    }
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
  background: rgb(52, 95, 246);
  background: linear-gradient(
    90deg,
    rgba(52, 95, 246, 1) 0%,
    rgba(88, 125, 255, 1) 48%
  );
  // border-radius: 10px 80px 80px 10px;
  .body-m {
    color: white;
  }
}
</style>
