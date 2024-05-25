<script setup>
import { ref } from "vue";

const picked = ref("metric");
const emit = defineEmits(["select"]);

function select(btnIndex) {
  picked.value = btnIndex === 0 ? "metric" : "imperial";
  emit("select", picked.value);
}
function test(btnIndex) {
  const selectedBtn = document.getElementsByClassName("radio-btn");
  for (let i = 0; i < selectedBtn.length; i++) {
    if (selectedBtn[i].classList.contains("selected")) {
      selectedBtn[i].classList.remove("selected");
    }
  }
  selectedBtn[btnIndex].classList.add("selected");
}
</script>

<template>
  <div class="mb-5 grid grid-cols-2 md:flex md:gap-[50px] lg:grid lg:gap-0">
    <div class="flex gap-3 items-center">
      <div class="w-[31px] h-[31px] flex justify-center items-center">
        <div class="radio-btn" @click="test(0), select(0)"></div>
      </div>
      <span for="imperial">Metric</span>
    </div>
    <div class="flex gap-3 items-center">
      <div class="w-[31px] h-[31px] flex justify-center items-center">
        <div class="radio-btn" @click="test(1), select(1)"></div>
      </div>

      <span for="imperial">Imperial</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
input[type="radio"] {
  margin-right: 15px;
  vertical-align: center;
  transform: scale(2);
}
.radio-btn {
  width: 31px;
  height: 31px;
  border-radius: 50%;
  border: 1px solid grey;
  background-color: white;
  &.selected {
    width: 20px;
    height: 20px;
    background-color: #345ff6;

    box-shadow: 0px 0px 0px 10px #3662ff4d;
  }
}
</style>
