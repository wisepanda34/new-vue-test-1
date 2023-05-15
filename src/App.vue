<template>

  <Navbar/>
  <div class="app">
    <router-view/>
  </div>

</template>

<script>
import NavBar from "@/components/Navbar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {Navbar}

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}
</style>