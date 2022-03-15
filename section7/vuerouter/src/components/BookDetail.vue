<template>
  <div>
    <p>title: {{ title }}</p>
    <p>content: {{ content }}</p>
    {{ books[bookIndex].title }}
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    content: String,
  },
  data() {
    return {
      bookIndex: this.$route.params.id - 1,
      books: [
        {id: 1 , title: 'title1', content: 'detail1'},
        {id: 2 , title: 'title2', content: 'detail2'},
        {id: 3 , title: 'title3', content: 'detail3'}
      ]
    }
  },
  created() {
    if(this.$route.params.id > this.books.length) {
      this.$router.push('/book')
    }
  }
}
</script>

<style>

</style>