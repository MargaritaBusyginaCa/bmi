<script setup></script>

<template>
  <div class="form">
    <div class="height">
      <p><label for="height">Height</label></p>
      <input id="height" type="number" />
      <span>cm</span>
    </div>
    <div class="weight">
      <p><label for="weight">Weight</label></p>
      <input id="weight" type="number" />
      <span>kg</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.form {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  gap: 20px;
  .height,
  .weight {
    gap: 20px;
    position: relative;
    input {
      border: 1px solid #d8e2e7;
      border-radius: 10px;
      padding: 10px 14px;
      color: black;
      font-weight: 600;
      font-size: 20px;
    }
    span {
      position: absolute;
      top: 45%;
      right: 4%;
      color: #345ff6;
      font-size: 20px;
      font-weight: 600;
    }
    label {
      color: #5e6e85;
      margin-bottom: 8px;
    }
  }
}
</style>
