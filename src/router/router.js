import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/inicio/:dato',
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
        path: '/pago',
        component: () => import('../modules/pages/Pago.vue')
    },
    {
        path: '/paquetes',
        component: () => import('../modules/pages/Paquetes.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../modules/pages/NotFound.vue')
    },
    {
        path: '/participantes',
        component: () => import('../modules/pages/ParticipantesPage.vue')
    },
    {
        path: '/zoom',
        component: () => import('../modules/pages/ZoomIntegration.vue')
    },
    {
        path: '/horario',
        component: () => import('../modules/pages/HorarioPage.vue')
    },
    // {
    //     path: '/pruebazoom',
    //     component: () => import('../modules/pages/Zoom2.vue')
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router