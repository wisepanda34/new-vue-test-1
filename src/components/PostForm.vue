<template>
  <form @submit.prevent>
    <h3>POST CREATING </h3>
    <my-input
        v-model="posts.title"
        placeholder="title"/>
    <my-input
        v-model="posts.body"
        placeholder="description"/>
    <my-button
        class="btn"
        v-on:click="createPost"
    >Create</my-button>
  </form>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {MyInput, MyButton},
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

</style>