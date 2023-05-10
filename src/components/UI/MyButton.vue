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
    width: 100px;
    height: 40px;
    background: none;
    color: teal;
    border: 3px solid teal;
    cursor: pointer;
    margin: 10px 0;
  }
</style>