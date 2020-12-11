import Vue from 'vue'
import VueRouter from 'vue-router'
import patient from '../components/patient.vue'
import medecin from '../components/medecin.vue'
import Dashboard from '../components/Dashboard.vue'
import analyse from '../components/analyse.vue'
import payment from '../components/payment.vue'
import  login  from "../components/login.vue";
import  configuration  from "../components/configuration.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  }, {
    path: '/dashboard',
    name: 'patient',
    component: Dashboard
  },{
    path: '/configuration',
    name: 'configuration',
    component: configuration
  },
  {
    path: '/patient',
    name: 'patient',
    component: patient
  },{
    path: '/medecin',
    name: 'medecin',
    component: medecin,
  },
  {
    path: '/payment',
    name: 'payment',
    component: payment,
  },
  {
    path: '/analyse',
    name: 'analyse',
    component: analyse,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router