import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=>import('@/views/home/Home.vue')
const Shop = ()=>import('@/views/shop/Shop.vue')
const Good = ()=>import('@/views/good/Good.vue')
const PublishGood = ()=>import('@/views/good/PublishGood.vue')
const Data = ()=>import('@/views/data/Data.vue')
const Kehu = ()=>import('@/views/kehu/Kehu.vue')
const Zichang = ()=>import('@/views/zichang/Zichang.vue')
const Gaishu = ()=>import('@/views/gaishu/Gaishu.vue')
const Login = ()=>import('@/views/login/Login.vue')


const router = new VueRouter({
  routes: [
    { path: '/shop', component: Shop},
    { path: '/good', component: Good},
    { path: '/publish', component: PublishGood},
	{ path: '/data', component: Data},
	{ path: '/kehu', component: Kehu},
	{ path: '/zichang', component: Zichang},
	{ path: '/gaishu', component: Gaishu},
    { path: '/', component: Home},
	{ path: '/login',
	  components: {
	    login: Login
		}
	},
    { path: '/*', redirect: '/'}
  ]
})

router.beforeEach((to, from, next)=> {
  const isLogin = localStorage.getItem('isLogin')
  console.log('isLogin', isLogin)

  if (to.path === '/login') {
    next()
  } else {
    if (isLogin == 1) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router

