<template>
  <div class="app" >
    <h1>PAGE POSTS</h1>
    <my-button @click="showDialog">Create post</my-button>
    <my-dialog v-model:show="dialogVisible">
      <PostForm  @create="createPost" />
    </my-dialog>
    <PostList v-if="!isPostsLoading" :posts="posts" @remove="removePost" />
    <div v-else>Run loading...</div>
    <h2 class="listEmpty" v-show="posts.length===0" >Posts list is empty!</h2>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
export  default {
  components:{
    MyButton,
    MyDialog,
    PostList,
    PostForm,
  },
  data(){
    return{
      posts:[],
      dialogVisible: false,
      isPostsLoading: false,
    }
  },
  methods:{
    createPost(post){
      this.posts.push(post);
      this.dialogVisible=false;
    },
    removePost(post){
      this.posts=this.posts.filter(p=>p.id!==post.id)
    },
    showDialog(){
      this.dialogVisible=true;
    },
    async fetchPosts(){
      try{
        this.isPostsLoading=true;
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        this.posts=response.data;
      }catch (e){
        alert('error')
      }finally {
        this.isPostsLoading=false;
      }
    },
  },
  mounted() {
    this.fetchPosts()
  }
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
  .listEmpty{
    color: teal;
    margin-top: 20px;
  }
  h1{
    margin: 10px 0;
    color: teal;
  }

</style>
