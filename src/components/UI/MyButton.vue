<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
  .btn {
    min-width: 80px;
    height: 40px;
    background: none;
    color: teal;
    border: 3px solid teal;
    cursor: pointer;
    margin: 10px 0;
    padding: 5px 5px;
  }
</style>