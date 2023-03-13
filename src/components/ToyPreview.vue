<template>
<li class="toy-preview">
  <h2>{{toy.name}}</h2>
  <h3>{{toy.price}}$</h3>
<button @click="$emit('removed')" class="btn">
  <span>x</span>
</button>
<RouterLink :to="'/toys/edit/' + toy._id" class="btn">
  <span>Edit</span>
</RouterLink>
<RouterLink :to="'/toys/details/' + toy._id" class="btn">
  <span>Details</span>
</RouterLink>
</li> 
</template>

<script>
export default {
  name: "ToyPreview",
  props: {toy: Object},
  components: {},
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
}
</script>
