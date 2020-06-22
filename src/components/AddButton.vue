<template>
  <div class="add-button">
    <span class="add-button__icon"></span>
    <span class="add-button__text">
      <slot />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.add-button {
  display: flex;
  align-items: center;
  padding: 12px 8px 12px 12px;
  background: #dfe3e6;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: darken(#dfe3e6, 8%);
  }
  &__icon::before {
    content: '';
    float: left;
    width: 15px;
    height: 15px;
    background: url('../assets/icons/plus.svg') no-repeat;
  }
  &__text {
    color: #6b808c;
    margin-left: 8px;
  }
}
</style>
