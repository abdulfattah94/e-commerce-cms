import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Products from '../views/Products.vue'
import AddForm from '../views/AddForm.vue'
import EditForm from '../views/EditForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Main
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/add',
    name: 'Add Form',
    component: AddForm
  },
  {
    path: '/products/edit/:productId',
    name: 'Edit Form',
    component: EditForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
