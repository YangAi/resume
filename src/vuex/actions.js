import { isEmpty, toLower } from 'lodash'

const codeList = ['iu']

export default {
	async setProfile ({ commit, state }, passcode) {
		let profile = {}
		passcode = toLower(passcode)
		if (passcode && codeList.indexOf(passcode) >= 0) {
			const importData = () => import('@data/' + passcode + '.js')
			profile = await importData()
			profile = profile.default
		}

		commit('SET_PROFILE', profile)
		if (!isEmpty(profile)) {
			commit('SET_PASSCODE', passcode)
			localStorage.setItem('passcode', passcode)
			return true
		} else {
			commit('SET_PASSCODE', false)
			localStorage.removeItem('passcode')
			return false
		}
	}
}
