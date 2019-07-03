import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import beforeEach from './beforeEach'
import NProgress from 'muse-ui-progress'

Vue.use(Router)

const router = new Router({
  routes,
  // mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (!to.meta.doNotGoTop) {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach(beforeEach)

router.afterEach(() => {
  NProgress.done()

  setTimeout(() => {
  }, 500)
})

export default router
