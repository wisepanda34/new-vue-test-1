<template>
  <br>
  <div>Likes: {{likes}}</div>
  <div>Dislikes: {{dislikes}}</div>
  <br>
  <button @click="addLike">add like</button>
  <button @click="addDislike">add dislike</button>

</template>

<script>
export default {
  name: "my-test",
  data(){
    return{
      likes:0,
      dislikes: 0,
    }
  },
  methods:{
    addLike(){
      this.likes+=1;
    },
    addDislike(){
      this.dislikes+=1;
    }
  }
}
</script>

<style scoped>

</style>