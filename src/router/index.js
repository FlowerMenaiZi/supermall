import vue from 'vue'
import Router from 'vue-router'

//进行懒加载
const home = () => import('views/home/Home');
const category = () => import('views/category/Category');
const cart = () => import('views/cart/Cart');
const profile = () => import('views/profile/Profile');

  vue.use(Router);

const routes = [
  {
    path: '',
    redirect:'/home',
  },
  {
    path: '/home',
    component:home,
  },
  {
    path: '/category',
    component:category,
  },
  {
    path: '/cart',
    component:cart,
  },
  {
    path: '/profile',
    component:profile,
  },
]

export default new Router({
  routes,
  mode: 'history',
})
