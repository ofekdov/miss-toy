<script>
export default {
  data() {
    return {
      userName: 'Bubu'
    }
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}

</script>

<template>
  <div class="hello-world">
    <h1 class="green">{{userName}} {{ msg }}</h1>
  </div>
</template>

