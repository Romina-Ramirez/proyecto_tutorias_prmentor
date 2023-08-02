import { createApp } from 'vue'
import App from './App.vue'
import './css/estilos.css'
import router from './router/router'

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
