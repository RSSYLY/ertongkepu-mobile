import { createRouter, createWebHistory } from 'vue-router'
// 商品详情页面
import ProductDetailView from '../views/subpage/productdetailview.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/product/:id',
      component: ProductDetailView,
      props:true
    },
    {
      path: '/main',
      component: () => import('../views/mainpage/main.vue'),
      children: [
        {
          path: 'index',
          component: () => import('../views/mainpage/index.vue')
        },
        {
          path: 'cart',
          component: () => import('../views/mainpage/cart.vue')
        },
        {
          path: 'personal',
          component: () => import('../views/mainpage/personal.vue')
        },
        {
          path: 'productlist',
          component: () => import('../views/mainpage/productlist.vue')
        }
      ]
    }
  ]
})

// 让所有访问路径不是上述的路径都跳转到 /main/index
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/main' || to.path === '/main/'|| to.path === '/product') {
    next('/main/index')
  } else {
    next()
  }
})

export default router
