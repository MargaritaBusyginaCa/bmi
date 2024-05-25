<script setup>
import { ref } from "vue";

const props = defineProps({
  id: String,
  label: String,
  unit1: String,
  unit2: String,
  isDouble: Boolean,
});
const emit = defineEmits(["input-change"]);
const inputValue = ref(null);
const inputValue2 = ref(null);
function inputChange() {
  emit(
    "input-change",
    props.isDouble ? [inputValue.value, inputValue2.value] : inputValue
  );
}
</script>

<template>
  <div :class="{ height: id === 'height', weight: id === 'weight' }">
    <p>
      <label :for="id">{{ label }}</label>
    </p>
    <div v-if="isDouble" class="flex gap-[20px] md:gap-[10px] lg:gap-[10px]">
      <div>
        <input
          :id="id"
          type="number"
          v-model="inputValue"
          @input="inputChange"
        />
        <span>{{ unit1 }}</span>
      </div>
      <div>
        <input type="number" v-model="inputValue2" @input="inputChange" />
        <span>{{ unit2 }}</span>
      </div>
    </div>
    <div v-else>
      <input :id="id" type="number" v-model="inputValue" @input="inputChange" />
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
    right: 6%;
  }
  label {
    color: #5e6e85;
    margin-bottom: 8px;
  }
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
