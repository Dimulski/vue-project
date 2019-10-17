<template>
  <h1>{{title}}<slot></slot></h1>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>
h1 {
  margin-bottom: 40px !important;
}
</style>

