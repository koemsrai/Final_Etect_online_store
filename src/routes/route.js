import { createRouter,  createWebHistory } from "vue-router";
import Home from '../pages/Home.vue';
import Product from "../pages/Product.vue";
import About from "../pages/About.vue";
import Profile from "../pages/Profile.vue";
import MyCard from "../pages/MyCard.vue";

const routes= [
    {path:"/",component:Home},
    {path:"/product",component:Product},
    // {path:"/about",component:About},
    {path:"/about",component:About},
    {path:"/card",component:MyCard},
    {path:"/profile",component:Profile},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;