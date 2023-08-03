import { createApp } from 'vue'
import App from './App.vue'
import './css/estilos.css'
import router from './router/router'

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faBars, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

library.add(faMagnifyingGlass)
library.add(faBars)
library.add(faEnvelope)
library.add(faSquarePhone)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
