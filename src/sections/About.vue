<script setup>
import { ref } from "vue";
const cardsContent = ref([
  {
    title: "Healthy eating",
    body: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    icon: "/images/icon-eating.svg",
  },
  {
    title: "Regular exercise",
    body: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    icon: "/images/icon-exercise.svg",
  },
  {
    title: "Adequate sleep",
    body: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    icon: "/images/icon-sleep.svg",
  },
]);
</script>
<template>
  <section>
    <div
      class="mb-[70px] md:flex justify-around items-center lg:justify-center"
    >
      <div class="w-full basis-[45%] md:ml-[-100px] lg:ml-0">
        <img
          src="/images/image-man-eating.webp"
          alt="a man eating sushi"
          class="xl:w-[564px] xl:h-[533px]"
        />
      </div>
      <div class="basis-[45%] px-[24px]">
        <h1
          class="font-semibold color-black leading-tight text-[32px] lg:text-[48px] my-8"
        >
          What your BMI result means
        </h1>
        <p class="body-m">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>

    <!-- cards -->
    <div class="bg-[#ebf2ff4b] py-[40px] lg:flex lg:px-20">
      <div
        v-for="card in cardsContent"
        :key="card.title"
        class="flex flex-col gap-5 mb-[40px] px-[24px]"
      >
        <img :src="card.icon" :alt="card.title" class="w-[64px] h-[64px]" />
        <h2 class="heading heading-m">{{ card.title }}</h2>
        <p class="body-m lg:w-4/5">{{ card.body }}</p>
      </div>
    </div>
  </section>
</template>
