<template>
  <div class="navbar">

    <h3 @click="$router.push('/')">VUE 3</h3>
    <div class="nav__btn">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 15px">About</my-button>
    </div>

  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "Navbar",
  components: {MyButton}
}
</script>

<style scoped>
.navbar{
  height: 70px;
  background: lightgray;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}
h3{
  font-size: 40px;
  font-weight: 700;
  color: teal;
}
</style>