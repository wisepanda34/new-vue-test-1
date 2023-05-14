<template>
  <div class="post" >
    <div>
      <div>{{post.id}}</div>
      <div><strong>Title:</strong> {{post.title}}</div>
      <div><strong>Description:</strong> {{post.body}}</div>
    </div>
    <div class="post__btn">
      <my-button @click="$emit('remove',post)">Delete post</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  props:{
    post:{
      type: Object,
      required:true,
    }
  }
}
</script>

<style scoped>
  .post{
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>