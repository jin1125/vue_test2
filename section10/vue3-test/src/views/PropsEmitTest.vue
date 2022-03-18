<template>
  <div>
    <div>
      {{ setupBooks }}
    </div>
    <ul>
      <li v-for="book in setupBooks">
        {{ book.author }}
      </li>
    </ul>
    <div>
      {{ dataBooks }}
    </div>
    <button @click="emitTest">emitTest</button>
  </div>
</template>

<script>
export default {
  props: {
    setupBooks: Array,
    dataBooks: Array
  },
  setup(props, {emit}) {
    console.log(props.setupBooks[0].title);
    console.log(props.dataBooks);

    const emitTest = () => {
      emit('custom-event', 'childValue')
    }

    return {
      emitTest
    }
  }
}
</script>

<style>

</style>