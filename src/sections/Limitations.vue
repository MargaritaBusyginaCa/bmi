<script setup>
import { ref } from "vue";
const cardsContent = ref([
  {
    title: "Gender",
    body: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    icon: "/images/icon-gender.svg",
  },
  {
    title: "Age",
    body: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    icon: "/images/icon-age.svg",
  },
  {
    title: "Muscle",
    body: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    icon: "/images/icon-muscle.svg",
  },
  {
    title: "Pregnancy",
    body: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
    icon: "/images/icon-pregnancy.svg",
  },
  {
    title: "Race",
    body: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    icon: "/images/icon-race.svg",
  },
]);
</script>
<template>
  <section class="py-[50px]">
    <div class="text-center px-[24px]">
      <h1 class="text-[32px] font-semibold mb-[40px]">Limitations of BMI</h1>
      <p class="body-m mb-[56px]">
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </p>
      <!-- cards -->
      <div class="text-left md:grid md:grid-cols-2 gap-8">
        <div
          v-for="card in cardsContent"
          :key="card.title"
          class="mb-[16px] p-[24px] shadow rounded-md"
        >
          <div class="flex items-center gap-5">
            <img :src="card.icon" :alt="card.title" />
            <h2 class="heading heading-s">{{ card.title }}</h2>
          </div>
          <p>{{ card.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
