<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: String,
  label: String,
  unit1: String,
  unit2: String,
  isDouble: Boolean,
});
</script>

<template>
  <div :class="{ height: id === 'height', weight: id === 'weight' }">
    <p>
      <label :for="id">{{ label }}</label>
    </p>
    <div v-if="isDouble">
      <div>
        <input :id="id" type="number" />
        <span>{{ unit1 }}</span>
      </div>
      <div>
        <input type="number" />
        <span>{{ unit2 }}</span>
      </div>
    </div>
    <div v-else>
      <input :id="id" type="number" />
      <span>{{ unit1 }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.height,
.weight {
  > div {
    position: relative;
    > div {
      position: relative;
    }
  }
  input {
    border: 1px solid #d8e2e7;
    border-radius: 10px;
    padding: 10px 14px;
    color: black;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
    width: 100%;
  }
  span {
    position: absolute;
    color: #345ff6;
    font-size: 20px;
    font-weight: 600;
    top: 15%;
    right: 4%;
  }
  label {
    color: #5e6e85;
    margin-bottom: 8px;
  }
}
</style>
