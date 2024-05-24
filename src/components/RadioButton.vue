<script setup>
import { ref } from "vue";

const picked = ref("metric");
const emit = defineEmits(["select"]);

function select() {
  emit("select", picked.value);
}
</script>

<template>
  <div class="mb-5 grid grid-cols-2">
    <div>
      <input
        type="radio"
        id="metric"
        value="metric"
        v-model="picked"
        class="radio checked:bg-indigo-500"
        @change="select"
      />
      <label for="metric">Metric</label>
    </div>
    <div>
      <input
        type="radio"
        id="imperial"
        value="imperial"
        v-model="picked"
        class="radio checked:bg-indigo-500"
        @change="select"
      />
      <label for="imperial">Imperial</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
input[type="radio"] {
  margin-right: 15px;
  vertical-align: top;
}
</style>
