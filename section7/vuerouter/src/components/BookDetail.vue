<template>
  <div>
    <p>title: {{ title }}</p>
    <p>content: {{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    content: String,
  }
}
</script>

<style>

</style>