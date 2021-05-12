<template>
  <body>
    <connection></connection>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/memes">Memes</router-link>
      </div>
      <router-view />
    </div>
  </body>
</template>

<script>
import Connection from '@/components/Connection.vue'

export default {
  name: 'App',
  components: {
    Connection
  }
}
</script>