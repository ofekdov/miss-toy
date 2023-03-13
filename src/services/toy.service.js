// import { storageService } from './storage.service.js'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const KEY = 'toysDB'
// const API = 'api/toy/'
export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

_createToys()

function query(filterBy = { txt: '', status: '', pageIdx: 0 }) {
  // return axios.get(API, { params: filterBy }).then(res => res.data)

  return storageService.query(KEY).then(toys => {
  // filter here
  return toys
  })
}

function getById(id) {
  // return axios
  //   .get(API + id)
  //   .then(res => res.data)
  //   .catch(err => console.log(err))

  return storageService.get(KEY, id)
}

function remove(id) {
  // return axios.delete(API + id).then(res => res.data)
  return storageService.remove(KEY, id)
}

function save(toy) {
  // if (toy._id) return axios.put(API + toy._id, toy).then(res => res.data)

  // return axios.post(API, toy).then(res => res.data)
  const savedToy = toy._id
    ? storageService.put(KEY, toy)
    : storageService.post(KEY, toy)

  return savedToy
}

function getEmptyToy() {
  return {
    _id: '',
    name:'',
    price:'',
    labels:[],
    inStock:true,
  }
}

// const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 
// 'Outdoor', 'Battery Powered']

function _createToys() {
  let toys = localStorage.getItem(KEY)

  if (!toys || !toys.length) {
    toys = [
      _createToy('Nerf gun',121,['Box game','Battery Powered']),
      _createToy('Ktan',142,['Box game','Outdoor','Puzzle']),
      _createToy('Shit head',34,['Box game','Puzzle','Outdoor']),
    ]
    localStorage.setItem(KEY, JSON.stringify(toys))
  }
  return toys
}

function _createToy(name,price,labels) {
  return {
    _id: utilService.makeId(),
    name,
    price,
    labels,
    inStock:true,
    createdAt:Date.now(),
  }
}

