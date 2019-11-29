import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
      name: 'Ud', 
      path: '/udstand',
      component: () => import('@/views/udInfo.vue'),
  },
  {
      path: '/organ', 
      component: () => import('@/views/organ.vue'),
      children: [
          {
            name: 'penis', 
            path: '', 
            component: () => import('@/components/organs/penis.vue'),
          },
          {
            name: 'vaginal', 
            path: 'vaginal', 
            component: () => import('@/components/organs/vaginal.vue'),
          },
          {
            name: 'breasts', 
            path: 'breasts', 
            component: () => import('@/components/organs/breasts.vue'),
          },
        ]
  },
  {
      path: '/status',
      component: () => import('@/views/status.vue'),
      children: [
          {
            name: 'ejaculation', 
            path: '', 
            component: () => import('@/components/statuses/ejaculation.vue'),
          },
          {
            name: 'fertilization', 
            path: 'fertilization', 
            component: () => import('@/components/statuses/fertilization.vue'),
          },
          {
            name: 'menstruation', 
            path: 'menstruation', 
            component: () => import('@/components/statuses/menstruation.vue'),
          },
        ]
  },
  {
      path: '/action', 
      component: () => import('@/views/action.vue'),
      children: [
      {
          name: 'intercourse', 
          path: '', 
          component: () => import('@/components/actions/intercourse.vue'),
      },
      {
          name: 'anal', 
          path: 'anal', 
          component: () => import('@/components/actions/anal.vue'),
      },
      {
          name: 'kiss', 
          path: 'kiss', 
          component: () => import('@/components/actions/kiss.vue'),
      },
      ]
  },
]

const router = new VueRouter({
  routes
})

export default router
