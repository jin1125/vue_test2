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
    <button @click="btnClick">click</button>
    <p>{{ totalPrice }}</p>
    <div>
      <input type="text" v-model="search">
    </div>
    <div>
      <input type="text" v-model="searchEffect">
    </div>

    <p>{{ number }}</p>
    <p>{{ sports }}</p>
  </div>
</template>

<script>
import {reactive, ref, toRefs, computed, watch, watchEffect, onMounted} from 'vue'

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

    const item = reactive({
      price: 100,
      number: 1
    })

    const totalPrice = computed(() => {
      return item.price * item.number
    })

    const btnClick = (e) => {
        console.log(book.title)
        console.log(e)
    }

    const search = ref('')

    watch(search, (newValue, prevValue) => {
      console.log(search.value);
      console.log(newValue);
      console.log(prevValue);
    })

    const searchEffect = ref('')
    watchEffect(()=>{
      console.log(searchEffect.value);
    })

    onMounted(()=>{
      console.log('onMounted');
    })

    // console.log('setup');
    // console.log(this);
    console.log(nameRef);
    return {
      name: name,
      age: age,
      nameRef: nameRef,
      book: book,
      ...toRefs(booktoRefs),
      btnClick,
      item,
      totalPrice,
      search,
      searchEffect
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