
<template>
  <section class="main-app">
    <AppHeader />
    <RouterView />
  </section>
</template>

  <script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "MainApp",
  props: [],
  template: `
          `,
  components: { AppHeader },
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>
