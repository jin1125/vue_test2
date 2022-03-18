<template>
  <div>
    Composition
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ nameRef }}</p>
    <p>{{ book.title }}</p>
    <p>{{ book.author[0] }}</p>
    <p>2: {{ titleRef }}</p>
    <p>2: {{ authorRef }}</p>

    <p>{{ number }}</p>
    <p>{{ sports }}</p>
  </div>
</template>

<script>
import {reactive, ref, toRefs} from 'vue'

export default {
  setup() {
    let name = 'otani'
    const age = 30
    const nameRef = ref('nishi')
    const book = reactive({
      title: 'title',
      author: ['otani', 'ito']
    })
    const booktoRefs = reactive({
      titleRef: 'title2',
      authorRef: ['otani2', 'ito2']
    })


    // console.log('setup');
    // console.log(this);
    console.log(nameRef);
    return {
      name: name,
      age: age,
      nameRef: nameRef,
      book: book,
      ...toRefs(booktoRefs)
    }
  },
  data() {
    return {
      number: 1,
      sports: "soccer"
    }
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  }
}
</script>

<style>

</style>