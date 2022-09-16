import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "HomePage",
        path : "/",
        component : () => import("@/views/Home")
    },
    {
        name: "LoginPage",
        path : "/login",
        component : () => import("@/views/Login")
    },
    {
        name: "RegisterPage",
        path : "/register",
        component : () => import("@/views/Register")
    }
]

export default createRouter({
    routes,
    history : createWebHashHistory()
})