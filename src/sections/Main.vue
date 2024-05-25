<script setup>
import BMICard from "../components/BMICard.vue";
</script>
<template>
  <section class="lg:py-[100px]">
    <div
      class="bgr-rectangle w-full h-full md:h-[80%] lg:w-[60%] lg:h-[70%]"
    ></div>

    <div
      class="px-[24px] lg:flex justify-center gap-[70px] items-start lg:pt-10"
    >
      <div
        class="md:w-3/4 text-center m-auto lg:text-left lg:m-0 basis-[30%] relative"
      >
        <div
          class="flex justify-center py-7 lg:absolute top-[-70px] left-0 lg:py-0"
        >
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <h1 class="text-[48px] font-semibold leading-tight my-[24px]">
          Body Mass Index Calculator
        </h1>
        <p class="mb-[40px]">
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
  z-index: -1;
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 1) 10%,
    rgb(205, 234, 248) 70%
  );
  border-radius: 0 0 30px 30px;
}
</style>
