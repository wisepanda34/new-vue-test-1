<template>
  <div>
    <h3>THE POSTS LIST</h3>
    <post-item
        v-for="post in posts"
        :post="post"
    />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props:{
    posts:{
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

  h3{
    margin-top: 20px;
  }
</style>