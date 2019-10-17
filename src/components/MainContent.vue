<template>
  <b-container class="main-content" xl="12">
    <content-header :title="title"><slot name="header"></slot></content-header>
    <content-body><slot name="body"></slot></content-body>
  </b-container>
</template>

<script>
import ContentHeader from '@/components/ContentHeader.vue'
import ContentBody from '@/components/ContentBody.vue'

export default {
  name: 'main-content',
  components: {
    ContentHeader,
    ContentBody
  },
  props: ['title', 'items']
}
</script>

<style scoped>
</style>