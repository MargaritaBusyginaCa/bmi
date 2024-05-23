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
  <section class="py-[50px] lg:py-[80px]">
    <div class="px-[24px]">
      <div class="text-center lg:text-left section-text">
        <h1
          class="text-[32px] lg:text-[48px] font-semibold mb-[40px] lg:mb-[30px]"
        >
          Limitations of BMI
        </h1>
        <p class="body-m mb-[56px]">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
        <img
          src="/images/pattern-curved-line-right.svg"
          class="hidden lg:block"
        />
      </div>
      <!-- cards -->
      <div class="text-left parent-grid">
        <div
          v-for="(card, index) in cardsContent"
          :key="card.title"
          :id="`limitation-card-${index + 1}`"
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

<style scoped lang="scss">
@media (min-width: 768px) {
  .parent-grid {
    display: grid;
    gap: 30px;
    grid-template-columns: 20% 25% 25% 20%;
    grid-template-areas:
      "card-1 card-1 card-2 card-2"
      "card-3 card-3 card-4 card-4"
      ". card-5 card-5 .";
    #limitation-card-1 {
      grid-area: card-1;
    }
    #limitation-card-2 {
      grid-area: card-2;
    }
    #limitation-card-3 {
      grid-area: card-3;
    }
    #limitation-card-4 {
      grid-area: card-4;
    }
    > div:last-child {
      grid-area: card-5;
    }
  }
}
@media (min-width: 1024px) {
  .parent-grid {
    grid-template-columns: repeat(8, 10%);
    #limitation-card-1 {
      grid-column-start: 6;
      grid-column-end: 8;
      grid-row-start: 1;
      grid-row-end: 1;
    }
    #limitation-card-2 {
      grid-column-start: 5;
      grid-column-end: 7;
      grid-row-start: 2;
      grid-row-end: 2;
    }
    #limitation-card-3 {
      grid-column-start: 7;
      grid-column-end: 9;
      grid-row-start: 2;
      grid-row-end: 2;
    }
    #limitation-card-4 {
      grid-column-start: 4;
      grid-column-end: 6;
      grid-row-start: 3;
      grid-row-end: 3;
    }
    > div:last-child {
      grid-column-start: 6;
      grid-column-end: 8;
      grid-row-start: 3;
      grid-row-end: 3;
    }
  }

  .section-text {
    display: flex;
    flex-direction: column;
    width: 50%;
    position: absolute;
    left: 5%;
    p {
      width: 80%;
    }
    img {
      height: 122px;
    }
  }
}
</style>
