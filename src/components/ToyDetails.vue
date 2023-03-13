<template>
    <section v-if="toy" class="toy-details">
        <h2>Toy Name:{{toy.name}}</h2>
        <h2>Toy Price:{{toy.price}}$</h2>
        <button @click="returnToList" >X</button>
    </section>
</template>

<script>

import { toyService } from '../services/toy.service.js'

export default {
  name: "ToyDetails",
  props: [],
  components: {},
  created() {},
  data() {
    return {toy: null}
  },
  methods: {
    returnToList() {
      this.$router.push('/toys')
    }
  },
  computed: {},
  watch: {
    '$route.params': {
      handler() {
        const { toyId } = this.$route.params

        toyService.getById(toyId).then(toy => (this.toy = toy))

        // this.$store
        //   .dispatch({ type: 'getById', todoId })
        //   .then(todo => (this.todo = todo))
      },
      immediate: true,
    },
  }
}
</script>
