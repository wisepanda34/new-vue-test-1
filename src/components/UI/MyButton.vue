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
    height: 30px;
    background: none;
    color: teal;
    border: 3px solid teal;
    cursor: pointer;
  }
</style>