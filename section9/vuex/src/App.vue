<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <button @click="setLogin">
      login name
    </button>
    {{ $store.state.count }}
    <br>
    <ul>
      <li v-for="user in visibleUsers" :key="user.id">
        {{ user.id }} : {{ user.name }}: {{ user.isVisible }}
      </li>
    </ul>
    <br>
    {{ getUserById.name }}
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions('auth', ['setLoginUser']),
    setLogin() {
      this.setLoginUser({
        name: 'otani'
      })
    }
  },
  computed: {
    visibleUsers() {
      return this.$store.getters.visibleUsers
    },
    getUserById() {
      return this.$store.getters.getUserById(2)
    }
  }
}
</script>

