<template>
  <form @submit.prevent>
    <h3>POST CREATING </h3>
    <input
        v-model="posts.title"
        class="input"
        type="text"
        placeholder="title"/>
    <input
        v-model="posts.body"
        class="input"
        type="text"
        placeholder="description"/>
    <my-button
        class="btn"
        v-on:click="createPost"
    >Create</my-button>
  </form>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  data(){
    return{
      posts:{
        title:'',
        body: '',
      }
    }
  },
  methods:{
    createPost(){
      this.post.id=Date.now();
      this.$emit('create', this.post);
      this.post={
        title:'',
        body: '',
      };
    },
  }
}
</script>

<style scoped>
  form{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .input{
    width: 50%;
    border: 1px solid teal;
    padding: 10px 15px;
  }
</style>