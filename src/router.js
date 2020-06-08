import Vue from "vue"
import Router from "vue-router"
import Home from "./components/Home"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: () => import("./components/About.vue")
        },    
        {
            path: "/content/:id",
            name: "content",
            component: () => import("./components/Content.vue")
        }
    ]
})