import Vue from 'vue'
import lodash from 'lodash'
import vuex from '@/vuex'

Vue.prototype._ = lodash
Vue.prototype.$profile = () => {
	return vuex.state.profile
}
