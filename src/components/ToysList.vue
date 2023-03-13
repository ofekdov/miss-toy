
<template>
    <ul v-if="toys" class="toys-list">
      <ToyPreview
        v-for="toy in toys"
        :key="toy._id"
        :toy="toy"
        @removed="$emit('remove', toy._id)"
      />
    </ul>
    <p v-else>No todos to show..</p>
</template>

<script>
import ToyPreview from "./ToyPreview.vue";

export default {
  name: "ToysList",
  props: {
    toys: Array
  },
  components: {
    ToyPreview
  },
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
