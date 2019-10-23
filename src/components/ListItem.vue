<template  >
  <b-col v-on:mouseenter="emitHovered($event)" cols="12" sm="12" md="4" lg="4" xl="4">
    <slot></slot>
  </b-col>
</template>

<script>
export default {
  methods: {
    emitHovered () {
      this.$emit('my-custom-emit');
    }
  }
}
</script>
