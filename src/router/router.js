import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../modules/pages/PresentacionCursos.vue')
    },
    {
        path: '/cursos',
        component: () => import('../modules/pages/Cursos.vue')
    },
    {
        path: '/cursoMatematica',
        component: () => import('../modules/pages/CursoIndividual.vue')
    },
    {
        path: '/recursos',
        component: () => import('../modules/pages/Recursos.vue')
    },
    
    {
        path: '/perfil',
        component: () => import('../modules/pages/Perfil.vue')
    },
    {
        path: '/login',
        component: () => import('../modules/pages/LoginPage.vue')
    },
    {
        path: '/registrarse',
        component: () => import('../modules/pages/RegistroPage.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../modules/pages/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router