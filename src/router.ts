import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/pages/home/index.vue';
import UserPage from '@/pages/user/index.vue';
import AdminPage from '@/pages/admin/index.vue'
import Header from "@/app/ui/header/Header.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", // Страница авторизации
            name: "Главная страница",           
            components: {default: HomePage, header: Header},
            meta: {
                isAuth: false,
            },
        },
        {
            path: "/user",
            name: "Личный кабинет пользователя",
            components: {default: UserPage, header: Header},
            meta: {
                isAuth: true,
            },
        },
        {
            path: "/admin",
            name: "Личный кабинет администратора",
            components: {default: AdminPage, header: Header}
        }
    ]
})

export default router