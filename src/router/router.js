import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import Posts from "@/pages/Posts.vue";
import About from "@/pages/About.vue";
import PostIdPage from "@/pages/PostIdPage.vue";

const routes=[
    {
        path: '/',
        component: Main,
    },
    {
        path: '/posts',
        component: Posts,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/posts/:id',
        component: PostIdPage,
    },
]
    const router = createRouter({
        routes,
        history:createWebHistory(process.env.BASE_URL)
    })
export default router