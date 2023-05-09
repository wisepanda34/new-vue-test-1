<template>
  <div class="app" v-show="posts.length>0">
    <PostForm  @create="createPost" />
    <PostList  :posts="posts" @remove="removePost" />
  </div>
  <h2 v-show="posts.length===0" style="color: teal">Posts list is empty!</h2>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
// import MyTest from "@/components/MyTest.vue";
export  default {
  components:{
    PostList, PostForm
  },
  data(){
    return{
      posts:[
        {id:1, title:'Javascript 1', body:'Javascript is an universal programm lang 1'},
        {id:2, title:'Javascript 2', body:'Javascript is lang 2'},
        {id:3, title:'Javascript 3', body:'Javascript is an universal 3'}
      ],
    }
  },
  methods:{
    createPost(post){
      this.posts.push(post);
    },
    removePost(post){
      this.posts=this.posts.filter(p=>p.id!==post.id)
    }
  },

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
