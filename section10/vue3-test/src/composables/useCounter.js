import { computed } from '@vue/runtime-core'

export default function useCounter(item) {
  const increment = () => {
    item.amount++
  }
  const decrement = () => {
    item.amount--
  }
  const totalPrice = computed(() => {
    return item.price * item.amount
  })

  return {
    increment,
    decrement,
    totalPrice
  }
}
