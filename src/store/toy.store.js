import { toyService } from '../services/toy.service.js'


export const toyStore = {
  state: {
    toys: null,
    toysCount: null,
    currToy: null,
    filterBy: {
      txt: '',
      status: '',
      pageIdx: 0,
      pageSize: 5,
    },
    sortBy: {
      by: '',
      desc: 1,
    },
  },
  getters: {
    toy({ currToy }) {
      return currToy
    },
    toys({toys}) {
        return toys
    },
    toysToDisplay({ filterBy, toys }) {
      if (!toys) return null

    //   const { status, txt, pageIdx, pageSize } = filterBy
    //   let filteredToys = toys

    //   const regex = new RegExp(txt, 'i')
    //   filteredToys = filteredToys.filter(toy => regex.test(toy.txt))

    //   if (status) {
    //     filteredToys = filteredToys.filter(
    //       toy =>
    //         (toy.isDone && status === 'done') ||
    //         (!toy.isDone && status === 'active')
    //     )
    //   }

    //   const startIdx = pageIdx * pageSize
    //   filteredToys = filteredToys.slice(startIdx, startIdx + pageSize)

      return filteredToys
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    setCurrToy(state, { toy }) {
      state.currToy = toy
    },
    addToy(state, { toy }) {
      state.toys.unshift(toy)
    },
    updateToy(state, { toy }) {
      const idx = state.toys.findIndex(t => t._id === toy._id)
      state.toys.splice(idx, 1, toy)
    },
    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex(toy => toy._id === toyId)
      state.toys.splice(idx, 1)
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    loadToys(context) {
      toyService
        .query()
        .then(toys => {
          context.commit({ type: 'setToys', toys })
        })
        .catch(err => {
          throw err
        })
    },
    saveToy({ commit, dispatch }, { toy }) {
      const actionType = toy._id ? 'updateToy' : 'addToy'
      return toyService.save(toy).then(savedToy => {
        commit({ type: actionType, toy: savedToy })
        // let txt = actionType === 'addToy' ? 'Added a toy' : 'Updated toy'
        // txt += `: ${savedToy.txt}`
        // const activity = { txt, at: Date.now() }
        // dispatch({ type: 'addActivity', activity })
        return savedToy
      })
    },
    removeToy({ commit, dispatch, state }, payload) {
      console.log('payload', payload)

      return toyService.remove(payload.toyId).then(() => {
        const toyTxt = state.toys.find(
          toy => toy._id === payload.toyId
        ).txt
        commit(payload) // {type: 'removeToy', toyId}
        // const activity = { txt: `Removed the toy ${toyTxt}`, at: Date.now() }
        // dispatch({ type: 'addActivity', activity })
      })
    },
    getToyById({ commit }, { toyId }) {
      return toyService.getById(toyId).then(toy => {
        commit({ type: 'setCurrToy', toy })
        return toy
      })
    },
  },
  // loadToys({ commit }, { filterBy }) {
  //   toyService
  //     .query(filterBy)
  //     .then(toys => commit({ type: 'setToys', toys }))
  //     .catch(err => {
  //       throw err
  //     })
  // },
}
