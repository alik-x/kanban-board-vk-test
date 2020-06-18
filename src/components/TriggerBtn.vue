<template>
  <div class="add-trigger">
    <span class="add-icon"></span>
    <span class="text"><slot /></span>
  </div>
</template>

<style scoped>
.add-trigger {
  display: flex;
  align-items: center;
  padding: 12px 8px 12px 12px;
  background: #dfe3e6;
  border-radius: 3px;
  cursor: pointer;
}

.add-trigger:hover {
  background: #d2d2d2;
}

.add-icon::before {
  content: '';
  float: left;
  width: 15px;
  height: 15px;
  background: url('../assets/icons/plus.svg') no-repeat;
}

.text {
  color: #6b808c;
  margin-left: 8px;
}
</style>
