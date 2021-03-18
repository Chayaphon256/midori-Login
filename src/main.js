import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import firebase from 'firebase/app'
import "firebase/firestore";
import 'firebase/auth';
if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: "AIzaSyDvept7ziud4UC3eF3rQKJ2DZg4FwVxMxE",
    authDomain: "midorilogin.firebaseapp.com",
    projectId: "midorilogin",
    storageBucket: "midorilogin.appspot.com",
    messagingSenderId: "823495147603",
    appId: "1:823495147603:web:8927b4d983e7e35097c6a6",
    measurementId: "G-NE4WJ3X7GM"
  };
  firebase.initializeApp(firebaseConfig)
}
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
