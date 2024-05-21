<script setup></script>

<template>
  <div class="form">
    <div class="height">
      <p><label for="height">Height</label></p>
      <div>
        <input id="height" type="number" />
        <span>ft</span>
      </div>
      <div>
        <input type="number" />
        <span>in</span>
      </div>
    </div>
    <div class="weight">
      <p><label for="weight">Weight</label></p>
      <div>
        <input id="weight" type="number" />
        <span>st</span>
      </div>
      <div>
        <input type="number" />
        <span>lbs</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.form {
  display: flex;
  gap: 20px;
  .height,
  .weight {
    > div {
      position: relative;
    }
    input {
      border: 1px solid #d8e2e7;
      border-radius: 10px;
      padding: 10px 14px;
      color: black;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 20px;
    }
    span {
      position: absolute;
      top: 15%;
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
