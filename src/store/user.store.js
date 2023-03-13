import { userService } from '../services/user.service.js'

export const userStore = {
  state: {
    user: userService.getLoggedinUser(),
  },
  getters: {
    user({ user }) {
      return user
    },
  },
  mutations: {
    updateUser(state, { user }) {
      const activty = { txt: 'Updated perferences', at: Date.now() }
      user.activities.push(activty)
      userService.save(user)
      state.user = user
    },
    addActivity(state, { activity }) {
      state.user.activities.push(activity)
    },
  },
  actions: {
    addActivity({ commit }, payload) {
      userService.addActivity(payload.activity)
      commit(payload)
    },
  },
}
