<template>
  <div class="card">{{ text }}</div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  display: block;
  width: 248px;
  margin: 0 12px;
  padding: 8px 8px 8px 12px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(9, 45, 66, 0.25);
  border-radius: 3px;
  word-break: break-word;
  cursor: pointer;
}

.card:not(:first-child) {
  margin-top: 8px;
}

.card:first-child {
  margin-top: 4px;
}

.card:last-child {
  margin-bottom: 5px;
}
</style>
