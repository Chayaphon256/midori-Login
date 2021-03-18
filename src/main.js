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
  const firebaseConfig = {
    apiKey: "AIzaSyDJ8R7ofZr-_fOk8mjwmVmRVdrgbqSy8is",
    authDomain: "midori-project007.firebaseapp.com",
    projectId: "midori-project007",
    storageBucket: "midori-project007.appspot.com",
    messagingSenderId: "676030659556",
    appId: "1:676030659556:web:dec16b7a8e489e307665f1",
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
