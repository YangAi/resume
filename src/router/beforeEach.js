import NProgress from 'muse-ui-progress'
import vuex from '@/vuex'

const beforeEach = (to, from, next) => {
  const passcode = localStorage.getItem('passcode')
  if (passcode) {
    vuex.dispatch('setProfile', passcode)
  } else {
    return to.name !== 'Auth' ? next({ name: 'Auth' }) : next()
  }
  NProgress.start()
  next()
}

export default beforeEach
