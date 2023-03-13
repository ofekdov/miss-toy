
<template>
  <main>
    <ToysList 
    :toys="toys"
    @remove="removeToy"/>
    <RouterView/>
  </main>
  
</template>

<script>

import { toyService } from "@/services/toy.service";
import ToysList from "../components/ToysList.vue";
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
  data() {
    return {
      user: { fullname: "Bubu Gugu" },
    }
  },
  created() {
    this.$store.dispatch({type:'loadToys'})
  },
  components:{
    ToysList
  },
  methods: {
    removeToy(toyId) {
      this.$store
        .dispatch({ type: 'removeToy', toyId })
        .then(() => {
          showSuccessMsg('Toy removed')
        })
        .catch(err => {
          showErrorMsg('Cannot remove toy')
        })
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toys
      // return this.$store.getters.toysToDisplay
    },
  }
}
</script>
