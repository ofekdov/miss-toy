import { toyStore } from './toy.store.js'
import {createStore} from 'vuex'

export const store = createStore({
  strict: true,
  modules: {
    toyStore,
  },
})

