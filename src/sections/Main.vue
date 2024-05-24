<script setup>
import BMICard from "../components/BMICard.vue";
</script>
<template>
  <section class="lg:py-[80px]">
    <div
      class="bgr-rectangle w-full h-full md:h-[80%] lg:w-[60%] lg:h-[70%]"
    ></div>

    <div class="px-[24px] lg:flex justify-center gap-[150px] items-baseline">
      <div class="md:w-3/4 text-center m-auto lg:text-left lg:m-0 basis-[30%]">
        <div
          class="pt-[32px] px-[24px] flex justify-center lg:justify-start lg:px-0 lg:pt-[70px] lg:pb-[30px]"
        >
          <img src="/images/logo.svg" alt="logo" />
        </div>

        <h1 class="text-[48px] font-semibold leading-tight my-[24px]">
          Body Mass Index Calculator
        </h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <BMICard class="basis-[40%]" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.bgr-rectangle {
  position: absolute;
  top: 0;
  left: 1%;
  // width: 978px;
  // height: 737px;
  z-index: -1;
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 1) 10%,
    rgb(205, 234, 248) 70%
  );
  border-radius: 0 0 30px 30px;
}
</style>
