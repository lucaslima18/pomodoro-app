import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tarefas from "../views/Tarefas.vue"
import Projetos from "../views/Projetos.vue"

const route: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'projetos',
        component: Projetos
    }
]

const router = createRouter({
    //criando o método padrão de configuração de rotas
    history: createWebHashHistory(),
    routes: route
})

export default router