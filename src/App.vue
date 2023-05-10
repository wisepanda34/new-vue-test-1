<template>
  <div class="app" >
    <h1>PAGE POSTS</h1>
    <my-input v-model="searchQuery" placeholder="Search..."/>
    <div class="app__btns">
      <my-button @click="showDialog">Create post</my-button>
      <my-select v-model="selectedSort"
                 :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <PostForm  @create="createPost" />
    </my-dialog>
    <PostList v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
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
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
export  default {
  components:{
    MySelect,
    MyButton,
    MyDialog,
    PostList,
    PostForm,
    MyInput
  },
  data(){
    return{
      posts:[],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'by name'},
        {value: 'body', name: 'by description'},
      ],
      searchQuery:'',
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
  },
  computed:{
    sortedPosts(){
      return [...this.posts].sort((post1,post2)=>post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts(){
      return this.sortedPosts.filter(post=>post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch:{
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
  .app__btns{
    display: flex;
    justify-content: space-between;
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
