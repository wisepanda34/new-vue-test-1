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

<!--    <div class="page__wrapper">-->
<!--      <div v-for="pageNumber in totalPages"-->
<!--           :key="pageNumber"-->
<!--           class="page"-->
<!--           :class="{-->
<!--             'current-page':page === pageNumber-->
<!--           }"-->
<!--           @click="changePage(pageNumber)"-->
<!--      >{{pageNumber}}</div>-->
<!--    </div>-->

    <post-list v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
    <div class="run-load" v-else>Run loading...</div>
    <h2 class="list-empty" v-show="posts.length===0" >Posts list is empty!</h2>

<!--    <div @click="loadMorePosts">Load more posts</div>-->
    <div ref="observer" class="observer"></div>
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
        {value: '', name: 'not sort'},
        {value: 'title', name: 'by name'},
        {value: 'body', name: 'by description'},
      ],
      searchQuery:'',
      page:1,
      limit:10,
      totalPages:0,
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
    // changePage(pageNumber) {
    //   this.page = pageNumber
    //   this.fetchPosts()
    // },
    async fetchPosts(){
      try{
        this.isPostsLoading=true;
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts?',{
          params:{
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages=Math.ceil(response.headers['x-total-count']/this.limit)
        this.posts=response.data;
      }catch (e){
        alert('error')
      }finally {
        this.isPostsLoading=false;
      }
    },
    async loadMorePosts(){
      try{
        this.page+=1;
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts?',{
          params:{
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages=Math.ceil(response.headers['x-total-count']/this.limit)
        this.posts=[...this.posts,...response.data];
      }catch (e){
        alert('error')
      }
    },


  },
  mounted() {
    this.fetchPosts();
    console.log(this.$refs.observer);
    const options = {
       rootMargin:'0px',
       threshold: 1.0
     };
     const callback=(entries,observer)=>{
       if(entries[0].isIntersecting && this.page<this.totalPages){
         this.loadMorePosts();
       }
    };
     const observer= new IntersectionObserver(callback,options);
    observer.observe(this.$refs.observer)
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
    // page(){
    //   this.fetchPosts()
    // }
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
  .list-empty{
    color: teal;
    margin-top: 20px;
  }
  .run-load{
    font-size: 18px;
    color: red;
  }
  h1{
    margin: 10px 0;
    color: teal;
  }
  .page__wrapper{
    display: flex;
    margin: 10px 0;
  }
  .page{
    border: 1px solid teal;
    margin: 5px;
    padding: 10px;
  }
  .current-page{
    background: rgba(0,128,128,0.5);
  }
  .observer{
    height: 30px;
    background: teal;
  }

</style>
