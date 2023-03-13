<template>
  <section v-if="toy" class="toy-edit ">
    <h2>{{(toy._id)? 'Edit' : 'Add'}} a toy</h2>
    <form @submit.prevent="saveToy" class="toy-form">
      <label for="">
      Toy Name: <input class="input" v-model="toy.name" type="text" />
      </label>
      <label for="">
      Toy Price: <input class="input" v-model="toy.price" type="number" />
      </label>
      <button class="btn">Save</button>
    </form>
  </section>
</template>

<script>
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { toyService } from "../services/toy.service.js";
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
  name: "ToyEdit",
  props: [],
  components: {},
  created() {},
  data() {
    return {
      toy: toyService.getEmptyToy()
    }
  },
  methods: {
    saveToy() {
      this.$store
        .dispatch({ type: "saveToy", toy: this.toy })
        .then(toy => {
          showSuccessMsg("Added/Updated succssefully")
          this.$router.push("/toys")
        })
        .catch(err => {
          showErrorMsg("Couldn't add/update toy")
        })
    }
  },
  computed: {
    currToy() {
            return this.$store.state.currToy
        }
  },
  created(){
    const {toyId} = this.$route.params

        if(toyId) {
            // this.$store.dispatch({type:'getToyById', toyId})
            // .then(()=>{
            //     this.toy = {...this.currToy}
            // })
            toyService.getById(toyId)
            .then(toy=> this.toy =  toy)
        }
  }
}
</script>
