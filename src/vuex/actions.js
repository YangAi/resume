import { isEmpty } from 'lodash'

const codeList = ['iu']

export default {
	async setProfile ({ commit, state }, payload) {
		let profile = {}
		if (payload && codeList.indexOf(payload) >= 0) {
			const importData = () => import('@data/' + payload + '.js')
			profile = await importData()
			profile = profile.default
		}

		commit('SET_PROFILE', profile)
		if (!isEmpty(profile)) {
			commit('SET_PASSCODE', payload)
			localStorage.setItem('passcode', payload)
			return true
		} else {
			commit('SET_PASSCODE', false)
			localStorage.removeItem('passcode')
			return false
		}
	}
}
