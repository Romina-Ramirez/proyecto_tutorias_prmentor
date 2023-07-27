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
        path: '/recursos',
        component: () => import('../modules/pages/Recursos.vue')
    },
    {
        path: '/contacto',
        component: () => import('../modules/pages/Contacto.vue')
    },
    {
        path: '/perfil',
        component: () => import('../modules/pages/Perfil.vue')
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