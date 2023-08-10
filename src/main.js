import { createApp } from 'vue'
import App from './App.vue'
import './css/estilos.css'
import router from './router/router'

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faBars, faSquarePhone, faBoxArchive, faDollarSign, faUserGroup, faCheck, faGem, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faCreditCard, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faCcAmex, faCcDinersClub, faCcMastercard, faCcVisa, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faMagnifyingGlass)
library.add(faBars)
library.add(faEnvelope)
library.add(faSquarePhone)
library.add(faBoxArchive)
library.add(faDollarSign)
library.add(faCreditCard)
library.add(faCcMastercard)
library.add(faSquarePlus)
library.add(faUserGroup)
library.add(faFacebook)
library.add(faCheck)
library.add(faGem)
library.add(faUnlock)
library.add(faCcVisa)
library.add(faCcAmex)
library.add(faCcDinersClub)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
