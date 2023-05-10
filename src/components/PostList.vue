<template>
  <div>
    <h3 v-show="posts.length>0">THE POSTS LIST</h3>
    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
</template>


<script>
import PostItem from "@/components/PostItem.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {MyInput, PostItem},
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

  .post-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .post-list-enter-active,
  .post-list-leave-active {
    transition: all 0.3s ease;
  }
  .post-list-enter-from,
  .post-list-leave-to {
    opacity: 0;
    transform: translateX(70px);
  }
  .post-list-move {
    transition: transform 0.5s ease;
  }

</style>