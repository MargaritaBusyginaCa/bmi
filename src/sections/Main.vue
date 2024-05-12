<script setup>
import Calculator from "../components/Calculator.vue";
</script>
<template>
  <section class="h-screen">
    <div class="pt-16 pb-36">
      <img src="/images/logo.svg" />
    </div>
    <div class="flex justify-center items-center">
      <!-- <div>
        <h1 class="heading heading-xl">Body Mass Index Calculator</h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div> -->
      <Calculator />
    </div>
  </section>
</template>
