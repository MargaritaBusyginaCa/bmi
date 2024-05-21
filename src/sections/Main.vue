<script setup>
import BMICard from "../components/BMICard.vue";
</script>
<template>
  <section class="h-screen">
    <div class="bgr-rectangle"></div>
    <div class="pt-16 pb-36">
      <img src="/images/logo.svg" />
    </div>
    <div class="flex items-center gap-40">
      <div class="w-[465px]">
        <h1 class="heading heading-xl">Body Mass Index Calculator</h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <BMICard />
    </div>
  </section>
</template>

<style scoped lang="scss">
.bgr-rectangle {
  position: absolute;
  top: 0;
  left: 1%;
  width: 978px;
  height: 737px;
  z-index: -1;
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 1) 10%,
    rgb(205, 234, 248) 70%
  );
  border-radius: 0 0 30px 30px;
}
</style>
