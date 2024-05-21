<script setup>
import { ref } from "vue";

const picked = ref("metric");
const emit = defineEmits(["select"]);

function select() {
  emit("select", picked.value);
}
</script>

<template>
  <div class="mb-5">
    <input
      type="radio"
      id="metric"
      value="metric"
      v-model="picked"
      @change="select"
    />
    <label for="metric" class="">Metric</label>

    <input
      type="radio"
      id="imperial"
      value="imperial"
      v-model="picked"
      @change="select"
    />
    <label for="imperial">Imperial</label>
  </div>
</template>

<style scoped lang="scss">
// input[type="radio"] {
//   height: 31px;
//   width: 31px;
//   vertical-align: middle;

//   // margin-right: 10px;
//   &:checked {
//     accent-color: red;
//     height: 15px;
//     width: 15px;
//   }
// }
</style>
