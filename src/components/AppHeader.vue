
<template>
  <header>
    <div class="wrapper">
      <h1>Miss Toy</h1>
      <nav>
        <RouterLink to="/" >Toys</RouterLink>
        <RouterLink to="/about" >About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: [],

  components: {},
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>