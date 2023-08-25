import { createApp } from 'vue'
import App from './App.vue'
import './css/estilos.css'
import router from './router/router'
import store from './modules/store/index'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAq55Gv5rv0Zwz4MS--y2T4uLyXxPljso",
  authDomain: "prmentor-tutorias.firebaseapp.com",
  databaseURL: "https://prmentor-tutorias-default-rtdb.firebaseio.com",
  projectId: "prmentor-tutorias",
  storageBucket: "prmentor-tutorias.appspot.com",
  messagingSenderId: "474494154102",
  appId: "1:474494154102:web:02b7a998fe91fd4f6af657",
  measurementId: "G-DHM94FFFWY"
};



// Initialize Firebase
const app=initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//const app2 = initializeApp2(firebaseConfigRecursos);


// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faBars, faSquarePhone, faBoxArchive, faDollarSign, faUserGroup, faCheck, faGem, faUnlock, faLock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faCreditCard, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faCcAmex, faCcDinersClub, faCcMastercard, faCcVisa, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

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
library.add(faLock)
library.add(faInstagram)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(store).mount('#app')
